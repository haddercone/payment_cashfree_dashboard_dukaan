import React from "react";
import { svgs } from "../assets/exports";

const PaginationPreviousButton = ({ currentPage, setCurrentPage }) => {
  const { leftArrow } = svgs;
  return (
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
      className="h-8 min-w-[100px] border-[1px] border-[#D9D9D9] rounded mr-6 py-[6px] pl-[6px] pr-3 flex justify-center items-center gap-2 bg-searchboxgradient"
    >
      <img src={leftArrow} alt="leftArrow" />
      <span>Previous</span>
    </button>
  );
};

export default PaginationPreviousButton;
