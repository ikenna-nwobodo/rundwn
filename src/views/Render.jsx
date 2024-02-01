import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { getReturnedParamsFromAuth, getTopArtist, getTopTracks } from "../auth";
import Artists from "./Artists";
import Tracks from "./Tracks";

function Render() {
  const [topArtists, setTopArtist] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [timeRange, setTimeRange] = useState("short_term");
  // const selcted_timeRange = useRef();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromAuth(window.location.hash);
      const setData = async () => {
        const selectedRange = timeRange;
        console.log(selectedRange);
        const artisteData = await getTopArtist(access_token, timeRange);
        setTopArtist(artisteData.items);
        const songData = await getTopTracks(access_token, timeRange);
        setTopSongs(songData.items);
      };
      setData();
    }
  }, [timeRange]);

  const timerange = (range) => {
    setTimeRange(range);
  };
  console.log(timeRange);
  return (
    <div>
      <Nav timerange={timerange} />
      <Artists artists={topArtists} />
      <Tracks tracks={topSongs} />
    </div>
  );
}

export default Render;
