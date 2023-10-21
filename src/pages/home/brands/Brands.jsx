import { useEffect, useState } from "react";
import BrandsCard from "./BrandsCard";

const Brands = () => {
  const [brands, setBrands] = useState(null);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  console.log(brands);

  return (
    <div className="my-10 ">
      <h1 className="text-center mb-20 text-4xl font-medium underline">
        Brands
      </h1>

      <div className="grid m-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {brands?.map((brand) => (
          <BrandsCard key={brand.id} brand={brand}></BrandsCard>
        ))}
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

export default Brands;
