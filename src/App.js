import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeDetail from "./components/EmployeeDetail";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
