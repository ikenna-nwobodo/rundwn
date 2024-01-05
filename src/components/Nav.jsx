import React from "react";

function Nav() {
  return (
    <div className="sticky top-0 z-40 flex gap-1 items-baseline backdrop-blur-xl px-6 md:px-10 py-4">
      <p className="headingmid text-3xl md:leading-4 text-white">RunDwn</p>
      <div className="h-2 w-2 bg-white rounded-xl"></div>
    </div>
  );
}

export default Nav;
