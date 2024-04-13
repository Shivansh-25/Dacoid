import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import MonthDaySelector from "../Components/MonthDaySelector";
import EventsCalendar from "../Components/EventsCalendar";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Calendar() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-[#FCFCFC]">
        <div className="flex-grow">
          <div className="text-xl font-semibold flex justify-center items-center m-3 mt-5 mb-8">
            <div>
              <Link to="/tracker">
                <ChevronLeftIcon className="w-5 h-5 fixed top-6 left-6 bg-[#f1f1f1] rounded-xl p-1" />
              </Link>
            </div>
            <div>
              <h2>Workout Schedule</h2>
            </div>
          </div>
          <MonthDaySelector />
          <EventsCalendar />
          <div className="min-h-[7vh]"></div>
        </div>
        <NavBar />
      </div>
    </>
  );
}
