import React, { useState } from "react";
import { ArrowRight } from "../assets/icon/arrow-right";
import { ProductsData } from "../data/data";
import { CardMain } from "../components/card-main";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Brand from "../components/Brand";
import Location from "../components/Location";
import FooterTop from "../components/FooterTopp";
export const AksiiPage = () => {
  const [page, setPage] = useState(0);
  const [age, setAge] = React.useState("");

  const m = Math.ceil(ProductsData.length / 8);
  const nav = Array(m).fill(0);
  let n = 0;

  if (page > 0) {
    n = n + 5;
  } else n;
  console.log(page, n);
  const handleChange = (event, value) => {
    setPage(value);
  };
  let products = ProductsData.slice(page, 5);

  return (
    <>
      <div className="container flex flex-col md:flex-row gap-2 items-start pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <div className="md:hidden block w-full mb-2">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Фильтр</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Группы товаров</MenuItem>
              <MenuItem value={20}>Мониторы</MenuItem>
              <MenuItem value={30}>Кровати</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="py-[15px] w-[30%] md:block hidden lg:w-[25%] px-5 border border-farsighted rounded-xl">
          <p className="pb-[15px] border-b border-farsighted font-medium text-base mb-5">
            Категории
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center justify-between">
              <p className="font-normal text-sm text-lead"> Группы товаров </p>
              <ArrowRight />
            </li>
            <li className="flex items-center justify-between">
              <p className="font-normal text-sm text-lead">Мониторы</p>{" "}
              <ArrowRight />
            </li>
            <li className="flex items-center justify-between">
              <p className="font-normal text-sm text-lead">Лампы</p>
              <ArrowRight />
            </li>
            <li className="flex items-center justify-between">
              <p className="font-normal text-sm text-lead">Кровати</p>
              <ArrowRight />
            </li>
            <li className="flex items-center justify-between">
              <p className="font-normal text-sm text-lead">Рентгены</p>
              <ArrowRight />
            </li>
          </ul>
        </div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
            {products.map((item, i) => (
              <CardMain key={i} data={item} />
            ))}
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Pagination
              count={nav.length}
              onChange={handleChange}
              color="primary"
            />
          </div>
        </div>
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <Brand />
      </div>
      <div className="pb-[60px] md:pb-[120px] lg:pb-[150px]">
        <Location />
      </div>
      <FooterTop />
    </>
  );
};
