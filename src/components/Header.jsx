import React from "react";
import { svgs } from "../assets/exports";

const Header = () => {
  const { questionmark, search, ask, arrowdown } = svgs;
  return (
    <header className="flex bg-white z-10 sticky top-0 justify-between gap-2 grow-1 items-center min-h-16 py-3 px-8 border-b-[1px] w-full flex-wrap">
      <div className="h-[22px] ">
        <p className="flex">
          <span className="font-[400] text-[15px] leading-[22px] text-[#1A181E]">
            Payments &nbsp;&nbsp;&nbsp;{" "}
          </span>{" "}
          <span className="flex justify-center items-center gap-2 leading-4 font-[400] text-[#4D4D4D]">
            {" "}
            <img
              className="h-[12.6px] w-[12.6px]  "
              src={questionmark}
              alt="help"
            />
            <span className="text-[12px]">How it works</span>
          </span>
        </p>
      </div>
      <div className="lg:w-1/3 flex gap-2 justify-start items-center py-[9px] px-4  rounded-md bg-[#F2F2F2]">
        <img src={search} alt="search" className="w-4 h-4" />
        <input
          type="text"
          className="bg-[#F2F2F2] outline-none w-full placeholder:text-[#808080]"
          placeholder="Search features, tutorials, etc."
        />
      </div>
      <div className=" flex justify-end gap-3">
        <span className=" flex justify-center items-center w-10 h-10 bg-[#E6E6E6] rounded-full cursor-pointer">
          <img src={ask} alt="ask" className="w-[20px] h-[20px] " />
        </span>
        <span className=" flex justify-center items-center w-10 h-10 bg-[#E6E6E6] rounded-full cursor-pointer">
          <img src={arrowdown} alt="down_arrow w-[20px] h-[12.73px] " />
        </span>
      </div>
    </header>
  );
};

export default Header;
