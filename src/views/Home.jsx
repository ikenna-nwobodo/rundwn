import React from "react";
import SpotifyAuth from "../auth";

function Home() {
  const authURl = SpotifyAuth();
  return (
    <div className="grid place-items-center">
      <p className="text-[4rem] headingmid tracking-tighter font-bold">RunDwn</p>
      <a
        href={authURl}
        className="btn border grid place-items-center hover:bg-white hover:text-primary border-white w-10/12 p-2 font-semibold capitalize"
      >
        Let's go
      </a>
    </div>
  );
}

export default Home;
