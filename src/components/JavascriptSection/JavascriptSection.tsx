import DarkSection from '../DarkSection/DarkSection';
import Computer from './Computer';
import './JavascriptSection.css';
const JavascriptSection = () => {
  return (
    <>
      <div className="relative m-auto  ">
        <div className="sectionBackground m-auto mx-[2rem] py-10 lg:mx-[3.25rem]">
          <div className="m-auto mb-20 text-center lg:w-2/4">
            <h2 className="title mb-5 text-white">javascript</h2>
            <p className="subtitle px-20 text-white">
              Statically generated pages are brought to life with client-side JavaScript libraries and
              frameworks, such as Algolia and Next.js.
            </p>
          </div>
        </div>
        <Computer />
      </div>
      <svg>
        <defs>
          <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
            <path d="M0.00071 0.15579C0.00197 0.07826 0.00151 0.04363 0.0123 0.03537C0.02311 0.0271 0.04295 0.0271 0.08591 0.0271H0.91409C0.95705 0.0271 0.97689 0.0271 0.9877 0.03537C0.99849 0.04363 0.99803 0.07826 0.99929 0.15579L1 0.96629C1 1.00457 1 1.03074 0.99257 1.03901C0.98514 1.04728 0.95968 1.04728 0.8426 1.04728H0.1574C0.04032 1.04728 0.01486 1.04728 0.00743 1.03901C0 1.03074 0 1.00457 0 0.96629L0.00071 0.15579Z" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default JavascriptSection;
