import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import {
  getReturnedParamsFromAuth,
  getTopArtist,
  getTopTracks,
  getCurrent,
  getRecents,
} from "../auth";
import Artists from "./Artists";
import Tracks from "./Tracks";
import ScrollView from "../ScrollView";
import ScaleLoader from "react-spinners/ScaleLoader";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Recent from "./Recent";

function Render() {
  const [topArtists, setTopArtist] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [currentTrack, setCurrent] = useState(null);
  const [recents, setRecents] = useState([]);
  const [timeRange, setTimeRange] = useState("short_term");
  const [trackSize, setSize] = useState(10);
  const [loading, setLoading] = useState(true);

  // const selcted_timeRange = useRef();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromAuth(window.location.hash);
      const setData = async () => {
        // const selectedRange = timeRange;
        // console.log(selectedRange);
        const artisteData = await getTopArtist(access_token, timeRange);
        setTopArtist(artisteData.items);
        const songData = await getTopTracks(access_token, timeRange, trackSize);
        setTopSongs(songData.items);
        // const current = await getCurrent(access_token);
        // setCurrent(current);
        const recent = await getRecents(access_token);
        setRecents(recent.items);
        setLoading(false);
      };
      setData();
    }
  }, [timeRange, trackSize]);
  const timerange = (range) => {
    setTimeRange(range);
  };
  const songSize = (size) => {
    setSize(size);
  };
  return (
    <ScrollView>
      <Nav timerange={timerange} />
      {/* {!loading && currentTrack !== null && (
        <CurrentlyPlaying currentTrack={currentTrack} />
      )} */}
      {!loading ? (
        <>
          <Artists artists={topArtists} />
          <Tracks tracks={topSongs} size={songSize} />
        </>
      ) : (
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
          <ScaleLoader color="#ffffff" />
        </div>
      )}

      {/* {recents?.length > 0 && <Recent recents={recents} />} */}
    </ScrollView>
  );
}

export default Render;
