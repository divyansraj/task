import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Eventify</h1>
        <ul className="hidden md:flex flex-row gap-6">
          <Link to="/">
            <li
              onClick={() => setIsClicked(!isClicked)}
              className={`cursor-pointer text-md font-semibold hover:text-slate-400 ${
                isClicked ? "text-slate-400" : ""
              }`}
            >
              Home
            </li>
          </Link>

          <Link to="/events">
            <li
              onClick={() => setIsClicked(!isClicked)}
              className={`cursor-pointer text-md font-semibold hover:text-slate-400 ${
                isClicked ? "text-slate-400" : ""
              }`}
            >
              Events
            </li>
          </Link>

          <Link to="/edit">
            <li
              onClick={() => setIsClicked(!isClicked)}
              className={`cursor-pointer text-md font-semibold hover:text-slate-400 ${
                isClicked ? "text-slate-400" : ""
              }`}
            >
              Create Event
            </li>
          </Link>

          <Link to="/auth">
            <li
              onClick={() => setIsClicked(!isClicked)}
              className={`cursor-pointer text-md font-semibold hover:text-slate-400 ${
                isClicked ? "text-slate-400" : ""
              }`}
            >
              Login
            </li>
          </Link>
        </ul>
        {/* Hamburger Menu */}
        <div
          className="flex flex-col gap-1 md:hidden cursor-pointer"
          onClick={() => setIsClicked(!isClicked)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isClicked && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          <li className="cursor-pointer text-md font-semibold hover:text-slate-400">
            Home
          </li>
          <li className="cursor-pointer text-md font-semibold hover:text-slate-400">
            Events
          </li>
          <li className="cursor-pointer text-md font-semibold hover:text-slate-400">
            Create Event
          </li>
          <li className="cursor-pointer text-md font-semibold hover:text-slate-400">
            Login
          </li>
          <li className="cursor-pointer text-md font-semibold hover:text-slate-400">
            Register
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
