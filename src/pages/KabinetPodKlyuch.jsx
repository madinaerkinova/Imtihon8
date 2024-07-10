import React, { useState } from "react";
import { Input, Button, Snackbar } from "@mui/material";
import { ProductsData } from "../data/data";
import Custom from "../components/Custom";
import Location from "../components/Location";
import Information from "../components/Information";

const ProductsGallery = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOrderClick = () => {
    if (/^\d{10}$/.test(phoneNumber)) {
      // Handle the valid phone number submission here
      setOpenSnackbar(true);
      setPhoneNumber("");
    } else {
      // Handle the invalid phone number case here
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <div className="container pt-5 pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <h1 className="text-4xl font-bold mb-8">Кабинеты под ключ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ProductsData.map((product, index) => (
            <div
              key={index}
              className="relative group w-full border border-farsighted overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={product.img}
                alt={product.commercial_name}
                className="w-full group-hover:scale-[1.1] max-h-[180px] md:max-h-[300px] h-full transition-transform duration-500"
              />

              <div className="absolute bottom-6 left-3 right-0 bg-white bg-opacity-75 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-lg font-medium">{product.commercial_name}</p>
              </div>
              <p className="py-[20px] px-[25px] text-base font-bold text-lead">
                Реанимация
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-5 pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <Custom />
      </div>
      <div className="container pt-5 pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10 border border-farsighted rounded-xl bg-farsighted-light">
          <h2 className="font-medium text-lead text-lg md:text-xl lg:text-3xl w-[75%]">
            Закажите у нас комплексное оснащение
          </h2>
          <div>
            <Input
              className="mb-[45px]"
              fullWidth
              placeholder="Ваш телефон"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <div className="flex items-center gap-[30px]">
              <Button
                className="text-ultra-pure-white font-semibold text-xs md:text-sm py-[8px] px-[20px] md:py-[11px] md:px-[30px] bg-primary rounded-3xl"
                onClick={handleOrderClick}
              >
                Заказать
              </Button>
              <p className="md:text-xs text-[10px] font-medium text-lead">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях{" "}
                <span className="text-primary">Политики конфиденциальности.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <Information />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <Location />
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Спасибо! Ваш заказ принят."
      />
    </>
  );
};

export default ProductsGallery;
