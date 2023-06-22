import Computer from './Computer';
import './JavascriptSection.css';
const JavascriptSection = () => {
  return (
    <div className="overflow-visible px-[3.25rem] ">
      <div className="sectionBackground py-10">
        <div className="m-auto mb-20 w-2/4">
          <h2 className="title mb-5 text-white">javascript</h2>
          <p className="subtitle px-20 text-white">
            Statically generated pages are brought to life with client-side JavaScript libraries and
            frameworks, such as Algolia and Next.js.
          </p>
        </div>
      </div>
      <Computer />
    </div>
  );
};

export default JavascriptSection;
