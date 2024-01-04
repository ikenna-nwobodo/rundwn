const SpotifyAuth = () => {
  var client_id = process.env.REACT_APP_CLIENT_ID;
  var redirect_uri =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_REDIRECT_LOCAL
      : process.env.REACT_APP_LIVE_CALLBACK;
  var scope = process.env.REACT_APP_SCOPE;
  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  // console.log(url);
  // window.location.replace("/home");
  return url;
};

export const getReturnedParamsFromAuth = (hash) => {
  const stringAfterHash = hash.substring(1);
  const paramsUrl = stringAfterHash.split("&");
  const paramsSplitUp = paramsUrl.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    return accumulator;
  }, {});
  return paramsSplitUp;
};

export const getUser = async (token) => {
  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data;
};

export const getTopArtist = async (token) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  return data;
};

export const getTopTracks = async (token) => {
  const res = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const data = await res.json();
  return data;
};

export default SpotifyAuth;
