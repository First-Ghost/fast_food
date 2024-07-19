import React from "react";
import { categories } from "../data/data.js";

export const Category = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-4xl text-center ">
        Top Rated Menu Items
      </h1>
      {/*categorys */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg flex justify-between  items-center  hover:scale-105 duration-300"
          >
            <h2 className=" font-bold sm:text-xl px-5 ">{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
