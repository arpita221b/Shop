import React, { useContext, useEffect, useRef } from "react";
import { Data } from "../App";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import Dots from "./DesignElements/Dots";
import Eclipse from "./DesignElements/Eclipse";
import Image from "../Components/Image";
import Button from "./Button";

const Home = () => {
  const products = useContext(Data);

  return (
    <>
      <Dots />
      <Eclipse cname="top-40 left-2/4 " />
      <Eclipse cname="top-2 left-3/4 " />
      <Eclipse cname="top-2/3 right-8 " />

      <a style={{ display: "none" }} href="https://storyset.com/marketing">
        Marketing illustrations by Storyset
      </a>
      <div className=" justify-between flex w-3/4 m-auto ">
        <div className=" my-20  w-1/2 t font-montserrat text-slate-100 ">
          <p className="leading-relaxed font-bold text-6xl">
            Welcome to the <span className="text-violet-500">FakeShop!!</span>
          </p>
          <div className="my-10 border-l-4 w-60 border-violet-500 text-slate-100 pl-3">
            <Eclipse cname="top-2/4 left-40 " />
            <p>
              We present you wide variety of products that you won’t find
              anywhere else.
            </p>
          </div>
          <div className="my-20">
            <Button>Explore</Button>
          </div>
        </div>
        <div className="my-10">
          <Image />
        </div>
      </div>
      <div className="flex flex-wrap justify-around  m-auto w-3/4">
        {products.map((product) => (
          <Card key={uuidv4()} product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
