import React from "react";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./auth";

const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
    </>
  );
};

export default HeroesApp;
