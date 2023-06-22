/* eslint-disable @next/next/no-img-element */
import HeroGraphics from '../HeroGraphics';
import './hero.css';
const Hero = () => {
  return (
    <div className="pl-[2rem] lg:pl-[7.25rem]">
      <h1 className="title mb-5 lg:mb-10">
        jamstack <span className="textWithImage">101</span>
      </h1>
      <div className="flex  ">
        <div className="w-6/12">
          <p className="subtitle mb:[40px] ml-[1rem] text-secondary lg:mb-[100px] lg:ml-[3.87rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc
            viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
          </p>
          <img className="m-auto" src="/images/mouse-line.svg" alt="Mouse Line" />
        </div>
        <div className="mt-[-100px] overflow-hidden ">
          <HeroGraphics image1="/images/hero-rectangle.png" image2="/images/hero-rectangle-2.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
