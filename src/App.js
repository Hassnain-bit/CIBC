import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MakeAPayment from "./pages/makeAPayment";
import StudentDetails from "./pages/studentDetails";
import PayerDetails from "./pages/payerDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MakeAPayment />} />
        <Route path="/studentDetails" element={<StudentDetails />} />
        <Route path="/payerDetails" element={<PayerDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
