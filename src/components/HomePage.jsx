import React from "react";
import Card from "./Card";

const HomePage = () => {
  const events = [
    {
      id: 1,
      title: "Tech Conference 2023",
      location: "San Francisco, CA",
      date: "2023-09-15",
    },
    {
      id: 2,
      title: "Music Festival",
      location: "Austin, TX",
      date: "2023-10-01",
    },
    {
      id: 3,
      title: "Food & Wine Expo",
      location: "New York, NY",
      date: "2023-11-05",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4 text-white">
      <h1 className="text-4xl font-bold text-center mb-6">
        Discover Amazing Events
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {events.map((event) => (
          <Card
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
