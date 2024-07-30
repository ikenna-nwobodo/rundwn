import React, { useEffect, useRef, useState } from "react";
import Artist from "../components/Artist";
import domtoimage from "dom-to-image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Artists({ artists, range }) {
  const scrollRef = useRef(null);

  const [seletedRange, setRange] = useState(range);

  const scrollRight = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };
  const scrollLeft = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".artist",
      { y: -10, opacity: 0 },
      {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: "circ",
        stagger: 0.4,
      }
    );
  });

  var node = document.getElementById("artist-capture");

  const download = () => {
    domtoimage.toBlob(node).then(function (blob) {
      window.saveAs(blob, "rundwn.png");
    });
  };

  useEffect(() => {
    if (range === "short_term") {
      setRange("4 weeks");
    } else if (range === "medium_term") {
      setRange("6 months");
    } else if (range === "long_term") {
      setRange("All time");
    }
  }, [range]);

  // range(seletedRange)

  return (
    <div className="h-max p-4 md:p-10 flex flex-col relative overflow-hidden justify-center gap-6 md:gap-10 ">
      <div className="text-3xl md:text-5xl md:headingmid font-bold text-opacity-90 text-white capitalize">
        top artists
      </div>
      <div
        ref={scrollRef}
        className="w-full block overflow-x-auto no-scrollbar p-3 relative overflow-y-hidden"
      >
        <div className="flex flex-row gap-8 w-full">
          {artists.map((artist) => {
            return (
              <Artist
                key={artist.id}
                image={artist.images[0].url}
                name={artist.name}
                index={artists.lastIndexOf(artist) + 1}
                url={artist.external_urls.spotify}
              />
            );
          })}
        </div>
        <button
          onClick={download}
          className="bg-white flex items-center justify-center gap-1 mt-8 text-primary font-medium tracking-tight text-sm p-1 md:size-14 rounded md:rounded-full fixed top-12 right-8 md:top-24 md:right-44 z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
            />
          </svg>
        </button>
        <div
          onClick={() => scrollLeft(-700)}
          className="bg-white/70 selection:bg-transparent selection:text-black backdrop-blur-lg w-14 h-14 cursor-pointer rounded-full hidden md:flex justify-center items-center fixed top-32 right-24 z-50"
        >
          <span className="material-symbols-rounded text-[2rem] text-black">
            chevron_left
          </span>
        </div>
        <div
          onClick={() => scrollRight(700)}
          className="bg-white/70 selection:bg-transparent selection:text-black backdrop-blur-lg w-14 h-14 cursor-pointer rounded-full hidden md:flex justify-center items-center fixed top-32 right-4 z-50"
        >
          <span className="material-symbols-rounded text-[2rem] text-black">
            chevron_right
          </span>
        </div>
      </div>
      <div className="artist-img-container absolute top-10 opacity-0 -z-10">
        <div id="artist-capture" className="bg-primary w-[500px] pr-28 py-20 pl-10">
          <div className="x-box-cont">
            <p className="headingmid text-3xl font-bold tracking-tight text-white">
              My Top Artists
            </p>
            <div className="mt-10 flex flex-col gap-8">
              {artists.slice(0, 5).map((artist) => {
                return (
                  <div key={artist} className="flex items-center gap-6">
                    <p className="text-2xl heading font-extrabold">
                      {artists.lastIndexOf(artist) + 1}.
                    </p>
                    <div className="size-[80px] overflow-hidden rounded-full bg-neutral-700">
                      <img src={artist.images[0].url} alt="" />
                    </div>
                    <p className="heading tracking- text-xl font-bold">
                      {artist.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;
