import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faCheckCircle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const FeatureCard = ({ title, description, icon }) => (
  <div className="max-w-sm mx-auto m-4 bg-white shadow-md rounded-lg overflow-hidden ">
    <div className="text-center py-4">
      <FontAwesomeIcon icon={icon} className="text-4xl text-blue-500" />
    </div>
    <div className="px-6 py-4">
      <h3 className="text-gray-900 font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <div>
      <h2 className="text-center mb-10 text-4xl font-medium underline">
        Our Features
      </h2>
      <div className="text-center m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
        <FeatureCard
          title="Wide Product Range"
          description="Explore a wide range of mobiles, laptops, and other tech gadgets."
          icon={faMobileAlt}
        />
        <FeatureCard
          title="Quality Assurance"
          description="We ensure the highest quality in every product we offer."
          icon={faCheckCircle}
        />
        <FeatureCard
          title="Fast and Secure Delivery"
          description="Enjoy quick and secure delivery services for your purchases."
          icon={faTruck}
        />
      </div>
      <hr
        className="mx-auto m-10"
        width="50%"
        color="blue"
        size="2"
        align="center"
      />
    </div>
  );
};

export default Features;
