import React from "react";

import { useNavigate } from 'react-router-dom';
import NewCards from "./NewCards";
const StepBar1 = () => {
  return (
    <div className="w-[613px] h-[92px] mx-auto ">
      <h1 className="w-[613px] h-[41px] text-[32px] text-[#09090B] font-bold">
        Let’s get started
      </h1>
      <p className="w-468px h-[37px] text-[16px] text-[#71717A] leading-[26px] font-normal">
        Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
        general sac mascho werhoLorem ipsum dolar sit gene
      </p>
    </div>
  );
};

const Card2 = [
  {
    img: "img/Frame.png",
    title: "What type of incident?",
    dis: "Choose the category that best describes the incident.",
  },
  {
    img: "img/Frame1.png",
    title: "Tell us about the incident?",
    dis: "Let’s connect the dots and see where to start.",
  },
  {
    img: "img/Frame2.png",
    title: "Where did the incident occur?",
    dis: "Lorem ipsum dolar sit general sac mascho werho",
  },
];

const StepBar2 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/NewCards'); 
  };
  return (
    <div className="container pt-3 ">
      <div className="flex flex-wrap justify-center pt-5">
        {Card2.map(({ img, title, dis }, i) => (
          <div className=" p-4" key={i}>
            <div className=" border-[1px] border-[#232366] rounded-lg overflow-hidden w-[235px] h-[269px]  bg-[#F4F4F5] gap-[68px]">
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="w-[54px] h-[54px] object-cover"
                />
              )}
              <div className="p-4 w-[195px] h-[97px] gap-[22px]">
                <h3 className="text-lg font-semibold text-[#09090B]">
                  {title}
                </h3>
                <p className="text-[#71717A]">{dis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-8">
      <button onClick={handleClick} className="bg-[#F26922] w-[139px] h-[42px] text-[#FAFAFA] text-[12px] rounded-md pt-2 pb-2 pr-6 pl-6">Get started</button>
      </div>
    </div>
  );
};

function StepBar() {
  
  return (
    <div className="text-center">
      <StepBar1 />
      <StepBar2 />
    </div>
  );
}

export default StepBar;
