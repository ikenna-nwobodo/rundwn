import React from "react";
import SpotifyAuth from "../auth";

function Home() {
  const authURl=SpotifyAuth();
  return (
    <div className="text-white h-screen overflow-hidden flex flex-col justify-center  cursor-default">
      <div className="px-5 md:px-10 flex flex-col gap-3 md:gap-6">
        <div className="flex items-baseline">
          <p
            // href={authURl}
            // onClick={authURl}
            className="headingmid text-7xl md:text-[13rem] md:leading-[10rem]"
          >
            RunDwn
          </p>
          <div className="h-3 md:h-6 w-3 md:w-6 bg-white rounded-xl"></div>
        </div>
        <p className="text-xl font-light">
          A <span className="headingmid text-red-600">RunDwn</span> of your top
          songs and artists in Spotify
        </p>
        <a
          href={authURl}
          className="bg-teal-700 w-2/4 md:w-1/5 cursor-pointer text-center p-4 capitalize rounded-md"
        >
          Let's go
        </a>
      </div>
      <div className="flex justify-center mb-4 w-full absolute bottom-0">
        <p className="text-white text-opacity-60 text-xs">
          This is <span className="font-extrabold">NOTHING</span> like Spotify
          Wrapped. Like at all.
        </p>
      </div>
    </div>
  );
}

export default Home;
