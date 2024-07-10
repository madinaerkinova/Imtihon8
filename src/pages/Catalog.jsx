import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ProductsData } from "../data/data";
import MedicalFacilities from "../components/MedicalFacilities";
import Custom from "../components/Custom";

const ProductCatalog = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex max-w-[1400px] gap-4 px-4 md:px-5 lg:px-4">
        <div className="sidebar hidden h-[595px] grid-cols-1 rounded-[10px] border border-[#E5E2EE] p-4 sm:block md:w-[236px] lg:w-">
          <h2 className="sidebar-title mb-5 border-b border-[#E5E2EE] pb-4 font-medium leading-[140%]">
            Направления
          </h2>
          <ul className="direction-list flex flex-col gap-y-3">
            {[
              "Реанимация",
              "Хирургия",
              "Офтальмология",
              "Лабораторная диагностика",
              "Акушерство и Гинекология",
              "Гистология",
              "Косметология",
              "Оториноларингология",
              "Рентгенология и томография",
              "Стерилизация",
              "Физиотерапия и реабилитация",
              "Функциональная диагностика",
              "Эндоскопия",
              "Новинки",
              "Распродажи",
            ].map((direction, index) => (
              <li key={index}>
                <Link
                  to="#"
                  className="direction-item flex justify-between transition duration-300 ease-in-out hover:text-[#088269]"
                >
                  <span className="direction-name font-normal text-sm">
                    {direction}
                  </span>
                  <MdOutlineKeyboardArrowRight className="arrow-icon h-5 w-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-grid grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {ProductsData.map((product) => (
            <Link
              to="/"
              key={product.document_id}
              className="product-card rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3] overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="product-image-container h-[152px] xl:h-56">
                <img
                  className="product-image h-full w-full object-cover"
                  src={product.img}
                  alt={product.commercial_name}
                />
              </div>
              <div className="product-info p-4">
                <h3 className="product-name text-lg font-medium mb-2">
                  {product.commercial_name}
                </h3>
                <p className="product-manufacturer text-sm text-gray-600 mb-1">
                  {product.mah}
                </p>
                <p className="product-rating text-sm text-gray-600">
                  Rating: {product.rating}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <MedicalFacilities />
      <Custom />
    </div>
  );
};

export default ProductCatalog;
