import React from "react";

function Recent({ recents }) {
  function getYearFromDateString(dateString) {
    return parseInt(dateString.slice(0, 4));
  }
  return (
    <div className="h-max p-4 md:p-10 flex flex-col justify-center text-white gap-6 md:gap-10 ">
      <div className="text-3xl md:text-5xl md:headingmid font-bold text-opacity-90 text-white capitalize">
        recently played
      </div>
      <div className="grid md:grid-cols-2 flex-wrap w-full gap-10 justify-center items-center">
        {recents.map((recent) => {
          return (
            <div className="flex w-full gap-3 relative justify-start items-center">
              <img
                src={recent.track.album.images[1].url}
                alt=""
                width={70}
                className="rounded-md"
              />
              <div className="flex-1 flex flex-col h-full justify-between">
                <p className="text-lg">{recent.track.name}</p>
                <p className="text-sm">{recent.track.artists[0].name}</p>
                <p className="text-xs text-white/40 font-medium">
                  {getYearFromDateString(recent.track.album.release_date)}
                </p>
              </div>
              <div className="h-[1px] bg-white w-full -bottom-4 absolute"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recent;
