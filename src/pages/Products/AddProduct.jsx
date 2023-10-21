import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: "",
    name: "",
    brand: "Apple",
    type: "Phone",
    price: 0,
    description: "",
    rating: 1,
    adImage1: "",
    adImage2: "",
    adImage3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product data submitted:", product);

    fetch("https://brand-shop-server-sage.vercel.app/add-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added",
            text: "Product Successfully Added!",
          });
        }
      });

    //   form reset function
    //   setProduct({
    //     image: "",
    //     name: "",
    //     brand: "Apple",
    //     type: "Phone",
    //     price: 0,
    //     description: "",
    //     rating: 1,
    //     adImage1: "",
    //     adImage2: "",
    //     adImage3: "",
    //   });
  };

  return (
    <div
      className="max-w-md w-4/5 m-10 
    mx-auto p-4 border shadow-md rounded-lg"
    >
      <h2 className="text-center font-bold text-4xl m-4">Add New Product</h2>
      <h2 className="text-center mb-4">
        Asterisk (*) marked fields are required
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-600">
            Image*:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="URL of the product image"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name*:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Product name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block text-gray-600">
            Brand*:
          </label>
          <select
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
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
            Type*:
          </label>
          <select
            id="type"
            name="type"
            value={product.type}
            onChange={handleChange}
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
            Price*:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Product price"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600">
            Short Description*:
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            required
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="A brief description of the product"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-600">
            Rating*:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={handleChange}
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
            // required
            value={product.adImage1}
            onChange={handleChange}
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
            // required
            name="adImage2"
            value={product.adImage2}
            onChange={handleChange}
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
            // required
            id="adImage3"
            name="adImage3"
            value={product.adImage3}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="URL of advertisement image 3"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
