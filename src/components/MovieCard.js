import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const imageUrl = posterPath ? IMG_CDN_URL + posterPath : null;

  return (
    <div className="w-28 shrink-0 sm:w-32 md:w-36 lg:w-40 xl:w-44">
      {imageUrl ? (
        <img
          className="h-40 w-full rounded-lg object-cover sm:h-48 md:h-56 lg:h-64"
          alt="Movie Card"
          src={imageUrl}
        />
      ) : (
        <div className="flex h-40 w-full items-center justify-center rounded-lg bg-gray-800 text-center text-xs text-gray-400 sm:h-48 md:h-56 lg:h-64">
          No Poster
        </div>
      )}
    </div>
  );
};

export default MovieCard;
