import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function LandingPage() {
  const [content, setContent] = useState({
    imageSrc: "image 13.svg",
    title: "Track Your Goal",
    description:
      "Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
  });

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const navigate = useNavigate();

  const handleNextPage = () => {
    if (isButtonClicked) {
      navigate("/signup");
    } else {
      setContent({
        imageSrc: "image 16.svg",
        title: "Get Burn",
        description:
          "Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever",
      });
      setIsButtonClicked(true);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between bg-white p-5">
      <div>
        <div className="flex justify-end text-[#9FB2FF] underline">
          <Link to="/signin">Skip</Link>
        </div>
        <div className="flex justify-center mt-[12vh] ">
          <img
            src={content.imageSrc}
            alt="Descriptive text"
            className="w-[70vw] h-[30vh] transition ease-in-out duration-500"
          />
        </div>
        <div className="mt-[10vh]">
          <h2 className="font-sans mb-3 text-xl font-semibold ">
            {content.title}
          </h2>
          <p className="font-sans text-gray transition-opacity duration-1000 ease-in-out">
            {content.description}
          </p>
        </div>
      </div>
      <div className="flex justify-end mb-8">
        <button
          onClick={handleNextPage}
          className={`${
            isButtonClicked ? "complete-border" : "partial-border"
          } relative bg-gradient-to-r from-white to-custom-blue text-white font-semibold rounded-full flex items-center justify-center h-14 w-14`}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
