import React from "react";

function CurrentlyPlaying({ currentTrack }) {
  function getYearFromDateString(dateString) {
    return parseInt(dateString.slice(0, 4));
  }
  // function getDuration(time) {
  //   return time.slice(0, 4);
  // }
  // console.log(currentTrack);
  return (
    <div className="h-max py-4 px-4 md:px-10 flex flex-col items-start justify-center gap-4">
      <div className="text-xl font-semibold text-opacity-90 text-white capitalize">
        Currently playing :
      </div>
      <div className="flex x rounded-lg text-white items-center gap-4">
        <img
          alt="img"
          src={currentTrack.item.album.images[1].url}
          width={70}
          className="rounded-lg shadow-xl"
        />
        <div>
          <p className="text-base md:text-xl font-medium">
            {currentTrack.item.name}
          </p>
          <p className="text-sm text-white/80 font-medium">
            {currentTrack.item.artists[0].name}
          </p>
          <p className="text-xs text-white/40 font-medium">
            {getYearFromDateString(currentTrack.item.album.release_date)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrentlyPlaying;
