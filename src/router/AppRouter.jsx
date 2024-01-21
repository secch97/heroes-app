import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/*" element={<HeroesRoutes></HeroesRoutes>}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
