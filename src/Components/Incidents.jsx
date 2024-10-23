import React from "react";
import Card from "./Card";
import StepBar from "./StepBar"
import { useNavigate } from 'react-router-dom';

const ThirdNav1 = () => {
  return (
    <div className="w-[137PX] h-[54PX] ">
      <p className="font-normal text-[12px] leading-[13.3px] text-[#71717A] W-[95px] h-[15px]">
        Home - Incidents
      </p>
      <p className="w-[137px] h-[33px]  font-bold text-[26px] leading-[33.15px] text-[#09090B]">
        Incidents
      </p>
    </div>
  );
};

const ThirdNav2 = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/StepBar'); 
  };
  return (
    <div className="flex">
      <button className="flex  pt-3 pb-3 pl-[10px] pr-[10px] items-center gap-[5px] w-[190px] h-[42px] rounded-md border-[1px] bg-[#FAFAFA]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        Search incident
      </button>
      <button className="w-[148px] h-[42px] rounded-md border-[1px] pt-3 pb-3 pl-[10px] pr-[10px] items-center gap-[5px] bg-[#FAFAFA] text-[12px] leading-[15.3px]">
        Sort By: Date modified
      </button>
      <button onClick={handleClick} className="w-[108px] h-[42px] rounded-md font-bold border-[1px] pt-2 pb-2 pl-[25px] pr-[25px] items-center gap-[5px] bg-[#F26922] text-[12px] text-[#FAFAFA] leading-[15.3px]">
     + New Incident
      </button>
    </div>
  );
};



function Incidents() {
  return (
    <>
    <div className="flex justify-between bg-[#E4E4E780] px-10 items-center">
      <ThirdNav1 />
      <ThirdNav2 />
     
    </div>
    <Card />
    </>

  );
}

export default Incidents;
