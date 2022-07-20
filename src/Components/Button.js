import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className={`shadow-glow ${props.cname} rounded-full text-slate-100 bg-violet-500 font-semibold py-4 px-14`}
        onClick={props.onClick}
        type={props.type || "button"}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
