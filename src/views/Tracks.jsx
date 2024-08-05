import React, { useCallback, useEffect, useState, useMemo } from "react";
import Track from "../components/Track";
import Pagination from "../components/Pagination";

const tracksPerPage = 5;

function Tracks({ tracks, size }) {
  // const [currentTracks, setcurrentTracks] = useState(1);
  // const [tracksPerPage] = useState(5);
  // const indexofLast = currentTracks * tracksPerPage;
  // const indexofFirst = indexofLast - tracksPerPage;
  // const currentTracklist = tracks.slice(indexofFirst, indexofLast);
  // const paginate = (pageNumber) => setcurrentTracks(pageNumber);
  // const [windowSize, setWindowSize] = useState(window.innerWidth);
  // const [tracklist, setTrackList] = useState(tracks);

  // const getSize = useCallback(() => {
  //   if (windowSize <= 767) {
  //     setTrackList(currentTracklist);
  //   } else {
  //     setTrackList(tracks);
  //   }
  // });

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleWindowResize);
  //   getSize();
  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // },[getSize]);
  const [currentTracks, setCurrentTracks] = useState(1);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [tracklist, setTrackList] = useState([]);

  const indexofLast = currentTracks * tracksPerPage;
  const indexofFirst = indexofLast - tracksPerPage;

  const currentTracklist = useMemo(
    () => tracks.slice(indexofFirst, indexofLast),
    [indexofFirst, indexofLast, tracks]
  );

  const getSize = useCallback(() => {
    if (windowSize <= 767) {
      setTrackList(currentTracklist);
    } else {
      setTrackList(tracks);
    }
  }, [windowSize, currentTracklist, tracks]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    getSize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [getSize]);

  const paginate = (pageNumber) => setCurrentTracks(pageNumber);

  return (
    <div className="p-4 md:p-10 flex flex-col justify-center gap-6 md:gap-10">
      <div className="flex items-center md:justify-normal justify-between gap-4">
        <div className="text-3xl md:text-5xl md:headingmid font-bold text-opacity-90 text-white capitalize">
          top songs
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 sm:px-20 xdivide-y xdivide-neutral-300/30 first:!pt-0">
        {tracklist.map((songs) => {
          return (
            <Track
              key={songs.name}
              name={songs.name}
              image={songs.album.images[1].url}
              artist={songs.artists}
              duration={songs.duration_ms}
              album={songs.album}
              explicit={songs.explicit}
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
