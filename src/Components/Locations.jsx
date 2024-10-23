import React from "react";

const Locations1 = () => {
  return (
    <div className="w-[583PX] h-[53PX] ">
      <p className="font-normal text-xs md:text-sm lg:text-[12px] leading-[13.3px] text-[#71717A] W-[95px] h-[15px]">
        Incidents - DR-4699 March 2023 Severe Storms
      </p>
      <p className="w-[583px] h-[25px]  font-bold text-xs md:text-sm lg:text-[26px] leading-[33.15px] text-[#09090B]">
        DR-4699 March 2023 Severe Storms
      </p>
    </div>
  );
};

const Locations2 = () => {
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
      <button className="w-[108px] h-[42px] rounded-md font-bold border-[1px] pt-2 pb-2 pl-[25px] pr-[25px] items-center gap-[5px] bg-[#F26922] text-[12px] text-[#FAFAFA] leading-[15.3px]">
        + New Location
      </button>
    </div>
  );
};

const Locations3 = () => {
  return (
    <div className=" mx-5">
      <div className="flex gap-3">
        <img src="img/frm.png" alt="" className="w-[37px] h-[37px]" />
        <div className="">
          <p className="text-[14px] font-normal">Location</p>
          <h1 className="text-[20px] font-bold">Tulare County, Los Angles, CA 23415</h1>
        </div>
      </div>
      <div className="flex gap-3">
        <img src="img/mama.png" alt="" className="w-[37px] h-[37px]" />
        <div className="">
          <p  className="text-[14px] font-normal">Approx. Cost:</p>
          <h1  className="text-[20px] font-bold">$60,607,456.00</h1>
        </div>
      </div>
    </div>
  );
};

const Locations4 = () => {
  return (
    <div className="mx-5">
      <p className="text-[14px] font-bold">Description</p>
      <p className="text-[16px] font-normal text-[#71717A]">
        Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
        general sac mascho werhoLorem ipsum dolar sit general sac mascho
        werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
        general sac mascho werhoLorem ipsum dolar sit general sac mascho werho
      </p>
    </div>
  );
};

const Locations5 = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-[14px] font-bold mx-5">Locations</h1>
      <a href="/index.htm" className="underline">
        See all
      </a>
    </div>
  );
};

const Cards1 = [
  {
    img: "img/bun.png",
    title: "Whitechapel Rd.",
    address: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    img: "img/bun1.png",
    title: "Whitechapel Rd.",
    address: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    img: "img/bun2.png",
    title: "Whitechapel Rd.",
    address: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    img: "img/bun2.png",
    title: "Whitechapel Rd.",
    address: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  
];

const Locations6 = () => {
  return (
    <div className="container pt-3">
      <div className="flex flex-wrap justify-center pt-5">
        {Cards1.map(({ img, title, address, price }, i) => (
          <div className=" p-4" key={i}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="w-[306px] h-[253px] object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className=" text-xs md:text-sm lg:text-lg font-semibold text-[#09090B]">{title}</h3>
              <p className="text-[#71717A] text-xs md:text-sm">{address}</p>
              <p className="text-[#09090B] font-bold text-xs md:text-sm">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



const Locations7 = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-[14px] font-bold mx-5">Locations</h1>
      <a href="/index.htm" className="underline">
        See all
      </a>
    </div>
  );
};

const Cards4 = [
 
  {
    img: "img/bun2.png",
    title: "Whitechapel Rd.",
    address: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    img: "img/bun2.png",
    title: "Whitechapel Rd.",
    address: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
];

const Locations8 = () => {
  return (
    <div className="container pt-3">
      <div className="flex flex-wrap justify-center pt-5">
        {Cards4.map(({ img, title, address, price }, i) => (
          <div className="flex p-4" key={i}>
            <div className=" rounded-lg overflow-hidden w-full">
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="w-[306px] h-[253px] object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#09090B]">{title}</h3>
              <p className="text-[#71717A]">{address}</p>
              <p className="text-[#09090B] font-bold">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Locations9 = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-[14px] font-bold mx-5" >Documents</h1>
      <a href="/index.htm" className="underline">
        See all
      </a>
    </div>
  );
};

const Cards5 = [
 
  {
    img: "img/bun2.png",
    title: "Whitechapel Rd.",
    address: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
  {
    img: "img/bun2.png",
    title: "Whitechapel Rd.",
    address: "Tulare County,  Los Angles, CA 23415",
    price: "$1,456,654.00",
  },
];

const Locations10 = () => {
  return (
    <div className="container pt-3">
      <div className="flex flex-wrap justify-center pt-5">
        {Cards4.map(({ img, title, address, price }, i) => (
          <div className="flex p-4" key={i}>
            <div className=" rounded-lg overflow-hidden w-full">
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="w-[306px] h-[253px] object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#09090B]">{title}</h3>
              <p className="text-[#71717A]">{address}</p>
              <p className="text-[#09090B] font-bold">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




function Locations() {
  return (
    <>
     
        <div className="flex justify-between bg-[#E4E4E780] px-10 items-center">
          <Locations1 />
          <Locations2 />
        </div>
       
       
       <div className="w-[1300px] h-[1582.5px] flex pt-3">
       <div className="w-[680px] h-[1582.5px]">
       <Locations3 />
        <Locations4 /> 
        
     
        
          <Locations5 />
          <Locations6 />
      

     
        <Locations7 />
        <Locations8 />
        <Locations9 />
        <Locations10 />
       </div>
       <img src="img/location-map.png" alt="" className="w-[526px] h-[503px] gap-2" />
       </div>
        
       
      
    </>
  );
}

export default Locations;
