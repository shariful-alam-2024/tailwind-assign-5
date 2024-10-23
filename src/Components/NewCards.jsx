import React from "react";
import { Progress } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import SecondIncident from './SecondIncident'
const Incidents4 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/SecondIncident'); 
  };


  const goBack = () => {
    navigate(-1); 
  };
  return (
    <div className="flex justify-between bg-[#E4E4E780] px-10">
      <div className="flex gap-3">
        <img src="img/cros.png" alt="" className="w-[41px] h-[41px]" />
        <div className="w-[179px] h-[54px]">
          <p className="w-[179px] h-[15px] text-[12px] font-normal">
            Home - Incidents - New Incident
          </p>
          <h1 className="w-[163px] h-[33px] text-[#030712] text-[26px] font-bold">
            New Incident
          </h1>
        </div>
      </div>
      {/* progress section */}
      <div className="pt-[24.5px]">
        <div className="flex w-[527px] h-[5px] flex-col gap-4 border-[#E5E7EB] bg-[#E5E7EB] rounded-[10px]  ">
          <Progress value={10} size="sm" />
        </div>
      </div>
      {/* button section */}
      <div className="w-[293px] h-[42px] gap-[14px] flex">
        <button onClick={goBack} className="w-[239px] h-[42px] bg-[#FAFAFA] border-[#D4D4D8] text-[12px] font-bold border-[1px] rounded-md pt-2 pb-2 pr-[25px] pl-[25px] text-[#71717A]">
          Back
        </button>
        <button onClick={handleClick} className="w-[239px] h-[42px] bg-[#F26922] rounded-md pt-2 pb-2 pr-[25px] pl-[25px] text-[#FAFAFA] text-[12px] font-bold">
          Next step
        </button>
      </div>
    </div>
  );
};



const Cards = [
  {
    img: "img/img7.png",
    title: "Avalanche",
  },
  {
    img: "img/img8.png",
    title: "Biological",
  },
  {
    img: "img/img9.png",
    title: "Blizzard",
  },
  {
    img: "img/img10.png",
    title: "Cold/Freezing",
  },
  {
    img: "img/img11.png",
    title: "Drought",
  },
  {
    img: "img/img12.png",
    title: "Earthquake",
  },
  {
    img: "img/img13.png",
    title: "Flooding",
  },
  {
    img: "img/img14.png",
    title: "Heat Wave",
  },
  {
    img: "img/img15.png",
    title: "Hail",
  },
  {
    img: "img/img16.png",
    title: "Lightning",
  },
  {
    img: "img/img17.png",
    title: "Man Made",
  },
  {
    img: "img/img18.png",
    title: "Mudslide",
  },
  {
    img: "img/img19.png",
    title: "Severe Storm",
  },
  {
    img: "img/img20.png",
    title: "Strong Wind",
  },
  {
    img: "img/img21.png",
    title: "Tornado",
  },
  {
    img: "img/img22.png",
    title: "Tsunami",
  },
  {
    img: "img/img23.png",
    title: "Volcanic Eruption",
  },
  {
    img: "img/img24.png",
    title: "Wildfire",
  },
];

const Incidents5 = () => {
  return (
    <div className="container pt-7">
      <h1 className="font-bold text-[24px] leading-[36.6px] text-center">Which of these best describes the incident?</h1>
      <div className="flex flex-wrap justify-center pt-5">
        {Cards.map(({ img, title }, i) => (
          <div className=" p-4" key={i}>
            <div className=" border-[1px] border-[#E4E4E7] gap-[10px] rounded-lg overflow-hidden items-center w-[180px] h-[69px] pt-[22px] pb-[22px] pr-[20px] pl-[20px] bg-[#F4F4F5]  flex">
              {img && (
                <img
                  src={img}
                  alt={title}
                  className="w-[25px] h-[25px] object-cover"
                />
              )}
              <div className="  w-[68px] h-[10px] ">
                <h3 className="text-lg text-[14px] font-normal w-[93px] h-[10px] leading-[17.85px] text-[#09090B]">
                  {title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



function NewCards() {
  return (
    <div>
      <Incidents4 />
      <Incidents5 />
    </div>
  )
}

export default NewCards