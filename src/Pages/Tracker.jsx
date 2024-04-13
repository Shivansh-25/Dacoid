import React from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { CChart } from "@coreui/react-chartjs";
import {
  ChevronLeftIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";
// import {ReactComponent as YourSvg} from "../../public/Chart Full"
import WorkoutReminder from "../Components/WorkoutReminder";
import TrainingCard from "../Components/TrainingCard";
import NavBar from "../Components/NavBar";

export default function Tracker() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen bg-[#FCFCFC]">
        <div className="flex-grow">
          {/* Chart and Reminder */}
          <div>
            <div className="text-xl font-semibold flex justify-center items-center m-3 mt-5 mb-8">
              <div>
                <Link to="/goals">
                  <ChevronLeftIcon className="w-5 h-5 fixed top-6 left-6 bg-[#f1f1f1] rounded-xl p-1" />
                </Link>
              </div>
              <div>
                <h2>Workout Schedule</h2>
              </div>
            </div>
            <Link to="/calendar">
              <div className="m-3 flex items-center justify-center">
                <img src="Chart Full.svg" />
              </div>
              {/* <YourSvg/> */}
            </Link>
            <div className="custom-gradient rounded-md m-3 flex items-center p-2">
              <div>
                <ShieldExclamationIcon className="w-8 h-8 text-purple-400 mr-5" />
              </div>
              <div>
                <p>
                  You've burned fewer calories than yesterday. Time to get
                  moving!
                </p>
              </div>
            </div>
          </div>

          {/* Upcoming Workouts Section */}
          <div>
            <div className="m-3">
              <p className="font-semibold text-xl mt-8">Upcoming Workout</p>
            </div>
            <WorkoutReminder
              src="Ellipse 53.svg"
              heading="Full Body Workout"
              time="Today 10:00AM"
            />
            <WorkoutReminder
              src="Ellipse 54.svg"
              heading="Upper Body Workout"
              time="4 Feb 3:30 PM"
            />
          </div>

          {/* What do you want to train? */}
          <div className="m-3">
            <div>
              <p className="font-semibold text-xl mt-8">
                What do you want to train?
              </p>
              <TrainingCard
                heading="Full Body Workout"
                bodyParts={["Arms", "Legs", "Chest"]}
                src="Ellipse 55.svg"
              />
              <TrainingCard
                heading="Upper Body Workout"
                bodyParts={["Biceps", "Triceps", "Chest"]}
                src="Ellipse 55.svg"
              />
              <TrainingCard
                heading="Upper Body Workout"
                bodyParts={["Biceps", "Triceps", "Chest"]}
                src="Ellipse 55.svg"
              />
              <TrainingCard
                heading="Upper Body Workout"
                bodyParts={["Biceps", "Triceps", "Chest"]}
                src="Ellipse 55.svg"
              />
              <TrainingCard
                heading="Upper Body Workout"
                bodyParts={["Biceps", "Triceps", "Chest"]}
                src="Ellipse 55.svg"
              />
            </div>
          </div>
        </div>

        {/* Navbar */}
        <NavBar />
      </div>
    </>
  );
}
