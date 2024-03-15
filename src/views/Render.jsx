import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { getReturnedParamsFromAuth, getTopArtist, getTopTracks } from "../auth";
import Artists from "./Artists";
import Tracks from "./Tracks";
import ScrollView from "../ScrollView";

function Render() {
  const [topArtists, setTopArtist] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [timeRange, setTimeRange] = useState("short_term");
  const [trackSize, setSize] = useState(10);
  // const selcted_timeRange = useRef();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromAuth(window.location.hash);
      const setData = async () => {
        const selectedRange = timeRange;
        console.log(selectedRange);
        const artisteData = await getTopArtist(access_token, timeRange);
        setTopArtist(artisteData.items);
        const songData = await getTopTracks(access_token, timeRange, trackSize);
        setTopSongs(songData.items);
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
  console.log(timeRange);
  return (
    <ScrollView>
      <Nav timerange={timerange} />
      <Artists artists={topArtists} />
      <Tracks tracks={topSongs} size={songSize} />
    </ScrollView>
  );
}

export default Render;
