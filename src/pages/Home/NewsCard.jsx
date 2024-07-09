import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  //   console.log(singleNews);
  const { _id, title, image_url, details } = singleNews;
  return (
    <div className=" bg-base-100 w-full shadow-xl space-y-5 mb-8 p-5">
      <h3 className="text-xl font-semibold">{title}</h3>
      <figure>
        <img src={image_url} alt="" />
      </figure>
      <div className="">
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link to={`/news/${_id}`} className="text-blue-600">
              {" "}
              Read more...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.object.isRequired,
};

export default NewsCard;
