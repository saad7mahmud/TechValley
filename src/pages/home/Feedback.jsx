import React, { useState } from "react";
import Swal from "sweetalert2";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const form = e.target;
    form.name.value = "";
    form.email.value = "";
    form.feedback.value = "";
    Swal.fire({
      // position: "top-end",
      icon: "success",
      title: "Review Sent",
      showConfirmButton: false,
      timer: 1500,
    });

    console.log("Feedback submitted:", { name, email, feedback });
  };

  return (
    <div>
      <h2 className="text-center mb-10 text-4xl font-medium underline">
        Feedback Form
      </h2>
      <div className="my-10 w-4/5 max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-600">
              Your Feedback:
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
