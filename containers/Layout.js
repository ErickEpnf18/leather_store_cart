import React from "react";
import ProfileEmployee from "./employee/ProfileEmp";
import ProductsAdm from "./admin/ProductsAdm";
import ClientsAdm from "./admin/ClientsAdm";
import EmployeesAdm from "./admin/EmployeesAdm";
import CompaniesAdm from "./admin/CompaniesAdm";
import BillingsAdm from "./admin/BillingsAdm";
import ProductsEmp from "./employee/ProductsEmp";
import ClientsEmp from "./employee/ClientsEmp";
import BillingsEmp from "./employee/BillingsEmp";
import SellersAdm from "./admin/SellersAdm";
import SellersEmp from "./employee/SellersEmp";

import Profile from "./client/Profile";
import Kart from "./client/Kart";
import MyBuyings from "./client/MyBuyings";
import Billings from "./client/Billings";
import Welcome from "./Welcome";

const Layout = ({ children, nameView }) => {
  return (
    <div>
      {/* ADMIN */}
      {nameView === "products_adm" && <ProductsAdm />}
      {nameView === "clients_adm" && <ClientsAdm />}
      {nameView === "employees_adm" && <EmployeesAdm />}
      {nameView === "companies_adm" && <CompaniesAdm />}
      {nameView === "billings_adm" && <BillingsAdm />}
      {nameView === "sellers_adm" && <SellersAdm />}
      {/* EMPLOYEE */}
      {nameView === "profile_emp" && <ProfileEmployee />}
      {nameView === "products_emp" && <ProductsEmp />}
      {nameView === "clients_emp" && <ClientsEmp />}
      {nameView === "billings_emp" && <BillingsEmp />}
      {nameView === "sellers_emp" && <SellersEmp />}
      {/* CLIENT */}
      {nameView === "profile_client" && <Profile />}
      {nameView === "kart_client" && <Kart />}
      {nameView === "my_buying_client" && <MyBuyings />}
      {nameView === "billings_client" && <Billings />}

      {nameView === "welcome" && <><Welcome /> {children}</>}
    </div>
  );
};

export default Layout;
