import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  const { name, image } = brand;
//   console.log(brand);
  return (
    <div>
      <Link to={`/all-products/${name}`}>
        <div className="card bg-base-100 shadow-xl  hover:border cursor-pointer">
          <figure className=" pt-10">
            <img src={image} alt="Shoes" className="rounded-xl w-2/3" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>

            <div className="card-actions"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandsCard;
