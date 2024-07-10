import React from "react";
import { ArrowRight } from "../assets/icon/arrow-right";
import { useSelector, useDispatch } from "react-redux";
import { removeAll } from "../redux/reducer/like-reducer";
import { CardKarzinka } from "../components/card-karzinka";
import { useNavigate } from "react-router-dom";
export const BasketPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, price } = useSelector((store) => store?.like);
  const removeProduct = () => {
    dispatch(removeAll());
    navigate("/");
  };
  console.log(price);
  return (
    <div className="container pb-[150px]">
      <div className="mb-5">
        <p className="text-sm font-normal text-[#7A7687] flex items-center gap-1">
          Главная
          <ArrowRight />
          Корзина ({product?.length})
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-start gap-[15px]">
        <div className="flex flex-col gap-[10px]">
          {product?.map((item) => (
            <CardKarzinka key={item?.document_id} data={item} />
          ))}
        </div>
        <div className="py-[15px]  md:max-w-[212px] lg:max-w-[320px] w-full px-5 border border-farsighted rounded-3xl">
          <div className="flex items-center mb-[15px] pb-[15px] justify-between border-b border-farsighted">
            <p className="font-semibold text-sm text-lead">Итого</p>
            <p className="font-semibold text-sm text-lead">
              {Math.ceil(price)} руб
            </p>
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="font-medium text-xs text-lead">
              Товары ({product?.length})
            </p>
            <p className="font-medium text-xs text-lead">
              {Math.ceil(price)} руб
            </p>
          </div>
          <div className="flex items-center justify-between mb-5">
            <p className="font-medium text-xs text-lead">Скидка</p>
            <p className="font-medium text-xs text-lead">0 руб</p>
          </div>
          <button
            onClick={() => removeProduct()}
            className="text-ultra-pure-white w-full font-semibold block text-xs border border-transparent mb-[10px] py-[11px] px-[30px] bg-primary rounded-3xl"
          >
            Оформить заказ
          </button>
          <button className="text-lead font-semibold w-full block text-xs py-[11px] px-[30px] bg-transparent border border-dusty-plum rounded-3xl">
            Задать вопрос
          </button>
        </div>
      </div>
    </div>
  );
};
