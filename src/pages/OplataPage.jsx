import React from 'react';
import image5 from '../../public/assets/image5.jpg';

const Payment = () => {
  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <ol className="flex space-x-2 text-gray-600">
          <li><a href="/" className="hover:text-blue-500">Главная</a></li>
          <li>&gt;</li>
          <li className="text-black">Оплата</li>
        </ol>
      </nav>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Оплата</h1>
        <p className="text-gray-500">
          Учитывая стремительно развитие мировых медицино-космических технологий, врачи Российской Федерации в 
          особенных странах сталкиваются с задачами, требующими обновления приборов в различных направлениях, 
          от установки компьютерной томографии до ультразвуковых сенсоров и ЛОР кабинетов.
        </p>
      </header>

      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">Оплата наличными</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Также как постоянное обеспечение нашей деятельности требует определения</li>
              <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии</li>
              <li>Также как постоянное обеспечение нашей</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">Безналичный расчет</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Также как постоянное обеспечение нашей деятельности требует определения</li>
              <li>Также как постоянное обеспечение нашей</li>
              <li>Также как постоянное</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-2">Оплата банковской картой</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии</li>
              <li>Также как постоянное обеспечение нашей</li>
              <li>Также как постоянное обеспечение</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Порядок возврата денежных средств</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">При оплате наличными</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Также как постоянное обеспечение нашей деятельности требует определения</li>
              <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии</li>
              <li>Также как постоянное обеспечение нашей</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">При оплате банковской картой</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Также как постоянное обеспечение нашей деятельности требует определения</li>
              <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии</li>
              <li>Также как постоянное обеспечение нашей</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Условия поставок</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Лизинг</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Также как постоянное обеспечение нашей деятельности требует определения</li>
              <li>Также как постоянное</li>
              <li>Также как постоянное обеспечение нашей</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Рассрочка</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии</li>
              <li>Также как постоянное обеспечение нашей</li>
              <li>Также как постоянное обеспечение нашей</li>
            </ul>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Payment;
