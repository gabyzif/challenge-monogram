/* eslint-disable @next/next/no-img-element */
import HeroGraphics from '../HeroGraphics';
import TetrisGame from './TetrisGame';
const MarkupSection = () => {
  return (
    <div className="mt-[100px] ">
      <div className="flex  ">
        <div className="w-6/12">
          <h1 className="title mb-10 pl-[2rem] lg:pl-[7.25rem]">markup</h1>
          <p className="subtitle mb-[100px] pl-[2rem] text-secondary lg:pl-[7.25rem]">
            When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the
            website. The end result is a collection of pre-rendered HTML pages that can be delivered
            lightning-fast over a CDN like Vercel’s Edge Network.{' '}
          </p>
          {/* <img className="mb-[200px] pl-[2rem]" src="/images/toppled-blocks.svg" alt="blocks" /> */}
        </div>
        <div className="mt-[-100px] overflow-hidden ">
          <HeroGraphics image1="/images/hero-2-rectangle.png" image2="/images/hero-2-rectangle-2.png" />
        </div>
      </div>
      <div className="w-fill">
        <TetrisGame />
      </div>
    </div>
  );
};

export default MarkupSection;
