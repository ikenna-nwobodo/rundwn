import React from "react";
import Artist from "../components/Artist";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Artists({ artists }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="h-max p-4 md:p-10 flex flex-col justify-center gap-6 md:gap-10 ">
      <div className="text-3xl md:text-5xl md:headingmid font-bold text-opacity-90 text-white capitalize">
        top artists
      </div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        containerClass="flex hidden md:block w-full"
        swipeable
      >
        {artists.map((artist) => {
          return (
            <Artist
              key={artist.id}
              image={artist.images[0].url}
              name={artist.name}
              index={artists.lastIndexOf(artist) + 1}
            />
          );
        })}
      </Carousel>
      <div className="w-full block md:hidden overflow-x-auto no-scrollbar p-3 relative overflow-y-hidden">
        <div className="flex flex-row gap-8 w-full">
          {artists.map((artist) => {
            return (
              <Artist
                key={artist.id}
                image={artist.images[0].url}
                name={artist.name}
                index={artists.lastIndexOf(artist) + 1}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Artists;
