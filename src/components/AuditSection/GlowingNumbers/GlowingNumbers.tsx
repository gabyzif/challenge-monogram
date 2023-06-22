import './GlowingNumbers.css';
const GlowingNumbers = (hasGlow) => {
  return (
    <div className={hasGlow ? 'glowing-number' : 'not-glowing'}>
      <p>
        <span className="glowing-txt">100</span>
      </p>
    </div>
  );
};
export default GlowingNumbers;
