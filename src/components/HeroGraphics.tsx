import React from 'react';

const HeroGraphics = ({ image1, image2 }) => {
  return (
    <div className="relative flex h-full w-full">
      <div className="relative top-[100px] mr-[16px]  lg:top-[200px] lg:mr-[46px]">
        <img
          className="animate-squares h-[209px] w-[93px] rounded-[20px] lg:h-[629px] lg:w-[280px] lg:rounded-[68px]"
          src={image1}
          alt="Hero"
        />
        <div className="animate-squares relative left-[30px] mt-[-150px] h-[159px] w-[93px] rounded-[20px] bg-translucidGray backdrop-blur-md lg:left-[150px] lg:mt-[-250px] lg:h-[479px] lg:w-[280px] lg:rounded-[70px]" />
      </div>

      <div>
        <img
          className="animate-squares h-[223px] w-[93px] rounded-[20px] lg:h-[670px] lg:w-[278px] lg:rounded-[68px]"
          src={image2}
          alt="Hero"
        />
        <div className="animate-squares relative left-[30px] mt-[-150px] h-[220px] w-[93px] rounded-[20px] bg-translucidGray backdrop-blur-md lg:left-[150px] lg:mt-[-350px] lg:h-[662px] lg:w-[280px] lg:rounded-[70px]" />
      </div>
    </div>
  );
};

export default HeroGraphics;
