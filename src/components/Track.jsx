import React, { useEffect, useState } from "react";

function Track({
  image,
  name,
  artist,
  index,
  trackUrl,
  explicit,
  album,
  duration,
}) {
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackIndex, settrackIndex] = useState(index);
  useEffect(() => {
    if (index < 10) {
      settrackIndex("0" + index);
    } else {
      settrackIndex(index);
    }
    setTrackDuration(new Date(duration).toISOString().slice(14, 19));
  }, [duration, index]);

  return (
    <div className="flex items-center gap-4 pt-4 w-full relative">
      <p className="hidden sm:block text-lg heading text-white/80 font-semibold">
        {trackIndex}.
      </p>
      <a
        href={trackUrl}
        target="_blank"
        rel="noreferrer"
        className="sm:hover:scale-[1.01] flex items-center w-full"
      >
        <img src={image} alt={name} className="size-[60px]" />
        <div className="text-sm flex grow w-full ml-6 justify-between items-center">
          <div className="grow">
            <a
              href={trackUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:underline"
            >
              {name}
              {explicit && (
                <span class="material-symbols-rounded ml-1 text-sm text-neutral-400">
                  explicit
                </span>
              )}
            </a>
            <div className="mt-1 md:text-sm text-xs items-center gap-2 text-neutral-400 flex">
              <div>
                {artist.map((ar, index) => {
                  return (
                    <a
                      key={index}
                      href={ar.external_urls.spotify}
                      target="_blank"
                      rel="noreferrer"
                      className="md:heading md:text-sm text-neutral-400 hover:text-white w-max text-xs text-wrap cursor-pointer"
                    >
                      {ar.name}
                      {index < artist.length - 1 && ", "}
                    </a>
                  );
                })}
              </div>
              <div className="hidden sm:block size-[5px] bg-neutral-400 rounded-full"></div>
              <a
                href={album.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:block hover:text-white"
              >
                {album.name}
              </a>
            </div>
          </div>
          <p className="heading font-semibold text-neutral-100">
            {trackDuration}
          </p>
        </div>
      </a>
    </div>
  );
}

export default Track;
