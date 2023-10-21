import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import axios from "axios";

const Cart = () => {
  const loadedCartData = useLoaderData();

  const [cartData, setCardData] = useState(loadedCartData);

  console.log(cartData);

  const handleDelete = (_id) => {
    console.log("delete", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-sage.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The product has been deleted.", "success");
              const remaining = cartData.filter(
                (oneCardData) => oneCardData._id !== _id
              );
              setCardData(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div>
        <h1 className="m-10 text-center font-normal text-4xl">
          My Cart Items:
        </h1>
        {cartData.length <= 0 && (
          <div className="flex flex-col  mx-auto">
            <p className="text-center text-xl text-red-300 m-10">
              You have not added any item to the cart
            </p>
            <Link
              className="m-10 max-w-sm mx-auto select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
              to="/"
            >
              Go Home
            </Link>
          </div>
        )}
        <ul>
          {cartData?.map((singleCartData) => (
            <div className="m-10" key={singleCartData._id}>
              <div className="max-w-sm mx-auto flex rounded px-10 py-2 border items-center justify-between overflow-hidden shadow-lg">
                <img
                  src={singleCartData.image}
                  alt={singleCartData.name}
                  className="w-20  object-cover"
                />
                <div className=" py-4">
                  <div className="font-bold text-xl m-2">
                    {singleCartData.name}
                  </div>
                </div>
                <div className=" py-4">
                  <button
                    onClick={() => handleDelete(singleCartData._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
        <div>
          {cartData.length > 0 && (
            <button
              onClick={() => {
                Swal.fire({
                  // position: "top-end",
                  icon: "success",
                  title: "Order Confirmed",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }}
              className="mx-auto mb-10 flex bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Confirm Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
