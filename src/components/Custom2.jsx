import React, { useState } from "react";
import { ProductsData } from "../data/data";
import { IoBarChartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Custom2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemWidth = 330;

  const moveSlide = (direction) => {
    const totalItems = ProductsData.length;
    if (direction === 1) {
      setCurrentSlide((prev) => (prev + 1) % totalItems);
    } else {
      setCurrentSlide((prev) => (prev - 1 + totalItems) % totalItems);
    }
  };

  const handleIconClick = (action, itemId) => {
    if (action === "chart") {
      console.log(`Chart clicked for item ${itemId}`);
    } else if (action === "heart") {
      console.log(`Heart clicked for item ${itemId}`);
    }
  };

  return (
    <div className="mx-auto max-w-[1440px] px-4 md:px-5 lg:px-4">
      <h2 className="mb-6 text-lg font-medium leading-[120%] md:mb-8 md:text-xl lg:mb-10 lg:text-[30px]">
        Каталог товаров
      </h2>
      <div>
        <div className="relative w-full overflow-hidden">
          <div
            className="mb-10 flex transition-transform duration-2000ms"
            style={{
              transform: `translateX(-${currentSlide * itemWidth}px)`,
            }}
          >
            {ProductsData.map((item) => (
              <div
                key={item.id}
                className="mx-2 flex-shrink-0 rounded-[10px] border text-gray-600 border-[#E5E2EE] bg-[#F8F7F3] transition-transform duration-1000 hover:scale-105"
              >
                <div className="relative flex h-[172px] w-full items-center justify-center rounded-t-[10px] border-b border-[#E5E2EE] bg-white pt-10 lg:h-[280px]">
                  <div className="absolute top-[10px] flex w-full justify-between px-[10px] lg:top-4 lg:px-4">
                    <button className="rounded-[60px] border border-[#088269] bg-[#E1EFE6] px-[10px] py-1 text-[12px] font-semibold text-[#088269] lg:text-sm">
                      Новинка
                    </button>
                    <div className="flex gap-[6px] lg:gap-[10px]">
                      <button
                        className="transition duration-300ease-in-out hover:text-[#088269]"
                        onClick={() => handleIconClick("chart", item.id)}
                      >
                        <IoBarChartOutline className="h-5 w-5 lg:h-6 lg:w-6" />
                      </button>
                      <button
                        className="transition duration-300 ease-in-out hover:text-[#088269]"
                        onClick={() => handleIconClick("heart", item.id)}
                      >
                        <FaRegHeart className="h-5 w-5 lg:h-6 lg:w-6" />
                      </button>
                    </div>
                  </div>
                  <img
                    src={item.img}
                    alt="Slider Img"
                    className="h-full w-full rounded-t-[10px] object-cover"
                  />
                </div>
                <div className="px-3 py-4 lg:py-5">
                  <p className="mb-1 text-[16px] font-semibold lg:mb-[10px] lg:text-lg">
                    {item.title}
                  </p>
                  <div className="mb-4 flex flex-col lg:mb-7">
                    <span className="text-[10px] font-normal text-[#7A7687] lg:text-[12px]">
                      Артикул: 213134
                    </span>
                    <span className="text-[10px] font-normal text-[#7A7687] lg:text-[12px]">
                      В наличии
                    </span>
                  </div>
                  <p className="mb-2 text-[16px] font-semibold lg:mb-4 lg:text-[18px]">
                    300 000 руб.
                  </p>
                  <button className="w-full rounded-[50px] border border-[#D5D1E1] py-2 text-[12px] font-semibold text-[#088269] transition duration-300 ease-in-out hover:border-[#088269] hover:bg-[#088269] hover:text-white lg:py-3 lg:text-sm">
                    Добавить в корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-3">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D5D1E1] transition duration-300 ease-in-out hover:border-[#07745E] hover:bg-[#07745E] hover:text-white lg:h-10 lg:w-10"
              onClick={() => moveSlide(-1)}
            >
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M16 8.50023C16 8.86454 15.7435 9.16563 15.4107 9.21328L15.3182 9.21985L3.33247 9.21927L7.66255 13.7707C7.92939 14.0511 7.93032 14.5068 7.66462 14.7884C7.42308 15.0444 7.04433 15.0685 6.77698 14.8601L6.70037 14.7906L1.20026 9.01055C1.16509 8.97359 1.13453 8.93358 1.10861 8.89134C1.10128 8.87862 1.09383 8.86561 1.08676 8.85234C1.08026 8.84097 1.07438 8.82915 1.06884 8.81721C1.06114 8.79983 1.05362 8.78188 1.0468 8.76356C1.04125 8.74944 1.03662 8.73571 1.03239 8.72186C1.02737 8.70469 1.02249 8.68639 1.01829 8.66782C1.01517 8.65485 1.01269 8.64237 1.01054 8.62984C1.00751 8.61119 1.00492 8.5919 1.00308 8.57238C1.00149 8.55749 1.00054 8.54274 1.00001 8.52797C0.99987 8.51901 0.999698 8.50964 0.999698 8.50022L1.00004 8.47235C1.00056 8.45822 1.00148 8.44411 1.00278 8.43003L0.999698 8.50022C0.999698 8.45481 1.00368 8.41038 1.01131 8.3673C1.01307 8.35702 1.01518 8.34645 1.01751 8.33594C1.02235 8.31427 1.02795 8.29341 1.0344 8.27296C1.03756 8.2628 1.04125 8.25194 1.04518 8.24117C1.05315 8.21951 1.06181 8.19887 1.07134 8.17876C1.07577 8.16931 1.08072 8.15941 1.08591 8.14961C1.09443 8.13363 1.10321 8.11844 1.11249 8.10364C1.11904 8.09316 1.12629 8.08225 1.13387 8.07152L1.13977 8.06322C1.15814 8.03789 1.17807 8.01389 1.19942 7.99113C1.20026 7.99023 1.20112 7.98933 1.20198 7.98843L6.70037 2.20988C6.93343 1.955 7.32196 1.9313 7.5852 2.13953L7.66255 2.20888C7.89539 2.46378 7.91865 2.8832 7.73022 3.17849L7.66255 3.25117L3.33247 7.80261L15.3182 7.80319C15.7036 7.80319 16 8.1219 16 8.50023Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.3"
                  />
                </svg>
              </i>
            </button>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D5D1E1] transition duration-300 ease-in-out hover:border-[#07745E] hover:bg-[#07745E] hover:text-white lg:h-10 lg:w-10"
              onClick={() => moveSlide(1)}
            >
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M1.00003 8.49977C1.00003 8.13546 1.25651 7.83437 1.58933 7.78672L1.68187 7.78015L13.6676 7.78073L9.33749 3.22929C9.07065 2.9489 9.06971 2.49321 9.33541 2.21157C9.57695 1.95563 9.9557 1.93147 10.223 2.13992L10.2997 2.20939L15.7998 7.98946C15.8349 8.02641 15.8655 8.06642 15.8914 8.10866C15.8988 8.12138 15.9062 8.13439 15.9133 8.14766C15.9198 8.15903 15.9257 8.17085 15.9312 8.18279C15.9389 8.20017 15.9464 8.21812 15.9532 8.23644C15.9587 8.25056 15.9634 8.26429 15.9676 8.27814C15.9726 8.29531 15.9775 8.31361 15.9817 8.33218C15.9848 8.34515 15.9873 8.35763 15.9895 8.37016C15.9925 8.38881 15.9951 8.4081 15.9969 8.42762C15.9985 8.44251 15.9995 8.45726 16 8.47203C16.0001 8.481 16.0003 8.49036 16.0003 8.49978L15.9999 8.52765C15.9994 8.54178 15.9985 8.55589 15.9972 8.56997L16.0003 8.49978C16.0003 8.54519 15.9963 8.58962 15.9887 8.6327C15.9869 8.64298 15.9848 8.65355 15.9825 8.66406C15.9777 8.68573 15.9721 8.70659 15.9656 8.72704C15.9625 8.7372 15.9588 8.74806 15.9548 8.75883C15.9468 8.78049 15.9382 8.80113 15.9287 8.82124C15.9242 8.83069 15.9192 8.84059 15.914 8.85039C15.9055 8.86637 15.8967 8.88156 15.8875 8.89636C15.881 8.90684 15.8737 8.91775 15.8661 8.92848L15.8602 8.93678C15.8419 8.96211 15.8219 8.98611 15.8006 9.00887C15.7998 9.00977 15.799 9.01067 15.7981 9.01157L10.2997 14.7901C10.0667 15.045 9.67818 15.0687 9.41493 14.8605L9.33749 14.7911C9.10464 14.5362 9.08137 14.1168 9.2698 13.8215L9.33749 13.7488L13.6676 9.19739L1.68187 9.19681C1.29649 9.19681 1.00003 8.8781 1.00003 8.49977Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.3"
                  />
                </svg>
              </i>
            </button>
          </div>
          <Link
            to="/catalog"
            className="text-[12px] font-semibold text-[#696967] transition duration-300 ease-in-out hover:text-[#088269] lg:text-sm"
          >
            Показать больше
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom2;
