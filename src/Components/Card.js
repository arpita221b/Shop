import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
// import Data from "./Home";

const Card = ({ product }) => {
  return (
    <div className="cursor-pointer text-slate-100 rounded-lg font-montserrat w-80 m-10 px-4 py-8 bg-blue-900 ">
      <Link to={`/productdetails/${product.id}`}>
        <div className="shadow-2xl bg-slate-50 w-64 rounded-lg h-40 m-auto">
          <img
            className=" object-contain w-80 h-40 m-auto py-4 px-1"
            src={product.image}
            alt=""
          ></img>
        </div>
      </Link>

      <h3 className="text-ellipsis truncate overflow-hidden w-72 px-8 py-4 text-lg leading-loose">
        {product.title}
      </h3>
      <div className="px-8 pt-4 pb-6 "> $ {product.price}</div>
      <div className="text-center">
        <Button cname=" w-64">Add to Cart</Button>
      </div>
    </div>
  );
};

export default Card;
