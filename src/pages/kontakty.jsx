// src/components/ContactForm.js
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-white text-black py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Контакты</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
          <h3 className="text-2xl font-bold mb-4">ООО Глобал Медикал Трейд</h3>
          <p className="mb-2">Юридический адрес:</p>
          <p className="text-gray-600">Россия, г. Москва, ул. Докучина, 8, стр. 2</p>
          <p className="mb-2">Фактический адрес:</p>
          <p className="text-gray-600">Россия, г. Москва, ул. Докучина, 8, стр. 2</p>
          <p className="mb-2">Режим работы:</p>
          <p className="text-gray-600">Пн-Пт с 09:00-19:00</p>
          <p className="text-gray-600">Сб-Вс - выходной</p>
          <p className="mt-4 mb-2">Звоните. Звонки по России бесплатны:</p>
          <p className="text-gray-600">Телефоны:</p>
          <p className="text-gray-600">8-800-000-00-00</p>
          <p className="text-gray-600">+7-000-000-00-00</p>
          <p className="text-gray-600">+7-495-000-00-00</p>
          <p className="mt-4 mb-2">Пишите:</p>
          <p className="text-gray-600">info@mail.ru</p>
          <p className="mt-4 mb-2">Реквизиты:</p>
          <p className="text-gray-600">ИНН 9717039181</p>
          <p className="text-gray-600">ОГРН 1167746796986</p>
          <p className="mt-4 mb-2">Мы в соцсетях:</p>
          <div className="flex space-x-2">
            <a href="#" className="hover:text-green-500"><i className="fab fa-vk"></i></a>
            <a href="#" className="hover:text-green-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-green-500"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
          <h3 className="text-2xl font-bold mb-4">Бесплатная консультация</h3>
          <p className="mb-4">Оставьте свои координаты и наш менеджер перезвонит вам через 10 минут</p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                {...register('name', { required: true })}
                className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.name && <p className="text-red-500 text-sm">Это поле обязательно для заполнения</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Ваш телефон"
                {...register('phone', { required: true })}
                className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.phone && <p className="text-red-500 text-sm">Это поле обязательно для заполнения</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Ваш email"
                {...register('email', { required: true })}
                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.email && <p className="text-red-500 text-sm">Это поле обязательно для заполнения</p>}
            </div>
            <div>
              <textarea
                placeholder="Ваш вопрос"
                {...register('message', { required: true })}
                className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-500`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">Это поле обязательно для заполнения</p>}
            </div>
            <button type="submit" className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
              Отправить
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Нажимая «Отправить», я соглашаюсь с обработкой персональных данных на условиях <a href="#" className="text-green-500 hover:underline">Политики конфиденциальности</a>.
          </p>
        </div>
      </div>
      <div className="py-10">
        <h3 className="text-2xl font-bold mb-4">Местоположение</h3>
        <div className="h-64 w-full">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.00758358225!2d-74.25987568730592!3d40.697149422929075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b805b28f41%3A0x1f4e8d8e8f79c2a0!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1622927400758!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
