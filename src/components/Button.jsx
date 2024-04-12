/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Button({ set, type, children, btntype }) {
  return (
    <button
      onClick={() => set(true)}
      type={`${btntype} ? "button" : ${btntype}`}
      className={`${
        type === "primary"
          ? "bg-blue-500 hover:bg-blue-400"
          : "hover:bg-red-600"
      } inline-block float-right ml-5 my-2 py-2 text-md px-3 border rounded-md font-medium bg-slate-200 hover:text-white transition-colors duration-300`}
    >
      {children}
    </button>
  );
}
