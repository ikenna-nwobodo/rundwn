import React from "react";

function Recent({ recents }) {
  return (
    <div className="h-max p-4 md:p-10 flex flex-col justify-center text-white gap-6 md:gap-10 ">
      <div className="text-3xl md:text-5xl md:headingmid font-bold text-opacity-90 text-white capitalize">
        recently played
      </div>
      <div className="flex flex-wrap w-full gap-10 justify-center items-center">
        {recents.map((recent) => {
          return (
            <div className="flex flex-col gap-3 justify-center items-center">
              <img
                src={recent.track.album.images[1].url}
                alt=""
                width={200}
                className=""
              />
              <div className="grid place-items-center">
                <p className="text-lg">{recent.track.name}</p>
                <p className="text-sm">{recent.track.artists[0].name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recent;
