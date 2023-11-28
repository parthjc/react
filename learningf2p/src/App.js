import "./App.css";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import ProtectedRoutes from "./hooks/ProtectedRoutes";
import { MuiDemo1 } from "./Material/MuiDemo1";
import { MuiDemo2 } from "./Material/MuiDemo2";
import { MuiTable } from "./Material/MuiTable";
import { MuiTable2 } from "./Material/MuiTable2";
import { MaterialDashBoard } from "./Material/MaterialDashBoard";




function App() {
  var [sharedData, setSharedData] = useState([]);

  return (
    <>
      <ProductContext.Provider value={{ sharedData, setSharedData }}>
        <div className="App">
          <Navbar />
          {/* Other components/routes */}
        </div>

        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/emplist" element={<EmployeeList />} />
            <Route path="/aboutemp" element={<AboutEmployee />} />
            <Route path="/contactemp" element={<ContactEmployee />} />
            <Route path="/contactemp/manager" element={<ContactManager />} />
          </Route>

          <Route path="/contactemp/ceo" element={<ContactCEO />} />
          <Route path="/contactemp/dev" element={<ContactDevelopers />} />
          <Route path="/aboutcompany/:id" element={<AboutCompany />} />
          <Route path="/apidemo1" element={<ApiDemo1 />} />
          <Route path="/apidemo2" element={<ApiDemo2 />} />
          <Route path="/apidemo3" element={<ApiDemo3 />} />
          <Route path="/apidemopost" element={<ApiDemoPost />} />
          <Route path="/apiadduser" element={<AddApiUser />} />
          <Route path="/apitokendemo" element={<ApiTokenDemo />} />
          <Route path="/weatherapp" element={<WeatherApp />} />
          <Route path="/count" element={<Count />} />
          <Route path="/user/detail/:id" element={<UserDetail />} />
          <Route path="/user/edit/:id" element={<UserEdit />} />
          <Route path="/students" element={<Students />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ProductCart />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/muidemo1" element={<MuiDemo1 />} />
          <Route path="/muidemo2" element={<MuiDemo2 />} />
          <Route path="/MuiTable" element={<MuiTable />} />
          <Route path="/MuiTable2" element={<MuiTable2 />} />
          <Route path="/materialDashBoard" element={<MaterialDashBoard />} />
        </Routes>
      </ProductContext.Provider>
    </>
  );
}

export default App;
