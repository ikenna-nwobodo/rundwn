import React, { useCallback, useEffect, useState } from "react";
import Track from "../components/Track";
import Pagination from "../components/Pagination";

function Tracks({ tracks, size }) {
  const [currentTracks, setcurrentTracks] = useState(1);
  const [tracksPerPage] = useState(5);
  const indexofLast = currentTracks * tracksPerPage;
  const indexofFirst = indexofLast - tracksPerPage;
  const currentTracklist = tracks.slice(indexofFirst, indexofLast);
  const paginate = (pageNumber) => setcurrentTracks(pageNumber);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [tracklist, setTrackList] = useState(tracks);
  const [limit, setLimit] = useState(10);

  const getSize = useCallback(() => {
    if (windowSize <= 767) {
      setTrackList(currentTracklist);
    } else {
      setTrackList(tracks);
    }
  });
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    getSize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  const updateLimit = (id) => {
    if (id === 1) {
      setLimit(10);
    } else if (id === 2) {
      setLimit(20);
    }
  };
  // console.log(limit);
  
  size(limit);

  return (
    <div className="p-4 md:p-10 flex flex-col justify-center gap-6 md:gap-10">
      <div className="flex items-center md:justify-normal justify-between gap-4">
        <div className="text-3xl md:text-5xl md:headingmid font-bold text-opacity-90 text-white capitalize">
          top songs
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => updateLimit(1)}
            className="text-xs bg-transparent hover:bg-white/60 hover:text-black border border-white rounded-xl px-3.5 text-white font-medium py-1"
          >
            Top 10
          </button>
          <button
            onClick={() => updateLimit(2)}
            className="text-xs bg-transparent hover:bg-white/60 hover:text-black border border-white rounded-xl px-3.5 text-white font-medium py-1"
          >
            Top 20
          </button>
        </div>
      </div>
      {/* <h2 className="text-white text-3xl">Width: {windowSize}</h2> */}
      {/* grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 */}
      <div className="flex flex-wrap justify-center gap-4 bg-[#ffffff33] md:bg-transparent py-4 px-2 md:p-0 rounded-lg bg-opacity-40 border border-[##ffffff4d] md:border-none backdrop-blur-[6.6px]">
        {tracklist.map((songs) => {
          return (
            <Track
              key={songs.id}
              name={songs.name}
              image={songs.album.images[1].url}
              artist={songs.artists}
              index={tracks.lastIndexOf(songs) + 1}
              trackUrl={songs.external_urls.spotify}
            />
          );
        })}
        <Pagination
          tracks={tracksPerPage}
          totalTracks={tracks.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Tracks;
