import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] m-auto h-[500px] bg-blue-100 my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aperiam
          vero minima delectus omnis et deserunt repudiandae facere qui
          consequuntur quo. Culpa illo eligendi tempora! Voluptas, molestias
          voluptatem. Recusandae, ipsa.
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Rooms;
