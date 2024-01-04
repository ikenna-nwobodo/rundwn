import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { getReturnedParamsFromAuth, getTopArtist, getTopTracks } from "../auth";
import Artists from "./Artists";
import Tracks from "./Tracks";

function Render() {
  const [topArtists, setTopArtist] = useState([]);
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getReturnedParamsFromAuth(window.location.hash);
      const setData = async () => {
        const artisteData = await getTopArtist(access_token);
        setTopArtist(artisteData.items);
        const songData = await getTopTracks(access_token);
        setTopSongs(songData.items);
      };
      setData();
    }
  }, []);
  return (
    <div>
      <Nav />
      {/* <div>
        <p>Hey {user.display_name}</p>
        <img src={user.images[0].url} alt="img" className="rounded-full" />
      </div> */}
      <Artists artists={topArtists} />
      <Tracks tracks={topSongs} />
    </div>
  );
}

export default Render;
