import React, { useState } from "react";

const CreateEventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
    capacity: "",
    price: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Created:", formData);
    // Reset form after submission
    setFormData({
      title: "",
      location: "",
      date: "",
      description: "",
      capacity: "",
      price: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Create Event</h1>

        <form onSubmit={handleSubmit}>
          {/* Title Field */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter event title"
              className="w-full p-2 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Location Field */}
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter event location"
              className="w-full p-2 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Date Field */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Event Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Description Field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter event description"
              className="w-full p-2 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Capacity Field */}
          <div className="mb-4">
            <label
              htmlFor="capacity"
              className="block text-sm font-medium mb-1"
            >
              Capacity
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Enter event capacity"
              className="w-full p-2 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Price Field */}
          <div className="mb-6">
            <label htmlFor="price" className="block text-sm font-medium mb-1">
              Price (in USD)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter event price"
              className="w-full p-2 rounded-md bg-gray-700 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEventForm;
