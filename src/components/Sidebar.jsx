import React from "react";
import { svgs } from "../assets/exports.js";
const { wallet } = svgs;
import CompanyIcons from "./CompanyIcons.jsx";
import Pages from "./Pages.jsx";
import { memo } from "react";

const Sidebar = () => {
  return (
    <div className="min-w-56">
      <div className="min-w-56 fixed bottom-0 top-0 left-0  overflow-auto bg-[#1E2640]  text-white flex flex-col justify-between">
      <section>
        <CompanyIcons />
        <Pages />
      </section>
      <section>
        <div className="w-48 bg-[#353c53] py-[6px] m-3 px-[12px]  rounded-[4px] ">
          <div className="w-[149px] h-[42px]  flex items-center justify-between">
            <div className="w-9 h-9 rounded p-[6px] bg-[#FFFFFF1A]">
              <img className="h-6 w-6" src={wallet} alt="wallet_icon" />
            </div>
            <div>
              <p className="font-[400] text-[13px] ">Available credits</p>
              <p className="font-[500] leading-6 text-[16px]">222.10</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default memo(Sidebar);
