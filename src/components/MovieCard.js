import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const imageUrl = posterPath ? IMG_CDN_URL + posterPath : null;

  return (
    <div className="w-48 pr-4">
      {imageUrl ? (
        <img
          className="h-64 w-full object-cover rounded-lg"
          alt="Movie Card"
          src={imageUrl}
        />
      ) : (
        <div className="h-64 w-full rounded-lg bg-gray-800 flex items-center justify-center text-sm text-gray-400">
          No Poster
        </div>
      )}
    </div>
  );
};

export default MovieCard;
