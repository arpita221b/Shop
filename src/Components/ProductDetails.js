import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "./Button";
const ProductDetails = () => {
  const params = useParams();

  const [productDetails, setproductDetails] = useState({});

  useEffect(() => {
    getDetails();
    async function getDetails() {
      const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      const details = await res.json();
      setproductDetails(details);
      console.log(details);
    }
  }, []);

  return (
    <div className="w-3/4 font-montserrat flex flex-col md:flex-row i m-auto cursor-pointer md:justify-between bg-blue-900 rounded-3xl p-20">
      <div className="shadow-2xl rounded-3xl border md:w-1/2 min-w-1/2 bg-slate-200 h-96 m-3">
        <img
          className="pt-10 h-80 m-auto"
          src={productDetails.image}
          alt=""
        ></img>
      </div>
      <div className="flex flex-col md:w-5/12 py-5 md:pt-1 justify-around">
        <h1 className="text-3xl text-slate-100 font-bold border-b-2 py-2 border-violet-500">
          {productDetails.title}
        </h1>
        <div className="text-slate-100 text-lg py-3 ">
          $ {productDetails.price}
        </div>
        <div className="text-slate-100 text-sm py-4 leading-relaxed ">
          {productDetails.description}
        </div>
        <Button cname="">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetails;

// import { Data } from "../App";

// const products = useContext(Data);

// const product = products.filter((product) => {
//   return product.id === +params.id;
// });
