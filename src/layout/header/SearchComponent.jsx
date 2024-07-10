import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ProductsData } from '../../data/data'; 

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = () => {
    const filtered = ProductsData.filter(item =>
      item.commercial_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="p-5">
      <div className="flex mb-5">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search..."
          className="p-2 w-80 border rounded-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {filteredItems.length > 0 && (
        <div>
          {filteredItems.map((item, index) => (
            <div key={index} className="flex items-center p-4 border-b border-gray-300">
              <img
                src={item.img}
                alt={item.commercial_name}
                className="w-12 h-12 mr-4 rounded object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.commercial_name}</h3>
                <p className="text-sm text-gray-600">Manufacturer: {item.mah}</p>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Rating:</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`h-4 w-4 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
