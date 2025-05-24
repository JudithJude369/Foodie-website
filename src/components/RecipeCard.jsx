import Wrapper from "@/wrappers/RecipeCard";
import { Link } from "react-router-dom";

const RecipeCard = ({ id, area, name, image }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="details-container">
        <h4>{name}</h4>
        <p>{area}</p>
        <Link to={`/recipe/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};

export default RecipeCard;
