import React from "react";
import { useState } from "react";

import Chat from "./Chat";
import Card from "./Card";
  const SecondNav1 = () => {
  return (
    <>
    <div className="">
      <p className="font-normal lg:text-[12px] leading-[13.3px] text-[#71717A]  text-xs md:text-sm">
        Welcome back
      </p>
      <p className=" font-bold lg:text-[26px] leading-[33.15px] text-[#09090B]  text-xs md:text-sm">
        Dashboard
      </p>
      
    </div>
   
    </>
   
  );
};

const SecondNav2 = () => {
  return (
    <div className="flex  gap- 0.3rem md:gap-1 lg:gap-2">
      <button className="flex  pt-3 pb-3 pl-[10px]  text-xs md:text-sm lg:text-[14px]  md:w-fit md:h-fit pr-[10px] items-center gap-[2px] px-3 py-1.5 lg:w-[190px] lg:h-[42px] rounded-md border-[1px] bg-[#FAFAFA]">
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
      <button className="lg:w-[148px] lg:h-[42px] rounded-md border-[1px] md:pt-2.5 md:pb-2.5 md:pl-[6px] md:pr-[6px] lg:pt-3 lg:pb-3 lg:pl-[10px] lg:pr-[10px] items-center gap-[5px] bg-[#FAFAFA] md:w-fit md:h-fit px-3 py-1.5  text-xs md:text-sm lg:text-[12px] leading-[15.3px]">Sort By: Date modified</button>
      <button className="lg:w-[108px] lg:h-[42px]   md:w-fit md:h-fit rounded-md font-bold border-[1px] pt-2 pb-2 pl-[25px] pr-[25px] items-center gap-[5px] bg-[#F26922]  text-xs md:text-sm lg:text-[12px] text-[#FAFAFA] leading-[15.3px]">Cypher AI</button>
    </div>
  );
};




const Chat1 = ({onClick}) => {
   


  return (
    
      <>
       <button onClick={onClick} className="relative right-[0px] bottom-0" ><img src="img/chat.png" alt="" className="w-[77px] h-[77px] mx-[90px] " /></button>
      
      </>
    
  );
};


function Dashboard() {
  const [isMenu ,setIsMenu] = useState(false);
  return (
    <>
    <div className="flex justify-between w-full h-fit md-[800px] md:h-[54px] lg:w-[1268px] lg:h-[54px] pt-2 bg-[#E4E4E780] gap-[100px] md:gap-[200px] lg:gap-[600px] mx-auto px-10 items-center pb-2">
      <SecondNav1 />
      <SecondNav2 />
    </div>
    <Card />
    <Chat1 onClick = {()=>setIsMenu(!isMenu)}/>
     
    {
      isMenu && <div className="fixed right-4 bottom-24"><Chat /></div>
    }
    
    </>
  );
}

export default Dashboard;
