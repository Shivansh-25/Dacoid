import React from "react";
import Event from "./Event";

export default function EventsCalendar() {
  const events = [
    { time: "6:00 AM", eventDetails: "Morning Yoga" },
    { time: "7:00 AM", eventDetails: "Breakfast Meeting" },
    { time: "8:00 AM", eventDetails: "Team Standup" },
    { time: "9:00 AM", eventDetails: "Project Discussion" },
    { time: "10:00 AM", eventDetails: "" },
    { time: "11:00 AM", eventDetails: "Client Meeting" },
    { time: "12:00 PM", eventDetails: "Lunch Break" },
    { time: "1:00 PM", eventDetails: "" },
    { time: "2:00 PM", eventDetails: "Design Review" },
    { time: "3:00 PM", eventDetails: "" },
    { time: "4:00 PM", eventDetails: "Code Review" },
    { time: "5:00 PM", eventDetails: "Wrap Up Meeting" },
    { time: "6:00 PM", eventDetails: "" },
    { time: "7:00 PM", eventDetails: "Dinner Break" },
    { time: "8:00 PM", eventDetails: "" },
    { time: "9:00 PM", eventDetails: "Evening Yoga" },
    { time: "10:00 PM", eventDetails: "" }
    // Add more events as needed
  ];
  return (
    <>
      <div>
        <div className="m-3 flex-col">
          {events.map((event, index) => (
            <Event
              key={index}
              time={event.time}
              eventDetails={event.eventDetails}
            />
          ))}
        </div>
      </div>
    </>
  );
}
