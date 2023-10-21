import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

const Roots = () => {
  return (
    <div className="max-w-6xl mx-auto mt-4">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
