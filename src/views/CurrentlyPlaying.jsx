import React from "react";

function CurrentlyPlaying({ currentTrack }) {
  return (
    <div className="h-max p-4 md:p-10 flex items-center justify-center gap-6 md:gap-10">
      <div className="text-3xl  md:headingmid font-semibold text-opacity-90 text-white capitalize">
        Currently playing :
      </div>
      <div className="flex bg-black/40 shadow-xl md:w-[25%] p-4 rounded-lg text-white items-center gap-4">
        <img
          alt="img"
          src={currentTrack.item.album.images[1].url}
          width={70}
          className="rounded-lg shadow-xl"
        />
        <div>
          <p className="text-xl font-medium">{currentTrack.item.name}</p>
          <p>{currentTrack.item.artists[0].name}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentlyPlaying;
