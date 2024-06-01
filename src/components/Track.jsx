import React, { useEffect } from "react";

function Track({ image, name, artist, index, trackUrl, explicit }) {
  useEffect(() => {
    if (index < 10) {
      updatecount();
    }
  });
  const updatecount = () => {
    index = "0" + index;
  };
  // bg-[#04000033]
  return (
    // <div className="flex flex-grow justify- gap-3 text-white w-full md:w-[300px] pr-4 pl-2 py-2 border-[##ffffff4d] md:border-none bg-opacity-40 md:bg-transparent rounded-lg  md:shadow-none">
    //   <p className="w-max text-md md:text-4xl md:heading text-white font-bold">
    //     {index}.
    //   </p>
    //   <div className="md:bg-black md:bg-opacity-40 md:p-4 flex md:flex-col gap-2 md:gap-4 w-[300px]">
    //     <img
    //       src={image}
    //       alt="pic"
    //       className="h-[70px] w-[70px] md:w-full md:h-fit shadow-xl md:rounded-none rounded-lg"
    //     />
    //     <div className="text-white flex flex-col gap-1.5">
    //       <a
    //         href={trackUrl}
    //         target="_blank"
    //         rel="noreferrer"
    //         className="md:headingmid line-clamp-2 text-md md:text-xl font-semibold md:font-medium text-wrap hover:underline cursor-pointer"
    //       >
    //         {name}
    //       </a>
    //       <div className="flex flex-wrap truncate gap-1">
    //         {artist.map((ar, index) => {
    //           return (
    //             <a
    //               key={index}
    //               href={ar.external_urls.spotify}
    //               target="_blank"
    //               rel="noreferrer"
    //               className="md:heading md:text-sm w-max text-xs text-wrap hover:underline cursor-pointer"
    //             >
    //               {ar.name}
    //               {index < artist.length - 1 && ", "}
    //             </a>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex gap-4 pt-4 w-full relative">
      <p className="sm:text-lg font-semibold absolute left-0">{index}.</p>
      <div className="flex gap-4 ml-8">
        <a
          href={trackUrl}
          className="sm:min-w-[100px] min-w-[70px] sm:max-w-[100px] max-w-[70px] sm:max-h-[100px] max-h-[70px] sm:min-h-[100px] min-h-[70px]"
        >
          <img
            src={image}
            alt={name}
            className="sm:w-[100px] w-[70px] h-[70px] sm:h-[100px]"
          />
        </a>
        <div>
          <a
            href={trackUrl}
            target="_blank"
            rel="noreferrer"
            className="md:headingmid line-clamp-2 text-md sm:flex sm:items-center md:text-xl font-semibold  hover:underline cursor-pointer"
          >
            {name}
            {explicit && (
              <span class="material-symbols-rounded ml-1 text-sm text-neutral-400">
                explicit
              </span>
            )}
          </a>
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
      </div>
    </div>
  );
}

export default Track;
