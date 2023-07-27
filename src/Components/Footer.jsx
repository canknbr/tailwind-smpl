import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gray-700 text-gray-300 px-2 py-2">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-gray-600 py-8 px-6">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1 ">Travel</li>
            <li className="py-1 ">Booking</li>
            <li className="py-1 ">Flights</li>
            <li className="py-1 ">Cruises</li>
            <li className="py-1 ">Ground</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1 ">Travel</li>
            <li className="py-1 ">Booking</li>
            <li className="py-1 ">Flights</li>
            <li className="py-1 ">Cruises</li>
            <li className="py-1 ">Ground</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1 ">Travel</li>
            <li className="py-1 ">Booking</li>
            <li className="py-1 ">Flights</li>
            <li className="py-1 ">Cruises</li>
            <li className="py-1 ">Ground</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1 ">Travel</li>
            <li className="py-1 ">Booking</li>
            <li className="py-1 ">Flights</li>
            <li className="py-1 ">Cruises</li>
            <li className="py-1 ">Ground</li>
          </ul>
        </div>
        <div className="col-span-2 py-8 md:pt-2">
          <p className="font-bold uppercase">Lorem ipsum dolor sit.</p>
          <p className="py-4">Lorem ipsum dolor sit amet consectetur.</p>
          <form className="flex flex-col sm:flex-row" action="">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="email"
            />
            <button className="p-2 mb-4 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto border-t-2 border-gray-500 justify-between sm:flex-row items-center text-center text-gray-500 ">
        <p className="py-4">
          {new Date().getFullYear()} All rights reserved. Designed by Can Kanbur{" "}
        </p>
        <div className="flex justify-between sm:w-[300px] text-2xl">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest />
        </div>
      </div>
    </div>
  );
};

export default Footer;
