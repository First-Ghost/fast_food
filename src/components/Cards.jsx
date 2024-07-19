import React from "react";

export const Cards = () => {
  return (
    <div className="max-w-[1640px] mx-auto py-12 grid md:grid-cols-3 gap-6 p-4">
      {/*card */}
      <div className=" rounded-xl relative ">
        {/*Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            Sun's Out, BOGO's Out
          </p>
          <p className="px-2"> Throught 8/26</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl  "
          src="https://images.pexels.com/photos/3023476/pexels-photo-3023476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="card-1"
        />
      </div>

      {/*card */}
      <div className=" rounded-xl relative ">
        {/*Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            <span className="text-orange-500">New!</span> Shish Kebab
          </p>
          <p className="px-2"> Added Daily</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl  "
          src="https://images.pexels.com/photos/8963961/pexels-photo-8963961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="card-2"
        />
      </div>
      {/*card */}
      <div className=" rounded-xl relative ">
        {/*Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className=" font-bold text-2xl px-2 pt-4 ">
            We Deliver Desserts Too
          </p>
          <p className="px-2"> Tasty Treats</p>
          <button className=" border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px]  md:max-h-[200px] w-full object-cover rounded-xl  "
          src="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="card-"
        />
      </div>
    </div>
  );
};
