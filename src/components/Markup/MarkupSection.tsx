/* eslint-disable @next/next/no-img-element */
import HeroGraphics from '../HeroGraphics';
const MarkupSection = () => {
  return (
    <div className="mt-[100px] ">
      <div className="flex pl-[7.25rem] ">
        <div className="w-6/12">
          <h1 className="title mb-10">markup</h1>
          <p className="subtitle mb-[100px]  text-secondary">
            When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the
            website. The end result is a collection of pre-rendered HTML pages that can be delivered
            lightning-fast over a CDN like Vercel’s Edge Network.{' '}
          </p>
        </div>
        <div className="mt-[-100px] overflow-hidden ">
          <HeroGraphics image1="/images/hero-2-rectangle.png" image2="/images/hero-2-rectangle-2.png" />
        </div>
      </div>
      <div className="w-fill">
        <img className="" src="/images/toppled-blocks.svg" alt="blocks" />
        <img className="m-auto" src="/images/wall-of-blocks.svg" alt="blocks" />
      </div>
    </div>
  );
};

export default MarkupSection;
