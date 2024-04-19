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
  const [active, setActive] = useState(1);
  const [dataTabs, setDataTabs] = useState([
    {
      id: 1,
      tabTitle: "Top 10",
    },
    {
      id: 2,
      tabTitle: "Top 20",
    },
  ]);

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
  }, []);

  const updateLimit = (id) => {
    if (id === 1) {
      setLimit(10);
    } else if (id === 2) {
      setLimit(20);
    }
  };
  // console.log(limit);
  // console.log(tracks);
  size(limit);

  const TabLink = ({ id, tabTitle, isActive, onClick }) => {
    return (
      <div
        onClick={() => navigate(id)}
        className={`text-xs bg-transparent cursor-pointer hover:bg-white/60 hover:text-black border border-white rounded-xl px-3.5 text-white font-medium py-1 ${
          isActive ? "active" : ""
        }`}
      >
        {tabTitle}
      </div>
    );
  };

  const navigate = (id) => {
    setActive(id);
    updateLimit(id);
  };

  return (
    <div className="p-4 md:p-10 flex flex-col justify-center gap-6 md:gap-10">
      <div className="flex items-center md:justify-normal justify-between gap-4">
        <div className="text-3xl md:text-5xl md:headingmid font-bold text-opacity-90 text-white capitalize">
          top songs
        </div>
        <div className="flex items-center gap-2">
          {dataTabs.map((item) => (
            <TabLink
              {...item}
              isActive={active === item.id}
              onClick={navigate}
            />
          ))}
        </div>
      </div>
      {/* <h2 className="text-white text-3xl">Width: {windowSize}</h2> */}
      {/* grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  bg-[#ffffff33]*/}
      <div className="flex flex-wrap justify-center md:gap-2 gap-4 md:bg-transparent py-4 px-2 md:p-0 rounded-lg bg-opacity-40 border border-[##ffffff4d] md:border-none backdrop-blur-[6.6px]">
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
