import React from "react";
import ReactInputMask from "react-input-mask";
export default function InputGlobal({
  onChange,
  mask,
  type,
  placeholder,
  value,
  className,
  register,
  ...other
}) {
  return (
    <>
      {
        (type = "tel" ? (
          <ReactInputMask
            className={`bg-emerald-900 w-full shadow border border-orange-200 px-[30px] py-[4px] opacity-40 text-white text-xl font-medium  leading-[58px] ${
              className && className
            }`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            mask={mask}
            {...register}
            {...other}
          />
        ) : (
          <input
            type={type}
            className={`bg-emerald-900 w-full shadow border border-orange-200 px-[30px] py-[4px] opacity-40 text-white text-xl font-medium  leading-[58px] ${
              className && className
            }`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...register}
            {...other}
          />
        ))
      }
    </>
  );
}
