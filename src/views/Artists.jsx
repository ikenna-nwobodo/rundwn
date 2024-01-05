import React from "react";
import Artist from "../components/Artist";

function Artists({ artists }) {
  return (
    <div className="h-max p-4 md:p-10 flex flex-col justify-center gap-6 md:gap-10 ">
      <div className="text-3xl md:text-5xl tracking-wide headingmid font-medium text-opacity-90 text-white capitalize">
        top artists
      </div>
      <div className="w-full overflow-x-auto no-scrollbar overflow-y-hidden">
        <div className="flex flex-row gap-8 w-full">
          {artists.map((artist) => {
            return (
              <Artist
                key={artist.id}
                image={artist.images[1].url}
                name={artist.name}
                index={artists.lastIndexOf(artist) + 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Artists;
