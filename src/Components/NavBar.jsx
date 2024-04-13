import React from 'react'
import {
    HomeIcon,
    CameraIcon,
    UserIcon,
    ChartBarIcon,
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/outline";

export default function NavBar() {
  return (
    <>
        <div className="flex w-full rounded-lg fixed bottom-0 min-h-[5vh] justify-evenly items-center bg-white">
          <HomeIcon className="h-7 w-7 " />
          <ChartBarIcon className="h-7 w-7 text-blue-500" />
          <div className="bg-gradient-to-r -translate-y-8 from-blue-300 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
            <MagnifyingGlassIcon className="h-7 w-7" />
          </div>
          <CameraIcon className="h-7 w-7" />
          <UserIcon className="h-7 w-7" />
        </div>
    </>
  )
}
