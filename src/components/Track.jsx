import React, { useEffect } from "react";

function Track({ image, name, artist, index }) {
  useEffect(() => {
    if (index < 10) {
      updatecount();
    }
  });
  const updatecount = () => {
    index = "0" + index;
  };
  // bg-[#04000033]
  return (
    <div className="flex justify-between gap-2 text-white w-full md:w-max pr-4 pl-2 py-2 border-[##ffffff4d] md:border-none bg-opacity-40 md:bg-transparent rounded-lg  md:shadow-none">
      <p className="w-[6%] text-md md:text-4xl md:heading text-white font-bold">
        {index}.
      </p>
      <div className="md:bg-black md:bg-opacity-40 md:p-4 flex md:flex-col gap-2 md:gap-4 w-[94%] md:w-[200px]">
        <img
          src={image}
          alt="pic"
          className="h-[70px] w-[70px] md:w-[170px] md:h-fit shadow-xl md:rounded-none rounded-lg"
        />
        <div className="text-white">
          <p className="md:headingmid text-md md:text-xl font-semibold md:font-medium text-wrap">
            {name}
          </p>
          <p className="md:heading md:text-sm text-xs text-wrap">{artist}</p>
        </div>
      </div>
    </div>
  );
}

export default Track;
