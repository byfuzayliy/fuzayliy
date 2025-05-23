import React from "react";
import Header from "../../components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
