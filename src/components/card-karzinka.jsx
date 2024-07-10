import React from "react";
import { FaShoppingCart, FaHeart, FaHeartBroken } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addLike,
  deleteLike,
  deleteProduct,
  toggleAnmount,
} from "../redux/reducer/like-reducer";
import { DeleteIcon } from "../assets/icon/delete-icon";

export const CardKarzinka = ({ data }) => {
  const dispatch = useDispatch();
  const { product, like } = useSelector((store) => store?.like);

  const [likeData, setLikeData] = React.useState(false);
  const [productData, setProductData] = React.useState(false);

  React.useEffect(() => {
    setLikeData(like?.some((item) => item?.document_id === data?.document_id));
    setProductData();
    product?.some((item) => item?.document_id === data?.document_id);
  }, [like, product]);

  const handleRemoveCart = (product) => {
    dispatch(deleteProduct(product));
    setProductData(false);
  };

  const handleAddLike = (product) => {
    dispatch(addLike(product));
    setLikeData(product);
  };
  const removeLike = (product) => {
    dispatch(deleteLike(product));
    setLikeData(false);
  };
  const toggleAdd = (text) => {
    dispatch(
      toggleAnmount({ ...data, document_id: data?.document_id, type: text })
    );
  };

  return (
    <div className="border relative sm:h-[350px] md:h-[260px]  border-farsighted rounded-xl pr-[15px] overflow-hidden flex md:flex-row flex-col md:justify-between items-start md:gap-5">
      <div className="lg:max-w-[320px] w-full h-[150px]   md:max-w-[180px] block    md:h-[260px] md:border-r border-farsighted">
        <img
          className="w-full h-full"
          src={data?.img}
          alt={data?.commercial_name}
        />
      </div>
      <div className="block px-5 md:hidden">
        <>
          <div className="flex pt-5 lg:pb-5  gap-5  lg:gap-10 lg:flex-row flex-col">
            <div>
              <p className="lg:font-semibold font-medium text-base lg:text-lg mb-[10px] text-lead w-[70%]">
                {data?.commercial_name}
              </p>
              <p className="text-brewing-storm mb-1 text-sm font-normal">
                Артикул: {data?.document_id}
              </p>
              <p className="text-brewing-storm text-sm font-normal">
                В наличии
              </p>
            </div>
            <div className="h-full flex lg:flex-col justify-between">
              <p className="font-semibold text-lg text-lead mb-5 ">
                {data?.price} руб
              </p>
              <div className="inline-block">
                <div className="lg:py-[11px] py-[5px] w-[96px] justify-center  px-5 flex items-center gap-4 border border-dusty-plum rounded-3xl">
                  <button
                    onClick={() => toggleAdd("delete")}
                    className={`${
                      data?.userCount > 1
                        ? "text-primary"
                        : "text-brewing-storm"
                    } font-bold text-xl cursor-pointer`}
                  >
                    -
                  </button>
                  <p className="font-semibold text-sm text-primary">
                    {data?.userCount}
                  </p>
                  <button
                    onClick={() => toggleAdd("add")}
                    className="font-bold text-xl text-primary cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 absolute top-1 right-2 pb-5 flex  items-center gap-[15px] ml-15">
            {likeData ? (
              <button
                onClick={() => removeLike(data)}
                className="text-[#ff6b6b] hover:text-[#e55a5a] heart-icon"
              >
                <FaHeart size={20} />
              </button>
            ) : (
              <button
                onClick={() => handleAddLike(data)}
                className="text-[#ff6b6b] hover:text-[#e55a5a] heart-icon"
              >
                <FaHeartBroken size={20} />
              </button>
            )}
            <button onClick={() => handleRemoveCart(data)}>
              <DeleteIcon />
            </button>
          </div>
        </>
      </div>
      <>
        <div className="md:flex hidden pt-5 lg:pb-5  gap-5  lg:gap-10 lg:flex-row flex-col">
          <div>
            <p className="lg:font-semibold font-medium text-base lg:text-lg mb-[10px] text-lead w-[70%]">
              {data?.commercial_name}
            </p>
            <p className="text-brewing-storm mb-1 text-sm font-normal">
              Артикул: {data?.document_id}
            </p>
            <p className="text-brewing-storm text-sm font-normal">В наличии</p>
          </div>
          <div className="h-full flex lg:flex-col justify-between">
            <p className="font-semibold text-lg text-lead mb-5 ">
              {data?.price} руб
            </p>
            <div className="inline-block">
              <div className="lg:py-[11px] py-[5px] w-[96px] justify-center  px-5 flex items-center gap-4 border border-dusty-plum rounded-3xl">
                <button
                  onClick={() => toggleAdd("delete")}
                  className={`${
                    data?.userCount > 1 ? "text-primary" : "text-brewing-storm"
                  } font-bold text-xl cursor-pointer`}
                >
                  -
                </button>
                <p className="font-semibold text-sm text-primary">
                  {data?.userCount}
                </p>
                <button
                  onClick={() => toggleAdd("add")}
                  className="font-bold text-xl text-primary cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 pb-5 md:flex hidden items-center gap-[15px] ml-15">
          {likeData ? (
            <button
              onClick={() => removeLike(data)}
              className="text-[#ff6b6b] hover:text-[#e55a5a] heart-icon"
            >
              <FaHeart size={20} />
            </button>
          ) : (
            <button
              onClick={() => handleAddLike(data)}
              className="text-[#ff6b6b] hover:text-[#e55a5a] heart-icon"
            >
              <FaHeartBroken size={20} />
            </button>
          )}
          <button onClick={() => handleRemoveCart(data)}>
            <DeleteIcon />
          </button>
        </div>
      </>
    </div>
  );
};
