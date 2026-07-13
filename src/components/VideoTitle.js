const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 px-4 text-xl rounded-md hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 mx-2 p-2 px-4 text-xl bg-opacity-50 rounded-md">
          ℹ️More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
