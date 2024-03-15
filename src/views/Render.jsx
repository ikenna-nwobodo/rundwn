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
import CurrentlyPlaying from "./CurrentlyPlaying";
import Recent from "./Recent";

function Render() {
  const [topArtists, setTopArtist] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [currentTrack, setCurrent] = useState([]);
  const [recents, setRecents] = useState([]);
  const [timeRange, setTimeRange] = useState("short_term");
  const [trackSize, setSize] = useState(10);
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
        const current = await getCurrent(access_token);
        setCurrent(current);
        const recent = await getRecents(access_token);
        setRecents(recent.items);
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
  console.log(recents);
  return (
    <ScrollView>
      <Nav timerange={timerange} />
      {currentTrack.is_playing && (
        <CurrentlyPlaying currentTrack={currentTrack} />
      )}
      <Artists artists={topArtists} />
      <Tracks tracks={topSongs} size={songSize} />
    </ScrollView>
  );
}

export default Render;
