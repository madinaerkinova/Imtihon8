// src/components/Services.js
import React from 'react';
import Slider from 'react-slick';
import { FaRegHeart } from "react-icons/fa";
import img1 from '../../public/assets/image1.jpg';
import img2 from '../../public/assets/image2.jpg';
import img3 from '../../public/assets/image3.jpg';
import img4 from '../../public/assets/image4.jpg';
import img5 from '../../public/assets/image5.jpg';
import img6 from '../../public/assets/image6.jpg';
import img7 from '../../public/assets/image7.jpg';
import img8 from '../../public/assets/image8.jpg';
import certificate from '../../public/assets/certificate.jpg';
import Location from '../components/Location';

const servicesData = [
  {
    title: "Аппробация",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img1,
  },
  {
    title: "Помощь в подборе оборудования",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img2,
  },
  {
    title: "Помощь инженеров в настройке",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img3,
  },
  {
    title: "Пуско-наладочные работы",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img4,
  },
  {
    title: "Обучение работе с оборудованием",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img5,
  },
  {
    title: "Подменный аппарат",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img6,
  },
  {
    title: "Подменный аппарат",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img7,
  },
  {
    title: "Подменный аппарат",
    description: "Также как постоянное информационно-пропагандистское обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов.",
    image: img8,
  }
];

const factsData = [
  { number: '7 лет', description: 'на рынке' },
  { number: '964+', description: 'оригинальной продукции со всего мира' },
  { number: '23+', description: 'международных сертификатов качества' },
  { number: '2452+', description: 'товаров всегда в наличии' }
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows: true,
};

const Services = () => {
  return (
    <div className="bg-white text-black py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Услуги</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1400px] mx-auto">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white text-black rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 flex flex-col sm:flex-row sm:items-center">
            <div className="p-4 flex-1 min-h-[300px]">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Заказать
              </button>
            </div>
            <img src={service.image} alt={service.title} className="w-full sm:w-[300px] h-[400px] object-cover rounded-lg" />
          </div>
        ))}
      </div>

      <div className="container">
        <div className="py-20 flex justify-between">
          <div className="w-[50%] py-4">
            <h3 className="pt-2 pb-5 text-[30px] font-medium">Цифры и факты</h3>
            <p className="text-[16px] text-[#202020] font-medium w-[80%] opacity-50">
              Мы работаем на результат и продаём <br /> только качественную продукцию
            </p>
          </div>
          <div className="w-[50%]">
            {factsData.map((fact, index) => (
              <div key={index} className="py-4 flex justify-between items-center border-b-[1px] border-[#D5D1E1]">
                <span className="text-[48px] text-[#088269] font-medium">
                  {fact.number}
                </span>
                <p className={`text-[16px] font-medium ${index === 0 ? "ml-[200px]" : "mr-[40px]"}`}>
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between py-10 text-center">
        <p className="mb-4 text-[40px] w-[680px] text-start">Вы сможете <span className="text-green-500">оставить заявку</span> на услуги и скачать бланк для заполнения</p>
        <div className='flex items-end flex-col'>
          <div className="flex justify-center space-x-4 mb-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              <span>Бланк для  заполнения</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              <span>Заполненная форма</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Оставить заявку
          </button> 
        </div>
      </div>

      <div className="py-10">
        <h2 className="text-3xl font-bold mb-6">Сертификаты на продукцию</h2>
        <Slider {...sliderSettings}>
          {Array(6).fill().map((_, index) => (
            <div key={index} className="relative px-2">
              <img 
                src={certificate} 
                alt={`Certificate ${index + 1}`} 
                className="w-[500px] h-[650px] object-cover rounded-lg" 
              />
            </div>
          ))}
        </Slider>
      </div>

      <Location />
    </div>
  );
};

export default Services;
