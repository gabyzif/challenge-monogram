/* eslint-disable @next/next/no-img-element */
const HeroGraphics = () => {
  return (
    <div className="flex">
      <div className="relative top-[200px] mr-[46px] ">
        <img className="h-[629px] w-[280px] rounded-[68px]	" src="/images/hero-rectangle.png" alt="Hero" />
        <div className="relative left-[150px] mt-[-250px] h-[479px] w-[280px] rounded-[70px] bg-translucidGray backdrop-blur-md" />
      </div>

      <div>
        <img className="h-[670px] w-[278px] rounded-[68px]" src="/images/hero-rectangle-2.png" alt="Hero" />
        <div className="relative left-[150px] mt-[-350px] h-[662px] w-[280px] rounded-[70px] bg-translucidGray backdrop-blur-md" />
      </div>
    </div>
  );
};

export default HeroGraphics;
