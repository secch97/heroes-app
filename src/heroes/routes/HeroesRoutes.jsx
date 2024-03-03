import React from "react";
import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, Heroe, MarvelPage, Search } from "../pages";


export const HeroesRoutes = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage></MarvelPage>}></Route>
          <Route path="dc" element={<DcPage></DcPage>}></Route>
          <Route path="search" element={<Search></Search>}></Route>
          <Route path="heroe/:heroId" element={<Heroe></Heroe>}></Route>
          <Route path="/" element={<Navigate to="/marvel" replace></Navigate>}></Route>
        </Routes>
      </div>
    </>
  );
};
