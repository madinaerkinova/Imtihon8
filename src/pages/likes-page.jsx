import React from "react";
import { useSelector } from "react-redux";
import { CardMain } from "../components/card-main";
import { ArrowRight } from "../assets/icon/arrow-right";
import { useNavigate } from "react-router-dom";
import { ArrowBottom } from "../assets/icon/arrow-bottom";
import { MenuBarIcon } from "../assets/icon/menuBar-icon";
import { MenuIcon } from "../assets/icon/menu-icon";
export const LikesPage = () => {
  const { like } = useSelector((store) => store?.like);
  console.log(like);
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto lg:pb-[150px] md:pb-[150px] pb-[60px]">
        <div className="lg:mb-[100px] md:mb-10 md:block sm:hidden">
          <p className="text-sm font-normal text-[#7A7687] flex items-center gap-1">
            Главная
            <ArrowRight />
            Медицинское оборудование
            <ArrowRight />
            <span className="text-[#202020]">Избранное</span>
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
          <h2 className="font-medium md:text-5xl text-xl text-lead">
            Избранное
          </h2>
          {like.length == 0 && (
            <div>
              <h2 className="font-medium text-lead text-xl mb-5 md:text-3xl md:mb-[26px]">
                Не добавлено товаров в избранное
              </h2>
              <p className="font-medium text-base text-brewing-storm block w-[70%] mb-6">
                Вы можете перейти на главную страницу или воспользоваться
                каталогом товаров
              </p>
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={() => navigate("")}
                  className="text-primary text-sm font-semibold px-[30px] py-[11px] border border-dusty-plum rounded-3xl"
                >
                  На главную
                </button>
                <button
                  onClick={() => navigate("/katalog")}
                  className="text-ultra-pure-white text-sm font-semibold px-[30px] py-[11px] border border-transparent bg-primary rounded-3xl"
                >
                  В каталог
                </button>
              </div>
            </div>
          )}
        </div>
        {like?.length > 0 && (
          <div className="mt-10 flex md:flex-row flex-col md:justify-between gap-8">
            <div className="flex  flex-row md:flex-col gap-5 md:gap-[10px] md:w-[15%]  ">
              <p className="text-base font-medium text-lead">
                Все товары <span>({like?.length})</span>
              </p>
              <p className="text-base font-medium text-brewing-storm">
                Маммографы
              </p>
              <p className="text-base font-medium text-brewing-storm">
                Флюорографы
              </p>
            </div>
            <div className="md:w-[75%] ">
              <div className="flex w-full items-center justify-between py-[11px] px-[20px] border border-farsighted rounded-md mb-[10px]">
                <div className="relative inline-block pr-8">
                  <select
                    name="select"
                    id="select"
                    className="font-normal outline-none text-sm w-full"
                  >
                    <option value="po">По популярности</option>
                    <option value="id">По популярности</option>
                  </select>
                  <div className="absolute right-4 top-[50%]">
                    <ArrowBottom />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MenuIcon />
                  <MenuBarIcon />
                </div>
              </div>
              <div className="grid mb-[57px] md:mb-6 grid-cols-1 sm:grid-cols-2 md::grid-cols-3 gap-[10px]">
                {like.map((item) => (
                  <CardMain key={item} data={item} />
                ))}
              </div>
              <div className="md:text-left text-center">
                <button
                  onClick={() => navigate("/katalog")}
                  className="text-ultra-pure-white  text-sm font-semibold px-[30px] py-[11px] border border-transparent bg-primary rounded-3xl"
                >
                  В каталог
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
