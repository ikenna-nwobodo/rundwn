import React from "react";

function Artist({ image, name, index, url }) {
  return (
    <div className="md:pl-4 flex gap-4 w-max artist">
      <p className="text-2xl heading text-white/80 font-bold">
        {index}.
      </p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="hidden md:grid md:artist artistnm w-[150px] h-max sm:w-[200px] sm:h-max md:size-[250px] cursor-pointer overflow-hidden md:relative place-items-center"
      >
        <img
          src={image}
          alt="pic"
          className="md:content artist-img md:w-full size-[150px] xsm:size-[200px] md:h-full rounded-full md:rounded-none"
        />
        <p className="md:bg-transparent arx !bg-black !bg-opacity-5 flex md:absolute md:bg-opacity-20 justify-center md:justify-end md:items-end h-full w-full md:overlay md:heading text-center md:text-left text-white md:tracking-wide text-lg sm:text-xl xmd:text-3xl p-3 font-semibold">
          {name}
        </p>
      </a>
      <div className="min-h-[150px] h-max min-w-[150px] flex md:hidden flex-col gap-2 items-center justify-center">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer rounded-full overflow-hidden"
        >
          <div
            style={{ "--image-url": `url('${image}')` }}
            className={`h-[150px] bg-[image:var(--image-url)] hover:scale-105 bg-cover bg-center w-[150px] rounded-full bg-transparent`}
          ></div>
        </a>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer text-base hover:underline"
        >
          {name}
        </a>
      </div>
    </div>
  );
}

export default Artist;
