"use client";

import React from "react";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

const Input = ({
  id,
  label,
  disabled,
  register,
  type = "text",
  required,
  errors,
  className = "",
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        type={type}
        {...register(id, { required })}
        className={`peer w-full focus:border-blue-500 p-3 pt-6 font-normal bg-white border-2 rounded-xl outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4
        ${errors[id] ? "border-rose-500" : "border-neutral-500"} 
        ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}`}
      />
      <label
        className={`capitalize absolute font-medium text-sm duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[80%] peer-focus:-translate-y-4 ${
          errors[id] ? "text-rose-500" : "text-slate-700"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
