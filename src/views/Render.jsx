// import React, { useState, useEffect, useCallback } from "react";
import Nav from "../components/Nav";
import { getReturnedParamsFromAuth, getTopArtist, getTopTracks } from "../auth";
import Artists from "./Artists";
import Tracks from "./Tracks";
import ScrollView from "../ScrollView";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useCallback, useEffect, useState } from "react";

function Render() {
  const [topArtists, setTopArtists] = useState([]);
  const [topSongs, setTopSongs] = useState([]);
  const [timeRange, setTimeRange] = useState("short_term");
  const [trackSize, setTrackSize] = useState(10);
  const [loading, setLoading] = useState(true);

  const setData = useCallback(async () => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromAuth(window.location.hash);
      const artistData = await getTopArtist(access_token, timeRange);
      setTopArtists(artistData.items);
      const songData = await getTopTracks(access_token, timeRange, trackSize);
      setTopSongs(songData.items);
      setLoading(false);
    }
  }, [timeRange, trackSize]);

  useEffect(() => {
    setData();
  }, [setData]);

  const handleTimeRangeChange = (range) => setTimeRange(range);

  return (
    <ScrollView>
      <Nav timerange={handleTimeRangeChange} />
      {!loading ? (
        <>
          <Artists artists={topArtists} range={timeRange} />
          <Tracks tracks={topSongs} size={setTrackSize} />
        </>
      ) : (
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
          <ScaleLoader color="#ffffff" />
        </div>
      )}
    </ScrollView>
  );
}

export default Render;
