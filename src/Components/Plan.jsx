import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
          alt=""
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
          alt=""
        />
      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, omnis?
        </p>
        <p className="pb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab
          est deserunt corrupti explicabo ea tenetur, deleniti natus optio
          animi!
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
