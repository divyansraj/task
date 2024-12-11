import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Simulate fetching event data from an API
    const fetchEvent = async () => {
      const events = [
        {
          id: 1,
          title: "Tech Conference 2023",
          location: "San Francisco, CA",
          date: "2023-09-15",
          description: "A conference about the latest in technology.",
          capacity: 300,
          price: 99.99,
        },
        {
          id: 2,
          title: "Music Festival",
          location: "Austin, TX",
          date: "2023-10-01",
          description: "An outdoor festival with live music and food trucks.",
          capacity: 5000,
          price: 49.99,
        },
        {
          id: 3,
          title: "Food & Wine Expo",
          location: "New York, NY",
          date: "2023-11-05",
          description:
            "Explore the finest food and wine from around the world.",
          capacity: 200,
          price: 150.0,
        },
      ];
      const event = events.find((e) => e.id === parseInt(id));
      setEvent(event);
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

      <p className="text-gray-400 text-lg mb-2">Location: {event.location}</p>
      <p className="text-gray-500 text-lg mb-2">Date: {event.date}</p>
      <p className="text-gray-400 text-lg mb-2">
        Description: {event.description}
      </p>
      <p className="text-gray-400 text-lg mb-2">Capacity: {event.capacity}</p>
      <p className="text-gray-400 text-lg mb-2">Price: ${event.price}</p>
      <div className="flex gap-5">
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Book Now
        </button>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
