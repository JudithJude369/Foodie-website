import Wrapper from "@/wrappers/Recipe";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, Navigate, useLoaderData } from "react-router-dom";

const singleRecipeUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?";

const singleRecipeQuery = (id) => {
  return {
    queryKey: ["recipe", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleRecipeUrl}i=${id}`);
      return data;
    },
  };
};

// getting data by id by using param
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleRecipeQuery(id));
    return { id };

    // const { data } = await axios.get(`${singleRecipeUrl}i=${id}`);
    // console.log(data);

    // return { id, data };
  };

const Recipe = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleRecipeQuery(id));
  if (!data) return <Navigate to="/" />;
  const singleRecipe = data.meals[0];
  const {
    strInstructions: instructions,
    strMeal: name,
    strMealThumb: image,
    strYoutube: youtubeVideo,
  } = singleRecipe;

  // convert the ingredients to and array and pull out the ingredients without null

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = singleRecipe[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient}`.trim());
    }
  }
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="flex">
        <img src={image} alt={name} className="img" />
        <div>
          <div className="ing-text">
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>
          <div className="instruction-text">
            <h5>
              how to prepare <span>{name}</span>{" "}
            </h5>
            <p>{instructions}</p>
          </div>
          <div>
            <a href={youtubeVideo} className="btn">
              click to watch instead
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Recipe;
