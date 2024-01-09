import React from "react";
import { svgs } from "../assets/exports";

const PaginationNextButton = ({ totalPages, currentPage, setCurrentPage }) => {
  const { rightArrow } = svgs;
  return (
    <button
      disabled={totalPages === 0 || currentPage === totalPages}
      onClick={() => setCurrentPage(currentPage + 1)}
      className="h-8 min-w-[74px] border-[1px] border-[#D9D9D9] rounded ml-6 py-[6px] pl-[6px] pr-3 flex justify-center items-center gap-2 bg-searchboxgradient"
    >
      <span>Next</span>
      <img src={rightArrow} alt="rightArrow" />
    </button>
  );
};

export default PaginationNextButton;
