import React from "react";

import { useNavigate } from 'react-router-dom';

const Map1= () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };



  return (
    <div>
      <div className="flex justify-between bg-[#E4E4E780]">
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
        <div className="flex w-[527px] h-[5px] flex-col gap-4 border-[] bg-[#E5E7EB] rounded-[10px]  ">
          <progress value={10} size="sm" />
        </div>
      </div>
      {/* button section */}
      <div className="w-[293px] h-[42px] gap-[14px] flex">
        <button onClick={goBack} className="w-[239px] h-[42px] bg-[#FAFAFA] border-[#D4D4D8] text-[12px] font-bold border-[1px] rounded-md pt-2 pb-2 pr-[25px] pl-[25px] text-[#71717A]">
          Back
        </button>
        <button  className="w-[239px] h-[42px] bg-[#F26922] rounded-md pt-2 pb-2 pr-[25px] pl-[25px] text-[#FAFAFA] text-[12px] font-bold">
          Next step
        </button>
      </div>
    </div>
  </div>
  );
};














const Map2= () => {
  
  return (
    <div className="container w-[752px] h-[589px] items-center mx-auto relative">
      <div className="w-[700px] h-[75px]  ">
        <h1 className="font-bold text-[24px] leading-[30.6px] ">
          Where’s the incident?
        </h1>
        <p className="w-[518px] h-[32px] text-[14px] text-[#71717A] leading-[22px] font-normal pt-2">
          Enter a GPS, address. or pin point on the map. Try to be as accurate
          as possible, or click:Jurisdiction Wide
        </p>
      </div>

      <div className="w-[752px] h-[490px] pt-6 relative">
        <img
          src="img/map3.png"
          alt="Background"
          className="w-[752px] h-[490px] rounded-[10px]"
        />
        <img
          src="img/map1.png"
          alt="Overlay"
          className="w-[44px] h-[44px] absolute top-[186px] left-[424px] "
        />

        <input
          type="text"
          className="absolute  top-10 left-5 w-[224px] h-[42px] pt-3 pb-3 pr-5 pl-5 bg-no-repeat  text-[12px]"
          style={{ backgroundImage: 'url("img/search.png")' }}
          placeholder="Enter incident address or GPS"
        />
        <input
          type="text"
          className="bg- text-white absolute top-24 left-5 text-[12px] w-[224px] h-[42px] bg-no-repeat  pt-3 pb-3 pr-5 pl-5 place-items-center"
          style={{ backgroundImage: 'url("img/search.png")'}}
          placeholder="Pinpoint damage"
        />
      </div>
    </div>
  );
};

function Map() {
  return (
    <div>
      <Map1 />
      <Map2 />
    </div>
  );
}

export default Map;
