import './App.css';
import {Routes, Route} from "react-router-dom";
import AboutCompany from './employee/AboutCompany';
import AboutEmployee from './employee/AboutEmployee';
import ContactCEO from './employee/ContactCEO';
import ContactDevelopers from './employee/ContactDevelopers'; 
import ContactEmployee from './employee/ContactEmployee';
import ContactManager from './employee/ContactManager';
import EmployeeList from './employee/EmployeeList';
import { Navbar } from './users/Navbar';
// import EmployeeAdd from './users/EmployeeAdd';
// import { StudentAdd } from './users/StudentAdd';
// import { UsersAdd } from './users/UsersAdd';



function App() {



  return (
    <>
   
     {/* <UsersAdd/> */}
     {/* <StudentAdd /> */}
     {/* <EmployeeAdd/> */}
     <Navbar/>
     <Routes>
        <Route path="/emplist" element={<EmployeeList />}></Route>
        <Route path="/aboutemp" element={<AboutEmployee />}></Route>
        <Route path="/contactemp" element={<ContactEmployee />}></Route>
        <Route path="/contactemp/manager" element={<ContactManager />}></Route>
        <Route path="/contactemp/ceo" element={<ContactCEO />}></Route>
        <Route path="/contactemp/dev" element={<ContactDevelopers />}></Route>
        <Route path="/aboutcompany/:id" element={<AboutCompany/>}></Route>
      </Routes>

  </>
   
  );
  
}
export default App;
