import React from "react";

const Navbar = () => {
  return (
    <div className=" font-montserrat w-3/4 m-auto flex text-xl flex-row justify-between my-10 ">
      <p className=" text-slate-100 font-bold py-8 ">
        Fake<span className="text-violet-500">Shop</span>
      </p>
      <p className=" text-slate-100  font-semibold py-8  ">Products</p>
    </div>
  );
};

export default Navbar;
