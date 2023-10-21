import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const loadData = useLoaderData();

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
  } = loadData;

  console.log(loadData);

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const adImage1 = form.adImage1.value;
    const adImage2 = form.adImage2.value;
    const adImage3 = form.adImage3.value;

    const updatedProduct = {
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
    console.log("Product data updated:", updatedProduct);

    fetch(`http://localhost:5000/product-details/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Added",
            text: "Product Successfully Added!",
          });
        }
      });
  };

  return (
    <div>
    <p className="text-center font-bold text-4xl mt-10">Update Product</p>
      <div
        className="max-w-md m-10 w-4/5
    mx-auto p-4 border shadow-md rounded-lg"
      >
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-600">
              Image:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={loadData.image}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="URL of the product image"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={loadData.name}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Product name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-gray-600">
              Brand:
            </label>
            <select
              id="brand"
              name="brand"
              defaultValue={loadData.brand}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="Apple">Apple</option>
              <option value="Google">Google</option>
              <option value="Intel">Intel</option>
              <option value="Canon">Canon</option>
              <option value="Samsung">Samsung</option>
              <option value="JBL">JBL</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-600">
              Type:
            </label>
            <select
              id="type"
              name="type"
              defaultValue={loadData.type}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="Phone">Phone</option>
              <option value="Computer">Computer</option>
              <option value="Laptop">Laptop</option>
              <option value="Headphone">Headphone</option>
              <option value="Camera">Camera</option>
              <option value="Speaker">Speaker</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-600">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              defaultValue={loadData.price}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Product price"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">
              Short Description:
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={loadData.description}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="A brief description of the product"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-600">
              Rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              defaultValue={loadData.rating}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Product rating"
              min="1"
              max="5"
              step="0.1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="adImage1" className="block text-gray-600">
              Advertisement Image 1:
            </label>
            <input
              type="text"
              id="adImage1"
              name="adImage1"
              required
              defaultValue={loadData.adImage1}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="URL of advertisement image 1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="adImage2" className="block text-gray-600">
              Advertisement Image 2:
            </label>
            <input
              type="text"
              id="adImage2"
              required
              name="adImage2"
              defaultValue={loadData.adImage2}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="URL of advertisement image 2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="adImage3" className="block text-gray-600">
              Advertisement Image 3:
            </label>
            <input
              type="text"
              required
              id="adImage3"
              name="adImage3"
              defaultValue={loadData.adImage3}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="URL of advertisement image 3"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
