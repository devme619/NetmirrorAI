const ShimmerUI = ({ count = 6, className = "" }) => {
  return (
    <div className={`flex gap-4 overflow-hidden ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="w-32 h-48 md:w-40 md:h-60 rounded-lg bg-gray-800 animate-pulse"
        />
      ))}
    </div>
  );
};

export default ShimmerUI;
