import { Link } from "react-router-dom";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function SignInPage() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div className="flex flex-col justify-between h-screen ">
        <div className="">
          {/* Heading */}
          <div className="text-xl font-semibold m-3 mt-8 mb-4">
            <h2>Create an Account</h2>
          </div>
          {/* Input Fields */}
          <div className="m-3 text-lg">
            <div className="bg-[#f1f1f1] rounded-md mt-4 p-2">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#f1f1f1] rounded-md font-bold w-full h-full text-sm"
                style={{ outline: "none" }}
              />
            </div>
            <div className="bg-[#f1f1f1] rounded-md mt-4 p-2">
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#f1f1f1] rounded-md w-full font-bold text-sm"
                style={{ outline: "none" }}
              />
            </div>
            <div className="bg-[#f1f1f1] rounded-md mt-4 p-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#f1f1f1] rounded-md w-full font-bold text-sm"
                style={{ outline: "none" }}
              />
            </div>
            <div className="mt-4 bg-[#f1f1f1] p-2 rounded-md flex justify-between">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                className="bg-[#f1f1f1] rounded-md w-full font-bold text-sm"
                style={{ outline: "none" }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="ml-4"
              >
                {passwordShown ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="flex justify-center items-center mt-5">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="h-4 w-4 text-blue-600 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-xs text-gray-700">
                By proceeding, I agree to all T&C and Privacy Policy
              </label>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex justify-center items-center">
            <Link to="/goals">
              <button className="bg-gradient-to-r from-blue-300 to-blue-500 rounded-md mt-4 p-2 min-w-[90vw]">
                Create an account
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center mt-2">
            <div className="border-[#cecdcd] border-t-2 mr-2 w-[40vw]" />
            <p className="text-xs">Or</p>
            <div className="border-[#cecdcd] border-t-2 ml-2 w-[40vw]" />
          </div>
          <div className="text-sm flex justify-center mt-1">
            <span className="mr-2">Already have an account!</span> {"   "}
            <div className="flex ">
              <Link to="/signin">
                <p className="text-blue-600"> Log in</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
