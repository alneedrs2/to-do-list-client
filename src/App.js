import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar/Calendar";
import CompletedTask from "./components/CompletedTask/CompletedTask";
import ToDo from "./components/ToDo/ToDo";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Update from "./components/Update/Update";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<ToDo></ToDo>}></Route>
          <Route path="/calendar" element={<Calendar></Calendar>}></Route>
          <Route
            path="completed"
            element={<CompletedTask></CompletedTask>}
          ></Route>
          <Route path="/update/:id" element={<Update></Update>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
