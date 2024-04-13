import React from "react";
import { Link } from "react-router-dom";


export default function Goals() {
  return (
    <>
      <div className=" flex-col">
        <div className="m-3 mb-10 mt-10 flex justify-center">
          <h2 className="text-xl font-bold p-1">What are your goals?</h2>
        </div>
        <div className="m-4">
          <ul className="grid w-full gap-6 md:grid-cols-3">
            <li>
              <input
                type="checkbox"
                id="opt1"
                value=""
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="opt1"
                className="inline-flex items-center peer-checked:bg-blue-300 justify-between w-full p-5 text-gray-500 bg-[#f1f1f1] border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-md">Weight Loss</div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="opt2"
                value=""
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="opt2"
                className="inline-flex items-center  peer-checked:bg-blue-300 justify-between w-full p-5 text-gray-500 bg-[#f1f1f1] border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-md">Muscle Gain</div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="opt3"
                value=""
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="opt3"
                className="inline-flex items-center peer-checked:bg-blue-300 justify-between w-full p-5 text-gray-500 bg-[#f1f1f1] border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-md">Flexibility and Mobility</div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="opt4"
                value=""
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="opt4"
                className="inline-flex items-center  peer-checked:bg-blue-300 justify-between w-full p-5 text-gray-500 bg-[#f1f1f1] border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-md">General Fitness</div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="opt5"
                value=""
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="opt5"
                className="inline-flex items-center peer-checked:bg-blue-300 justify-between w-full p-5 text-gray-500 bg-[#f1f1f1] border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-md">
                    Event - Specific Training
                  </div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="opt6"
                value=""
                className="hidden peer"
                required=""
              />
              <label
                htmlFor="opt6"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-[#f1f1f1] border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 peer-checked:bg-blue-300 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-md">
                    Mindfulness and Mental Health
                  </div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div className="flex w-[100vw] justify-center">
          <Link to="/tracker">
            <button className="h-[7vh] bg-gradient-to-r from-blue-300 to-blue-500 rounded-md mt-8 p-2 w-[90vw] text-white font-semibold">
              Confirm
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
