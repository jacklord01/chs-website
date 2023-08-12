import React from "react";

interface UpgradProgramProps {}

const UpgradProgram: React.FC<UpgradProgramProps> = () => {
  return (
    <div className="app-upgrade-experience pt-[90px] lg:pb-[50px] pb-[50px] overflow-hidden bg-[#f3f3f3]">
      <div className="container mx-auto px-[16px]">
        <div className="text-center">
          <h1 className="mb-[16px] text-[#204971] leading-[48px]">
            We&lsquo;ve Upgraded Over 5,500 Homes <br />
            <span className="font-normal">to date under many SEAI Programmes.</span>
          </h1>
          <p className="mb-[20px] text-[#0D0D0D]">Over the years we have gained a huge amount of experience in the area of retrofitting over 3,926 homes all over the country and learned lots of lessons along the way. We have learned that its not just the experience you gain when you get things right that matters but also the experience of getting things wrong along the way that matters most, knowing not only what you know, but also knowing what you don&lsquo;t is what matters most.</p>
          <p className="text-[#0D0D0D]">Upgrading  you home&lsquo;s energy efficiency is a complex, expensive and sometimes taunting process, one you will most likely complete only once in your lifetime so its important you chose a contractor who has the experience to know not only how your project should be managed but also has the experience of understanding why to ensure your project is delivered right first time.</p>
          <h1 className="mt-[95px] text-[#204971]">Recent Projects</h1>
        </div>
      </div>
    </div>
  );
};

export default UpgradProgram;
