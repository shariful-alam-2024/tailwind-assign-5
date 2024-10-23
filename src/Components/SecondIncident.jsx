import React from "react";
import { progress } from "@material-tailwind/react";
import Map from './Map'
import { useNavigate } from 'react-router-dom';
const SecondIncident1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Map'); 
  };


  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return <div>
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
        <div className="flex w-[527px] h-[5px] flex-col gap-4 border-[#E5E7EB] bg-[#E5E7EB] rounded-[10px]  ">
          <progress value={10} size="sm" />
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
  </div>;
};
// 
const SecondIncident2 = () => {
  return (
    <div className="w-[752px] h-[366px] pt-6 mx-auto">
      <div className="w-[700px] h-[54px] ">
        <h1 className="font-bold text-[24px] leading-[30.6px]">
          Let’s give the incident a title?
        </h1>
        <p className="w-[371px] h-[11px] text-[14px] text-[#71717A] leading-[22px] font-normal ">
          Make a title that will easily identify the incidents
        </p>
      </div>
      <input
        type="text"
        className="w-[752px] h-[50px] pt-3 pb-3 pr-[10px] pl-[10px] bg-[#F4F4F5] border-[#E4E4E7] rounded-md border-[1px] "
        placeholder="Add title here"
      />

      <div className="w-[700px] h-[54px]  ">
        <h1 className="font-bold text-[24px] leading-[30.6px] ">
        Describe what happened during the incident?
        </h1>
        <p className="w-[371px] h-[11px] text-[14px] text-[#71717A] leading-[22px] font-normal ">
        Share some information about the incident. The when, where, how. 
        </p>
      </div>
      <input
        type="text"
        className="w-[752px] h-[127px] pt-5 pb-5 pr-[10px] pl-[10px] bg-[#F4F4F5] border-[#E4E4E7] rounded-md border-[1px] "
        placeholder=" Type here"
      />
    </div>
  );
};

function SecondIncident() {
  return (
    <div>
      <SecondIncident1 />
      <SecondIncident2 />
    </div>
  );
}

export default SecondIncident;
