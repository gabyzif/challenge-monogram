import GlowingNumbers from './GlowingNumbers/GlowingNumbers';
import './AuditSection.css';

const AuditSection = () => {
  return (
    <div className="bg-primary">
      <div className="background  mix-blend-revert relative  top-[-30px] mx-3  py-[4rem] pb-40 lg:top-[-70px]  lg:m-auto lg:mx-0 lg:w-2/4 ">
        <h3 className="titleSmall">top audit scores</h3>
        <div className="my-10 flex justify-center gap-6">
          <GlowingNumbers hasGlow={true} />
          <GlowingNumbers hasGlow={true} />
          <GlowingNumbers hasGlow={false} />
          <GlowingNumbers hasGlow={true} />
        </div>
        <div className="m-auto w-3/4">
          <p className="text-[#C7C7C7] mix-blend-color-dodge">
            Search engines, business stakeholders, and end-users gauge a website’s value using metric tools
            like Google Lighthouse, which measures site performance, SEO, and accessibility. Performance is
            one of the most difficult scores to get to 100. This is especially true in a time when users
            demand JavaScript-heavy, highly-interactive web experiences. A Jamstack website, delivering
            SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more
            positive, responsive end-user experience.
          </p>
        </div>
      </div>
      <div className="pb-10 text-center ">
        <p className="text-white">This is a design test by Gaby Zifferman for Monogram.</p>
        <p className="text-xl text-[#FF069C]">❤</p>
      </div>
    </div>
  );
};

export default AuditSection;
