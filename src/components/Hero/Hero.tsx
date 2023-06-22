/* eslint-disable @next/next/no-img-element */
import HeroGraphics from './HeroGraphics';
import './hero.css';
const Hero = () => {
  return (
    <div className="pl-[7.25rem]">
      <h1 className="title mb-10">
        jamstack <span className="textWithImage">101</span>
      </h1>
      <div className="flex  ">
        <div className="w-6/12">
          <p className="subtitle mb-[100px] ml-[3.87rem] text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc
            viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
          </p>
          <img className="m-auto" src="/images/mouse-line.svg" alt="Mouse Line" />
        </div>
        <div className="mt-[-100px] overflow-hidden ">
          <HeroGraphics />
        </div>
      </div>
    </div>
  );
};

export default Hero;
