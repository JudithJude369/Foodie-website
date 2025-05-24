import RecipeCard from "@/components/RecipeCard";
import Wrapper from "@/wrappers/RecipeList";

const RecipeList = ({ meals }) => {
  if (!meals) {
    <h4 style={{ textAlign: "center" }}>No matching meals found...</h4>;
  }
  // iterate over the meals array and formatt the names
  const formattedMeals = meals.map((item) => {
    const { idMeal, strArea, strMeal, strMealThumb } = item;
    return {
      id: idMeal,
      area: strArea,
      name: strMeal,
      image: strMealThumb,
    };
  });
  return (
    <Wrapper>
      {formattedMeals.map((item) => {
        return <RecipeCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default RecipeList;
