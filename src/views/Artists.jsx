import React, { useEffect, useRef } from "react";
import Artist from "../components/Artist";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { useAnimate, stagger, motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Artists({ artists }) {
  const scrollRef = useRef(null);

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

  return (
    <div className="h-max p-4 md:p-10 flex flex-col justify-center gap-6 md:gap-10 ">
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
    </div>
  );
}

export default Artists;
