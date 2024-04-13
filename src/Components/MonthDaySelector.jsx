import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function MonthDaySelector() {
  const d = new Date();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let day = d.getDay();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      <div>
        <div className="flex justify-center flex-col items-center">
          <div className="flex items-center">
            <ChevronLeftIcon className="w-3 h-3 mr-2" />
            <p className="text-sm font-bold">
              {monthNames[month]} {year}
            </p>
            <ChevronRightIcon className="w-3 h-3 ml-2" />
          </div>
          <div className="flex m-3 justify-evenly">
            <div className="flex flex-col   font-semibold justify-center items-center p-2 rounded-lg m-3 sm:w-12 w-14 h-20">
              <div>{dayNames[day - 2]}</div>
              <div>{date - 2}</div>
            </div>
            <div className="flex flex-col font-semibold justify-center items-center p-2  rounded-lg m-3 sm:w-12 w-14 h-20">
              <div>{dayNames[day - 1]}</div>
              <div>{date - 1}</div>
            </div>
            <div className="flex flex-col text-white font-semibold justify-center items-center p-2 bg-gradient-to-r from-[#8DA4FF] to-[#D1DBFF] rounded-lg m-3 sm:w-12 w-14 h-20">
              <div>{dayNames[day]}</div>
              <div>{date}</div>
            </div>
            <div className="flex flex-col font-semibold justify-center items-center p-2  rounded-lg m-3 sm:w-12 w-14 h-20">
              <div>{dayNames[(day + 1) % 7]}</div>
              <div>{date + 1}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
