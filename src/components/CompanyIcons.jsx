import { svgs } from "../assets/exports";
import { memo } from "react";
const CompanyIcons = () => {
    const {arrow, profile} = svgs;
  return (
    <div className='flex justify-between items-center m-3 h-[42px]'>
        <div className='flex gap-4 justify-center items-center'>
        <img className='w-[39px] h-[39px] rounded-[4px]' src={profile} alt="profile_img" />
           <div>
                <p className='font-[500] text-[15px] leading-[22px]'>Nishyam</p>
                <a className="font-[400] text-[13px] leading-[16px] underline" href="#">Visit store</a>
           </div>
        </div>
        <img src={arrow} alt="" />
      </div>
  )
}

export default memo(CompanyIcons);