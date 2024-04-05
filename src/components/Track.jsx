import React, { useEffect } from "react";

function Track({ image, name, artist, index, trackUrl, artistUrl }) {
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
    <div className="flex flex-grow justify- gap-3 text-white w-full md:w-[300px] pr-4 pl-2 py-2 border-[##ffffff4d] md:border-none bg-opacity-40 md:bg-transparent rounded-lg  md:shadow-none">
      <p className="w-max text-md md:text-4xl md:heading text-white font-bold">
        {index}.
      </p>
      {/*w-[94%] md:w-[200px]  md:w-[170px] */}
      <div className="md:bg-black md:bg-opacity-40 md:p-4 flex md:flex-col gap-2 md:gap-4 w-[300px]">
        <img
          src={image}
          alt="pic"
          className="h-[70px] w-[70px] md:w-full md:h-fit shadow-xl md:rounded-none rounded-lg"
        />
        <div className="text-white flex flex-col gap-1.5">
          <a
            href={trackUrl}
            target="_blank"
            rel="noreferrer"
            className="md:headingmid text-md md:text-xl font-semibold md:font-medium text-wrap hover:underline cursor-pointer"
          >
            {name}
          </a>
          {/* <div className="flex flex-wrap truncate gap-1">
            {artist.map((ar) => {
              return (
                <p className="md:heading md:text-sm w-max text-xs text-wrap hover:underline cursor-pointer">
                  {ar.name}
                </p>
              );
            })}
          </div> */}
          <div className="flex flex-wrap truncate gap-1">
            {artist.map((ar) => {
              return (
                <a
                  href={ar.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="md:heading md:text-sm w-max text-xs text-wrap hover:underline cursor-pointer"
                >
                  {ar.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
