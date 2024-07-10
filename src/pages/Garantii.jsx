import React from "react";
import { ArrowRight } from "../assets/icon/arrow-right";
import { UslugFull } from "../components/uslug-full";
import Location from "../components/Location";
const Garantii = () => {
  return (
    <div className="container">
      <div className="mb-5">
        <p className="text-sm font-normal text-[#7A7687] flex items-center gap-1">
          Главная
          <ArrowRight />
          <span className="text-lead"> Гарантии</span>
        </p>
      </div>
      <div className="lg:pt-[100px] md:pt-[50px] pt-[40px] lg:pb-[120px] md:pb-[80px] pb-[60px] lg:w-[55%] md:w-[80%] w-full">
        <h2 className="text-lead font-medium text-[48px] mb-10">Гарантии</h2>
        <p className="text-base text-lead font-medium mb-[15px] md:mb-5">
          Регулярное сервисное обслуживание медицинской техники – залог ее
          надежной, беспроблемной эксплуатации, а также продолжительного срока
          службы. Периодическая диагностика позволяет выявить любые
          неисправности, отклонения от нормального рабочего режима на самых
          ранних сроках. Это предотвратит серьезные поломки, приводящие к
          дорогостоящим ремонтам.{" "}
        </p>
        <p className="text-base text-lead font-medium mb-[15px] md:mb-5">
          Являясь авторизованным дилером брендов, продукция которых представлена
          в каталоге, компания:
        </p>
        <ol className=" mb-[15px] md:mb-5">
          <li>
            <p className="text-base text-lead font-medium">
              {" "}
              1.Предоставляет услуги сервисного и гарантийного обслуживания.
            </p>
          </li>
          <li>
            <p className="text-base text-lead font-medium ">
              {" "}
              2.Осуществляет поставку оригинальных запчастей и комплектующих.
            </p>
          </li>
          <li>
            <p className="text-base text-lead font-medium ">
              {" "}
              3.Обучает медицинский персонал работе с современным
              высокотехнологичным оборудованием.
            </p>
          </li>
        </ol>
        <p className="text-base text-lead font-medium">
          Глобал Медикал Трейд является надежным поставщиком медицинского
          оборудовани, предлагая своим клиентам качественную продукцию по лучшей
          цене. Наша компания гарантирует всем клиентам возможность
          воспользоваться услугами квалифицированных мастеров в установке,
          пуско-наладке, сервисном и техническом обслуживании приобретенного
          оборудования.
        </p>
      </div>
      <UslugFull />
      <div className="pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <div className=" py-10 lg:px-10 px-5 bg-primary rounded-lg grid md:grid-cols-2 gap-[10px] grid-cols-1">
          <p className="lg:text-3xl md:text-xl text-lg font-medium text-ultra-pure-white">
            Внимание!
          </p>
          <div>
            <p className="font-medium md:text-sm text-xs lg:text-base text-ultra-pure-white mb-2 md:mb-5">
              Рассмотрение заявки на замену товара осуществляется в срок до 30
              дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ,
              при условии предоставления документов, перечисленных в договоре.
            </p>
            <p className="font-medium md:text-sm text-xs lg:text-base text-ultra-pure-white">
              Оформление гарантийного случая осуществляется согласно
              Гражданскому кодексу РФ, при условии предоставления документов,
              перечисленных в договоре и при наличии заявления с указанием
              причины возврата, оформленного надлежащим образом.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <Location />
      </div>
    </div>
  );
};

export default Garantii;
