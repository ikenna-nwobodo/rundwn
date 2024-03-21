import React from "react";

function Artist({ image, name, index, url }) {
  return (
    <div className="md:pl-4 flex gap-4 w-max">
      <p className="text-2xl md:text-4xl md:heading text-white font-bold">
        {index}.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="grid md:artist w-[150px] h-max sm:w-[200px] sm:h-max md:w-[295px] cursor-pointer md:h-[295px] overflow-hidden md:relative place-items-center"
      >
        <img
          src={image}
          alt="pic"
          className="md:content artist-img md:w-full w-[150px] h-[150px] sm:w-[200px] md:h-full sm:h-[200px] rounded-full md:rounded-none"
        />
        <p className="md:bg-black md:absolute md:bg-opacity-20 flex justify-center md:justify-end md:items-end h-full w-full md:overlay md:heading text-center md:text-left text-white md:tracking-wide text-lg sm:text-xl md:text-3xl p-3 font-medium">
          {name}
        </p>
      </a>
    </div>
  );
}

export default Artist;
