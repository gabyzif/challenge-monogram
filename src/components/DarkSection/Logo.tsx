/* eslint-disable @next/next/no-img-element */
const Logo = ({ src, className }) => {
  return (
    <div className={className}>
      <img src={src} alt="logo" className="m-auto" />
    </div>
  );
};

export default Logo;
