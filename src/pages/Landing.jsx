import RecipeList from "@/components/RecipeList";
import SearchForm from "@/components/SearchForm";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

// getting recipe by search
const recipeSearchUrl = "https://www.themealdb.com/api/json/v1/1/search.php";

const searchRecipeQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      searchTerm = searchTerm || "a";
      const response = await axios.get(`${recipeSearchUrl}?s=${searchTerm}`);
      // console.log(response);
      return response.data.meals;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchRecipeQuery(searchTerm));
    // const response = await axios.get(`${recipeSearchUrl}?s=${searchTerm}`);
    // // console.log(response);
    // return { meals: response.data.meals, searchTerm };
    return { searchTerm };
  };

const Landing = () => {
  // const data = useLoaderData();
  // console.log(data);
  // const { searchTerm, meals } = useLoaderData();
  // console.log(meals);
  const { searchTerm } = useLoaderData();
  const { data: meals } = useQuery(searchRecipeQuery(searchTerm));
  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <RecipeList meals={meals} />
    </div>
  );
};

export default Landing;
