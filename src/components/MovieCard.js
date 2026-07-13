import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48  pr-4">
      <img
        className="h-64"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      ></img>
    </div>
  );
};

export default MovieCard;
