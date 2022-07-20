import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Data } from "../App";
import Button from "./Button";
const ProductDetails = () => {
  const params = useParams();

  const products = useContext(Data);

  const product = products.filter((product) => {
    return product.id === +params.id;
  });

  return (
    <div className="w-3/4 font-montserrat flex m-auto cursor-pointer justify-between bg-blue-900 rounded-3xl p-20">
      <div className="shadow-2xl rounded-3xl border w-1/2 min-w-1/2 bg-slate-200 h-96 m-3">
        <img className="pt-10 h-80 m-auto" src={product[0].image} alt=""></img>
      </div>
      <div className="flex flex-col w-5/12 pt-1 justify-around">
        <h1 className="text-3xl text-slate-100 font-bold border-b-2 py-2 border-violet-500">
          {product[0].title}
        </h1>
        <div className="text-slate-100 text-lg  ">$ {product[0].price}</div>
        <div className="text-slate-100 text-sm leading-relaxed ">
          {product[0].description}
        </div>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
