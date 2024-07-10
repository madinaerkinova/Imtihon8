import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Katalog from "./pages/Catalog";
import DostavkaPage from "./pages/DostavkaPage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import UslugiPage from "./pages/UslugiPage";
import StatyaPage from "./pages/StatyaPage";
import OplataPage from "./pages/OplataPage";
import Prozivoditel from "./pages/Prozivoditel";
import KabinetPodKlyuch from "./pages/KabinetPodKlyuch";
import Garantii from "./pages/Garantii";
import { Layout } from "./layout/layout";
import Kontakty from "./pages/kontakty";
import { LikesPage } from "./pages/likes-page";
import { BasketPage } from "./pages/basket-page";
import { AksiiPage } from "./pages/Aksii-page";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="katalog" element={<Katalog />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="aktsii" element={<AksiiPage />} />
          <Route path="proizvoditel" element={<Prozivoditel />} />
          <Route path="kabinet-pod-klyuch" element={<KabinetPodKlyuch />} />
          <Route path="katalog" element={<Katalog />} />
          <Route path="garantii" element={<Garantii />} />
          <Route path="dostavka" element={<DostavkaPage />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<ProductDetailsPage />} />
          <Route path="uslugi" element={<UslugiPage />} />
          <Route path="kontakty" element={<Kontakty />} />
          <Route path="statya" element={<StatyaPage />} />
          <Route path="oplata" element={<OplataPage />} />
          <Route path="favorite" element={<LikesPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
