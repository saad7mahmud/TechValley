import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" p-2 overflow-hidden ">
      <div data-aos="fade-left" className=" mt-10 mb-10   bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <img
            src="https://i.ibb.co/61J2TqX/main-qimg-47310479cb31ee3683a76b8d927cfb26-lq.jpg"
            className="max-w-xs rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-3xl font-light">
              Unleash Innovation, <br />
              <span className=" font-bold"> Explore Technology</span>
            </h1>
            <p className="py-6 font-light ">
              TechValley: Your one-stop destination for cutting-edge technology
              and the latest in mobile devices, laptops, and gadgets. Explore a
              world of innovation, stay connected, and upgrade your digital
              lifestyle with us.
            </p>
            {/* <Link to="/hire">
              <button className="btn btn-primary">Hire Us</button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
