import HeroGraphics from './HeroGraphics';
import './Hero.css';
const Hero = () => {
  return (
    <div className="flex px-[7.25rem]">
      <div>
        <h1 className="title mb-10">
          jamstack <span className="textWithImage">101</span>
        </h1>
        <p className="subtitle ml-[3.87rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc
          viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.
        </p>
      </div>
      <div className="relative ">
        <HeroGraphics />
      </div>
    </div>
  );
};

export default Hero;
