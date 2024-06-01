import React, { useState } from "react";

function Pagination({ tracks, totalTracks, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTracks / tracks); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);
  const handleClick = (number) => {
    setActivePage(number);
  };
  return (
    <div className="flex mt-4 mb-10 md:hidden gap-4 text-white">
      {pageNumbers.map((number) => {
        return (
          <p
            key={number}
            className={`ring-1 ring-inset ring-white font-light w-10 h-10 text-center items-center justify-center flex text-xs cursor-pointer rounded-md ${
              activePage === number ? "active" : ""
            }`}
            onClick={() => {
              handleClick(number);
              paginate(number);
            }}
          >
            {number}
          </p>
        );
      })}
    </div>
  );
}

export default Pagination;
