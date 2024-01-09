import React, { useState } from "react";
import { svgs } from "../assets/exports";
import { useFilterData } from "../hooks/useFilterData";
import PaginationNextButton from "./PaginationNextButton";
import PaginationPreviousButton from "./PaginationPreviousButton";

const DashBoardData = () => {
  const {
    arrowBlack,
    search,
    downloadIcon,
    sortIcon,
    arrowdown,
    infoIcon,
    leftArrow,
    rightArrow,
  } = svgs;

  const [id, setId] = useState("");

  const [sortOptions, setSortOptions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  const { filterOrders, orders, setOrders } = useFilterData();
  
  const ordersPerPage = 30;
  const filteredOrders = filterOrders(id);

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const visiblebuttonThreshold = Math.ceil(totalPages / 2); // show only half of the total pagination buttons

  function showFilterOptions() {
    setSortOptions(!sortOptions);
  }

  function sortByDate() {
    setOrders([...filteredOrders].sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate)))
  }

  function sortByOrderId() {
    setOrders([...filteredOrders].sort((a, b) => a.orderID - b.orderID))
    
  }

  function sortByOrderAmount() {
    setOrders([...filteredOrders].sort((a, b) => a.orderAmount - b.orderAmount))
    
  }

  return (
    <section className="bg-[rgb(241,241,241)] p-8">
      <div className="flex justify-between items-center">
        <p className="font-[500] text-[20px] leading-7">Overview</p>

        <button className="bg-white w-[137px] h-9 p-4 flex justify-between items-center rounded border-[#D9D9D9] ">
          <p>Last Month</p>
          <img className="w-3 h-[6.95px]" src={arrowBlack} alt="filter" />
        </button>
      </div>
      <div className="my-5 flex gap-4 ">
        <div className="h-[118px] grow flex flex-col justify-center items-start rounded-lg bg-white p-4 shadow-[0px_2px_6px_0px_#1A181E0A]">
          <p className="font-[400] text-[16px] leading-6 text-[#4D4D4D]">
            Online orders
          </p>
          <p className="font-[500] my-4 text-[32px] leading-[38px]">231</p>
        </div>
        <div className="h-[118px] grow flex flex-col justify-center items-start rounded-lg bg-white p-4 shadow-[0px_2px_6px_0px_#1A181E0A]">
          <p className="font-[400] text-[16px] leading-6 text-[#4D4D4D]">
            Amount receieved
          </p>
          <p className="font-[500] my-4 text-[32px] leading-[38px]">
            ₹23,92,312.19
          </p>
        </div>
      </div>

      <p className="text-[#1A181E] font-[500] text-[20px] leading-7">
        Transactions | This Month
      </p>

      <div className="bg-white rounded-lg  pt-3 pb-6 px-3 mt-5 shadow-[0px_2px_6px_0px_#1A181E0A]">
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex  h-10 min-w-[248px] justify-center items-center py-[10px] px-4 border-[1px] gap-2  border-[#D9D9D9]  rounded-md bg-searchboxgradient">
            <img src={search} alt="search" className="w-4 h-4" />
            <input
              type="text"
              onChange={(e) => setId(e.target.value)}
              className="bg-white  outline-none  placeholder:text-[#808080]"
              placeholder="Search by order ID..."
            />
          </div>
          <div className="relative flex gap-3">
            <button
              onClick={showFilterOptions}
              className="flex justify-center items-center w-[79px] h-[36px] border-[1px] rounded-[4px]  gap-3 py-[6px] px-3"
            >
              <span>Sort</span>
              <img className="w-4 h-4" src={sortIcon} alt="sort" />
            </button>

            {sortOptions && (
              <div className="absolute bg-white top-10 -left-4 z-10 shadow-[0px_2px_6px_0px_#1A181E0A]">
                <button 
                  onClick={() => sortByDate()}
                  className="py-2 px-4 w-full text-left hover:bg-[#F1F1F1]">
                  Order date
                </button>{" "}
                <br />
                <button 
                onClick={() => sortByOrderAmount()}
                className="py-2 px-4 w-full text-left hover:bg-[#F1F1F1]">
                  Order amount
                </button>{" "}
                <br />
                <button 
                onClick={() => sortByOrderId()}
                className="py-2 px-4 w-full text-left hover:bg-[#F1F1F1]">
                  Order Id
                </button>{" "}
                <br />
              </div>
            )}

            <button className="flex justify-center items-center p-3 w-9 h-9  border-[1px] rounded-[4px] border-[#D9D9D9]">
              <img
                className="max-w-none w-[17.5px] h-[17.5px]"
                src={downloadIcon}
                alt="download"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-10 text-[#4D4D4D] min-h-[40px] mt-3 bg-[#F2F2F2] text-[14px] py-[10px] px-3 rounded font-[500] leading-5">
          <div className="grow">
            <p>Order Id</p>
          </div>

          <div className="grow ">
            <button className="flex justify-start items-center gap-2 ">
              <p>Order date</p>
              <img className="w-2 h-2" src={arrowdown} alt="dropdown" />
            </button>
          </div>

          <div className="grow">
            <p className="text-right">Order amount</p>
          </div>

          <div className="grow flex justify-end items-center gap-1 ">
            <p>Transaction fee</p>
            <img
              className="w-[12.6px] h-[12.6px]"
              title="info"
              src={infoIcon}
              alt="info"
            />
          </div>
        </div>
        {filteredOrders.length === 0 ? (
          <p className="my-2 p-2  bg-red-100">No Orders Found for Id : {id}</p>
        ) : (
          filteredOrders
            .slice(
              currentPage * ordersPerPage - ordersPerPage,
              currentPage * ordersPerPage
            )
            .map((order) => {
              const { orderID, orderDate, orderAmount, transactionFees } =
                order;
              return (
                <div
                  key={orderID}
                  className="flex justify-between items-center gap-10 text-[#4D4D4D] min-h-[48px]  text-[14px] py-[14px] px-3 border-b-[1px] border-b-[#E6E6E6] font-[500] leading-5"
                >
                  <div className="grow relative">
                    <a
                      href="#"
                      className="w-full font-[600] text-[14px] text-[#146EB4] leading-5"
                    >
                      #{orderID}{" "}
                    </a>
                  </div>

                  <div className="grow relative">
                    <p className="w-full -translate-x-[2.25rem]">{orderDate}</p>
                  </div>

                  <div className="grow relative">
                    <p className="text-right w-full -translate-x-20">
                      ₹{orderAmount.toLocaleString()}{" "}
                    </p>
                  </div>

                  <div className="grow relative flex justify-end items-center gap-1 ">
                    <p className="w-full text-right">₹{transactionFees}</p>
                  </div>
                </div>
              );
            })
        )}

        <div className="my-6 w-[610px] mx-auto flex justify-center items-center ">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="h-8 min-w-[100px] border-[1px] border-[#D9D9D9] rounded mr-6 py-[6px] pl-[6px] pr-3 flex justify-center items-center gap-2 bg-searchboxgradient"
          >
            <img src={leftArrow} alt="leftArrow" />
            <span>Previous</span>
          </button>

          {Array.from({ length: currentPage }).map((_, idx) => {
            return idx + 1 > totalPages - visiblebuttonThreshold ? null : (
              <PaginationNextButton
                key={idx}
                idx={idx}
                currentPage={currentPage}
              />
            );
          })}

          {totalPages - currentPage <= visiblebuttonThreshold ? null : "..."}

          {Array.from({ length: totalPages }).map((_, idx) => {
            return idx + 1 <= totalPages - visiblebuttonThreshold ? null : (
              <PaginationPreviousButton
                key={idx}
                idx={idx}
                currentPage={currentPage}
              />
            );
          })}

          <button
            disabled={totalPages === 0 || currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="h-8 min-w-[74px] border-[1px] border-[#D9D9D9] rounded ml-6 py-[6px] pl-[6px] pr-3 flex justify-center items-center gap-2 bg-searchboxgradient"
          >
            <span>Next</span>
            <img src={rightArrow} alt="rightArrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashBoardData;
