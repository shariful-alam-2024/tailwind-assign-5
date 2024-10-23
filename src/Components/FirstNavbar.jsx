import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
// import SecondNav from './SecondNav'
// import Card from "./Card";
const FirstNavbar1 = () => {
  const item = [

    {
      label:"Dashboard",
      to:"/",
    },
    {
      label:"Incidents",
      to:"/Incidents",
    },
    {
      label:"Locations",
      to:"/Locations",
    },
    {
      label:"Activities",
      to:"/Activities",
    },
    {
      label:"Documents",
      to:"/Documents",
    },
    {
      label:"Cypher AI",
      to:"/Cypher AI",
    },
    
  ];

  const [isMenu ,setIsMenu] =useState(true);
  
  return (
   <>
   {isMenu?<RxCross2 onClick={()=>setIsMenu(false)} className="absolute text-white text-2xl z-50 right-[300px] top-3 md:hidden  " />:
   <GiHamburgerMenu onClick={()=>setIsMenu(true)} className="absolute text-white text-2xl z-50 right-[300px] top-3 md:hidden  " />
  }
   

   {/* mobile */}
   {isMenu &&
   
  
     <div className="p-3 fixed  top-0 left-0 right-0 h-screen w-full bg-[#E4E4E780] text-white md:hidden ">
      <ul className=" flex flex-col left-[35%] absolute top-9 gap-3">
        {item.map(({label,to}, index) => (
          <li key={index}><NavLink to ={to}>{label}</NavLink></li>
        ))}
      </ul>
      
    </div>
}

{/* large divise */}

    <div className="p-3 hidden md:flex">

      <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-[#71717A] text-xs md:text-sm lg:text-base">
        {item.map(({label,to}, index) => (
          <li key={index}><NavLink to ={to}>{label}</NavLink></li>
        ))}
      </ul>
      
    </div>
   </>
  );
};

const FirstNavbar2 = () => {
  return (
    <div className="w-[248px] h-[41px]  gap-3 flex ">
    
       <img src="img/img25.png" alt="" className="w-[40px] h-[40px]" />

      <div className="flex gap-3">
        <img
          src="img/img.png"
          alt=""
          className="w-10 h-10 top-[1px] rounded-[49px]"
        />
        <div className="">
          <p className="w-[94px] h-[20px]  text-xs md:text-sm lg:text-[16px] font-[600] text-[#71717A]">
            Usman Zafar
          </p>
          <p className="w-[150px] h-[18px] font-normal lg:text-[14px] leading-[17.85px] text-[#71717A]  text-xs md:text-sm">
            usmanzafar@gmail.com
          </p>
        </div>
      </div>
      
    </div>
  );
};



const FirstNavbar6 = () => {
  return (
    <>
      <hr className="w-full h-full border-[1px] border-[#E4E4E7] " />
      
    </>
  );
};



function FirstNavbar() {
  return (
    <>
      
      <div className="flex justify-between  bg-[#E4E4E780]  px-10">
      <img src="img/logo.png" alt="" className=" md:w-fit md:h-fit w-[120px] h-[30px] lg:w-[131px]  lg:h-[36px]" />
      <FirstNavbar1 />
      
      <FirstNavbar2 />
      
      </div>
      <FirstNavbar6 />
    </>
    
  );
}

export default FirstNavbar;

