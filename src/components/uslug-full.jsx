import React from "react";
import { OfferIcon } from "../assets/icon/offer-icon";
import { Offer3Icon } from "../assets/icon/offer3-icon";
import { Offer4Icon } from "../assets/icon/offer4-icon";
import { CarbonIcon } from "../assets/icon/carbon-icon";
export const UslugFull = () => {
  return (
    <div className="mx-auto mb-36 container">
      <h3 className="mb-10 md:text-xl text-lg lg:text-[30px] font-medium leading-[120%]">
        Перечень гарантийных услуг
      </h3>
      <div className="grid md:grid-cols-4 mb-10 grid-cols-1 sm:grid-cols-2 gap-2.5">
        <div className="flex w-full flex-col items-center justify-center rounded-[10px] border border-gray-200 lg:h-[320px]">
          <i className="mb-10">
            <OfferIcon />
          </i>
          <p className="font-medium leading-[140%] text-center w-[80%] mx-auto pb-3">
            {" "}
            Установка, настройка и пуско-наладка медтехники
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-[10px] border border-gray-200 lg:h-[320px]">
          <i className="mb-10">
            <CarbonIcon />
          </i>
          <p className="font-medium leading-[140%] text-center w-[80%] mx-auto pb-3">
            Сервисное обслуживание медицинской техники любой комплектации
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-[10px] border border-gray-200 lg:h-[320px]">
          <i className="mb-10">
            <Offer3Icon />
          </i>
          <p className="font-medium leading-[140%] text-center w-[80%] mx-auto pb-3">
            {" "}
            Гарантийное и постгарантийное обслуживание
          </p>
        </div>
        <div className="flex w-full flex-col text-center items-center justify-center rounded-[10px] border border-gray-200 lg:h-[320px]">
          <i className="mb-10">
            <Offer4Icon />
          </i>
          <p className="font-medium leading-[140%] text-center w-[80%] mx-auto pb-3">
            {" "}
            Диагностика и проведение профилактических работ
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[10px] justify-center md:justify-end">
        <button className="text-primary py-2 px-5 text-sm font-semibold rounded-3xl border border-farsighted">
          Гарантийный случай
        </button>
        <button className="text-white bg-primary py-2 px-5 text-sm font-semibold rounded-3xl border border-transparent">
          Замена товара
        </button>
      </div>
    </div>
  );
};
