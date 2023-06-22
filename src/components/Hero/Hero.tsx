/* eslint-disable @next/next/no-img-element */
import HeroGraphics from './HeroGraphics';
import './Hero.css';
const Hero = () => {
  return (
    <div className="px-[7.25rem]">
      <h1 className="title mb-10">
        jamstack <span className="textWithImage">101</span>
      </h1>
      <div className="flex ">
        <div>
          <p className="subtitle mb-[100px] ml-[3.87rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc
            viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
          </p>
          <img className="m-auto" src="/images/mouse-line.svg" alt="Mouse Line" />
        </div>
        <div className="mt-[-100px] ">
          <HeroGraphics />
        </div>
      </div>
    </div>
  );
};

export default Hero;
