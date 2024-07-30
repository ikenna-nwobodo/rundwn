import React, { useEffect, useState } from "react";

function Nav({ timerange }) {
  const [selected, setSelected] = useState("4 weeks");
  const [range, setRange] = useState("short_term");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();

  var placeholder = "Range";
  useEffect(() => {
    var ranges = [
      {
        id: 1,
        name: "4 weeks",
        value: "short_term",
      },
      {
        id: 2,
        name: "6 months",
        value: "medium_term",
      },
      {
        id: 3,
        name: "All time",
        value: "long_term",
      },
    ];
    setData(ranges);
  }, []);

  timerange(range);
  // console.log(range);

  return (
    <div className="sticky top-0 z-[80] flex justify-between items-center backdrop-blur-xl px-4 md:px-10 py-4">
      <div className="flex gap-1 items-baseline">
        <p className="headingmid text-3xl md:leading-4 text-white">RunDwn</p>
        <div className="h-2 w-2 bg-white rounded-xl"></div>
      </div>
      <div className="relative text-black text-sm min-w-[20%] sm:min-w-[10%] font-medium rounded-sm outline-0  border-[#EAEAEA]">
        <div
          onClick={() => setOpen(!open)}
          className={`bg-white w-full p-2 h-[40px] z-10 relative flex items-center cursor-pointer justify-between no-scrollbar rounded-lg ${
            !selected && "text-[#9CA3AF]"
          }`}
        >
          <p>
            {selected
              ? selected?.length > 25
                ? selected?.substring(0, 25) + "..."
                : selected
              : placeholder}
          </p>
          <span class={`${open && "rotate-180"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          {/* <BiChevronDown size={20} className={`${open && "rotate-180"}`} /> */}
        </div>
        <ul
          className={`bg-white w-full rounded-b-lg absolute top-[35px] no-scrollbar overflow-y-auto ${
            open ? "max-h-32" : "max-h-0"
          } `}
        >
          {data?.map((data) => (
            <li
              key={data?.name}
              className={`p-2 text-sm cursor-pointer hover:bg-[#9CA3AF] hover:text-white
            ${
              data?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-[#9CA3AF] text-white"
            }
            `}
              onClick={() => {
                if (data?.name?.toLowerCase() !== selected.toLowerCase()) {
                  setSelected(data?.name);
                  setRange(data?.value);
                  setOpen(false);
                }
              }}
            >
              {data?.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
