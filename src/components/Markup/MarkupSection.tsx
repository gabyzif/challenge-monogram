/* eslint-disable @next/next/no-img-element */
import HeroGraphics from '../HeroGraphics';
const MarkupSection = () => {
  return (
    <div className="mt-[100px] pl-[7.25rem]">
      <div className="flex  ">
        <div className="w-6/12">
          <h1 className="title mb-10">markup</h1>
          <p className="subtitle mb-[100px]  text-secondary">
            When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the
            website. The end result is a collection of pre-rendered HTML pages that can be delivered
            lightning-fast over a CDN like Vercel’s Edge Network.{' '}
          </p>
        </div>
        <div className="mt-[-100px] overflow-hidden ">
          <HeroGraphics />
        </div>
      </div>
    </div>
  );
};

export default MarkupSection;
