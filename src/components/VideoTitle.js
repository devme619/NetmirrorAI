const VideoTitle = ({ title, overview }) => {
  const safeTitle = title || "Featured Movie";
  const safeOverview = overview || "Discover an exciting movie experience.";

  return (
    <div className="relative z-10 -mt-[30%] md:-mt-0 flex min-h-[60vh] flex-col justify-center bg-gradient-to-r from-black px-4 py-24 text-white sm:px-6 md:min-h-[70vh] md:px-10 lg:min-h-[80vh] lg:px-24">
      <h1 className="max-w-2xl text-2xl font-bold sm:text-3xl md:text-5xl lg:text-6xl">
        {safeTitle}
      </h1>
      <p className="mt-4 hidden max-w-md text-sm leading-6 text-gray-200 md:block md:text-base lg:text-lg">
        {safeOverview}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-opacity-80 sm:px-5 sm:py-2.5 sm:text-base">
          ▶️ Play
        </button>
        <button className="hidden rounded-md bg-gray-500/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-400/60 sm:inline-block sm:px-5 sm:py-2.5 sm:text-base">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
