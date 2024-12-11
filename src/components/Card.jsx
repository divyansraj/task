import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, location, date }) => {
  return (
    <div className="p-4 border border-gray-700 rounded-lg bg-gray-800 shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
      <h1 className="text-lg font-semibold text-white mb-2">{title}</h1>
      <p className="text-gray-400 text-sm mb-1">{location}</p>
      <p className="text-gray-500 text-sm">{date}</p>
      <Link
        to={`/event/${id}`}
        className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default Card;
