import React from "react";

export default function WorkoutReminder(props) {
  return (
    <>
      <div>
        <div className="flex justify-between m-4 items-center bg-[#ffffff] rounded-md p-2 shadow-lg">
          <div>
            <img src={props.src}></img>
          </div>
          <div>
            <p className="font-semibold"> {props.heading} </p>
            <p> {props.time}</p>
          </div>
          <div className="">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="group peer ring-0 bg-blue-400  rounded-full outline-none duration-300 after:duration-300 w-16 h-8 shadow-md peer-checked:bg-emerald-400  peer-focus:outline-none  after:content-['✖️']  after:rounded-full  after:bg-gray-50 after:outline-none after:h-8 after:w-8 after:top-1 after:left-1 after:-rotate-180 after:flex after:justify-center after:items-center peer-checked:after:translate-x-7 peer-checked:after:content-['✔️'] peer-hover:after:scale-95 peer-checked:after:rotate-0"></div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
