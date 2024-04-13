import React from "react";

export default function Event(props) {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mt-3">
          <p className="text-sm">{props.time}</p>
          {props.eventDetails && (
            <div className="rounded-xl text-white bg-gradient-to-r mr-3 p-1 pl-2 pr-2 from-[#D3A4F4] to-[#E9B1E0]">
              <p className="text-sm">{props.eventDetails}</p>
            </div>
          )}
        </div>
        <div className="border-gray-300 border-t-2 mt-2 w-[90vw]" />
      </div>
    </>
  );
}
