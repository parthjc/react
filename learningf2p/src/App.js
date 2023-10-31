import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ApiDemo1 } from "./api/ApiDemo1";
import { ApiDemo2 } from "./api/ApiDemo2";
import { ApiDemo3 } from "./api/ApiDemo3";
import { AboutCompany } from "./employee/AboutCompany";
import { AboutEmployee } from "./employee/AboutEmployee";
import { ContactCEO } from "./employee/ContactCEO";
import { ContactDevelopers } from "./employee/ContactDevelopers";
import { ContactEmployee } from "./employee/ContactEmployee";
import { ContactManager } from "./employee/ContactManager";
import { EmployeeList } from "./employee/EmployeeList";
import { Navbar } from "./users/Navbar";
import { ApiDemoPost } from "./api/ApiDemoPost";
import { AddApiUser } from "./api/AddApiUser";
import { ApiTokenDemo } from "./api/ApiTokenDemo";
import { WeatherApp } from "./api/WeatherApp";
import { Count } from "./users/Count";
import { UserDetail } from "./api/UserDetail";
import { UserEdit } from "./api/UserEdit";
import { Students } from "./student/Students";
import { Products } from "./product/Products";
import { ProductCart } from "./product/ProductCart";
import { useState } from "react";
import { ProductContext } from "./product/ProductContext";
import { LoginUser } from "./users/LoginUser";

// import {EmployeeAdd} from './users/EmployeeAdd';
// import { StudentAdd } from './users/StudentAdd';
// import { UsersAdd } from './users/UsersAdd';

function App() {

  var [sharedData, setsharedData] = useState()


  return (
    <>
      {/* <UsersAdd/>  */}
      {/* <StudentAdd /> */}
      {/* <EmployeeAdd/> */}
      <ProductContext.Provider value={{ sharedData, setsharedData }}>

        <Navbar />
        <Routes>
          <Route path="/emplist" element={<EmployeeList />}></Route>
          <Route path="/aboutemp" element={<AboutEmployee />}></Route>
          <Route path="/contactemp" element={<ContactEmployee />}></Route>
          <Route path="/contactemp/manager" element={<ContactManager />}></Route>
          <Route path="/contactemp/ceo" element={<ContactCEO />}></Route>
          <Route path="/contactemp/dev" element={<ContactDevelopers />}></Route>
          <Route path="/aboutcompany/:id" element={<AboutCompany />}></Route>
          <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
          <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
          <Route path="/apidemo3" element={<ApiDemo3 />}></Route>
          <Route path="/apidemopost" element={<ApiDemoPost />}></Route>
          <Route path="/apiadduser" element={<AddApiUser />}></Route>
          <Route path="/apitokendemo" element={<ApiTokenDemo />}></Route>
          <Route path="/weatherapp" element={<WeatherApp />}></Route>
          <Route path="/count" element={<Count />}></Route>
          <Route path="/user/detail/:id" element={<UserDetail />}></Route>
          <Route path="/user/edit/:id" element={<UserEdit />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<ProductCart />}></Route>
          <Route path="/login" element={<LoginUser />}></Route>
        </Routes>
      </ProductContext.Provider>

    </>
  );
}
export default App;
