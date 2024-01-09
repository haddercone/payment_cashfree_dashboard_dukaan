import React from 'react'

const PaginationPreviousButton = ({idx, currentPage}) => {
  return (
    <button
              key={idx}
              className={`flex justify-center items-center rounded w-7 h-7 py-[6px] px-2 mx-[6px] leading-5 text-[14px] font-[500] ${
                currentPage === idx + 1
                  ? "text-white bg-[#146EB4]"
                  : "text-black"
              }`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
  )
}

export default PaginationPreviousButton