import Logo from './Logo';
import SphereSection from './SphereSection';

const DarkSection = () => {
  const border = 'border-l-[1px] border-dashed border-[#E8E8E8]  border-opacity-20';
  const borderR = 'border-r-[1px] border-dashed border-[#E8E8E8]  border-opacity-20';

  return (
    <>
      <div className="-mt-[500px] h-[1500px] bg-primary px-[3rem] lg:-mt-[1000px] lg:h-[2000px]  lg:px-[7.25rem] ">
        <div className="grid grid-cols-4">
          <div className={`h-[2000px] ${border} `}>
            <Logo className="m-auto mt-[250px]  lg:mt-[600px]" src="/images/react-logo.svg" />
            <Logo className="m-auto mt-[100px] lg:mt-[300px]" src="/images/svelte-logo.svg" />
          </div>
          <div className={`h-[2000px] ${border} `}>
            <Logo className="mt-[325px] lg:mt-[700px]" src="/images/nextjs-logo.svg" />
            <Logo className="m-auto mt-[150px] lg:mt-[600px]" src="/images/react-logo.svg" />
          </div>
          <div className={`h-[2000px] ${border} `}>
            <Logo className="m-auto mt-[450px] lg:mt-[1000px]" src="/images/vue-logo.svg" />
          </div>
          <div className={`h-[2000px] ${border} ${borderR} `}>
            <Logo className="mt-[200px] lg:ml-20 lg:mt-[300px]" src="/images/nextjs-logo.svg" />
            <Logo className="m-auto mt-[150px] lg:mt-[500px]" src="/images/react-logo.svg" />
            <Logo className="m-auto mt-[150px] lg:mt-[600px]" src="/images/svelte-logo.svg" />
          </div>
        </div>
      </div>
      <img src="images/squiggly-dark.svg" className="w-full" />
      <div className="mt-[-860px] md:mt-[-560px]">
        <SphereSection />
      </div>
    </>
  );
};

export default DarkSection;
