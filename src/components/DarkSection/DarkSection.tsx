import Logo from './Logo';
import SphereSection from './SphereSection';

const DarkSection = () => {
  const border = 'border-l-[1px] border-dashed border-[#E8E8E8]  border-opacity-20';
  const borderR = 'border-r-[1px] border-dashed border-[#E8E8E8]  border-opacity-20';

  return (
    <div className="-mt-[1000px] h-[2300px] bg-primary px-[7.25rem] ">
      <div className="grid grid-cols-4">
        <div className={`h-[2000px] ${border} `}>
          <Logo className="m-auto mt-[600px]" src="/images/react-logo.svg" />
          <Logo className="m-auto mt-[300px]" src="/images/svelte-logo.svg" />
        </div>
        <div className={`h-[2000px] ${border} `}>
          <Logo className="mt-[700px]" src="/images/nextjs-logo.svg" />
          <Logo className="m-auto mt-[600px]" src="/images/react-logo.svg" />
        </div>
        <div className={`h-[2000px] ${border} `}>
          <Logo className="m-auto mt-[1000px]" src="/images/vue-logo.svg" />
        </div>
        <div className={`h-[2000px] ${border} ${borderR} `}>
          <Logo className="ml-20 mt-[300px]" src="/images/nextjs-logo.svg" />
          <Logo className="m-auto mt-[500px]" src="/images/react-logo.svg" />
          <Logo className="m-auto mt-[600px]" src="/images/svelte-logo.svg" />
        </div>
      </div>
      <SphereSection />
    </div>
  );
};

export default DarkSection;
