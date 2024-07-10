import React from 'react';
import image1 from '../../public/assets/image1.jpg';
import image7 from '../../public/assets/image7.jpg';


const Article = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <ol className="flex space-x-2 text-gray-600">
          <li><a href="/" className="hover:text-blue-500">Главная</a></li>
          <li>&gt;</li>
          <li className="text-black">Блог</li>
          <li>&gt;</li>
          <li className="text-black">Информационная статья</li>
        </ol>
      </nav>
      
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Информационная статья</h1>
        <p className="text-gray-500">Автор: Иванов Р.</p>
      </header>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Содержание:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Новая модель организационной деятельности</li>
          <li>Мы вынуждены отталкиваться от того, что курс</li>
          <li>Новая модель организационной деятельности</li>
          <li>Мы вынуждены отталкиваться от того, что курс</li>
        </ul>
      </section>
      
      {Array.from({ length: 4 }).map((_, idx) => (
        <section key={idx} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Новая модель организационной деятельности</h2>
          <p className="text-gray-700 mb-4">
            Равным образом, внедрение современных методов однозначно фиксирует необходимость поступательного и
            последовательного развития общества. В частности, постоянное информационно-пропагандистское
            обеспечение нашей деятельности, а также свежий взгляд на привычные вещи – базовоe открывает новые
            горизонты для стандартных подходов. Каждый из нас понимает очевидную вещь: постоянный количественный
            рост и сфера нашей активности создает предпосылки для соответствующих условий активизации.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src={image1} alt="example" className="rounded-lg shadow-md hover:shadow-lg transition" />
            <img src={image7} alt="example" className="rounded-lg shadow-md hover:shadow-lg transition" />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Article;
