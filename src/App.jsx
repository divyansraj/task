import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Authentication from "./components/Authentication";
import CreateEventForm from "./components/CreateEvent";
import EventDetails from "./components/EventDetails";

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/edit" element={<CreateEventForm />} />
        <Route path="/event/:id" element={<EventDetails />} /> {/* Add this */}
      </Routes>
    </div>
  );
};

export default App;
