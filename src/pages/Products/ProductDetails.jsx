import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const singleProduct = useLoaderData();
  console.log(singleProduct);
  const {
    adImage1,
    adImage2,
    adImage3,
    brand,
    description,
    image,
    name,
    price,
    rating,
    type,
    _id,
  } = singleProduct;

  const oneProduct = {
    adImage1,
    adImage2,
    adImage3,
    brand,
    description,
    image,
    name,
    price,
    rating,
    type,
  };

  // Sending data to backend

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(e);

    fetch(`http://localhost:5000/product-details/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(oneProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added to cart",
            text: "Product Successfully Added to cart!",
          });
        }
      });
  };
  // Sending data to backend

  return (
    <div className="m-10">
      <h1 className="text-center text-4xl font-semibold underline">
        Product Details
      </h1>
      <div className="flex mx-auto">
        <div className="flex mx-auto ">
          <div className="m-5  relative text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
            <div className="relative  mx-4 mt-4 overflow-hidden text-white rounded-xl  bg-clip-border shadow-blue-gray-500/40">
              <img className="w-full" src={image} alt="img-blur-shadow" />
            </div>
            <div className="p-6">
              <h5 className=" mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                {name}
              </h5>
              <p className=" font-normal text-base antialiased  leading-relaxed text-inherit">
                Brand Name:
                <span className="font-bold"> {brand}</span>
              </p>
              <p className=" font-normal text-base antialiased  leading-relaxed text-inherit">
                Type:
                <span className="font-bold"> {type}</span>
              </p>
              <p className=" font-normal text-base antialiased  leading-relaxed text-inherit">
                Price:
                <span className="font-bold"> ${price}</span>
              </p>
              <p className=" font-normal text-base antialiased  leading-relaxed text-inherit">
                Rating:
                <span className="font-bold"> {rating}</span>
              </p>
              <p className=" font-normal text-base antialiased  leading-relaxed text-inherit">
                Description:
                <span className="font-bold"> {description}</span>
              </p>
            </div>
            <div className="p-6 pt-0 ">
              <Link>
                <button
                  onClick={handleAddToCart}
                  className="w-full m-1 select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
