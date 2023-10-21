import { Carousel, IconButton } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";
const AllProducts = () => {
  const specificBrands = useLoaderData();

  //   console.log(specificBrands[0]);

  const advertiseBrand = specificBrands[0];
  const { _id } = specificBrands;
  console.log(_id);
  console.log(specificBrands);

  return (
    <div>
      {specificBrands.length <= 0 ? (
        <div>
          <div className="hero my-10 p-10 rounded-xl bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">No Product Found</h1>
                <p className="py-6">
                  There is no product available on our shop of this brand.
                  Kindly browse others.
                </p>
                <Link to='/'>
                  <button className="btn btn-primary">Go Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-3/6 mx-auto m-10">
            <Carousel
              autoplay={true}
              autoplayDelay={2000}
              loop={true}
              transition={{ duration: 1 }}
              className="rounded-xl"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="h-10 w-10 bg-gray-500 p-2 rounded"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="h-10 w-10 bg-gray-500 p-2 rounded"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
            >
              <img
                src={advertiseBrand.adImage1}
                alt="image 1"
                className=" h-full w-full object-cover"
              />
              <img
                src={advertiseBrand.adImage2}
                className=" h-full w-full object-cover"
              />
              <img
                src={advertiseBrand.adImage3}
                alt="image 3"
                className=" h-full w-full object-cover"
              />
            </Carousel>
          </div>
          {specificBrands.map((specificBrand) => (
            <div key={specificBrand._id} className="flex mx-auto">
              <div className="flex mx-auto">
                <div className="m-5  relative text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                  <div className="relative  mx-4 mt-4 overflow-hidden text-white rounded-xl  bg-clip-border shadow-blue-gray-500/40">
                    <img
                      className="w-56"
                      src={specificBrand.image}
                      alt="img-blur-shadow"
                    />
                  </div>
                  <div className="p-6">
                    <h5 className=" mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {specificBrand.name}
                    </h5>
                    <p className=" font-normal text-base antialiased  leading-relaxed text-inherit">
                      Brand Name:
                      <span className="font-bold"> {specificBrand.brand}</span>
                    </p>
                    <p className=" font-normal text-base antialiased  leading-relaxed text-inherit">
                      Type:
                      <span className="font-bold"> {specificBrand.type}</span>
                    </p>
                    <p className=" font-normal text-base antialiased  leading-relaxed text-inherit">
                      Price:
                      <span className="font-bold"> ${specificBrand.price}</span>
                    </p>
                    <p className=" font-normal text-base antialiased  leading-relaxed text-inherit">
                      Rating:
                      <span className="font-bold"> {specificBrand.rating}</span>
                    </p>
                  </div>
                  <div className="p-6 pt-0 ">
                    <Link to={`/product-details/${specificBrand._id}`}>
                      <button
                        className=" m-1 select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        Details
                      </button>
                    </Link>
                    <Link to={`/update-product/${specificBrand._id}`}>
                      <button
                        className="m-1 select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                      >
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
