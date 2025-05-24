import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  HomeLayout,
  Recipe,
  Newsletter,
  Landing,
  Error,
  SinglePageError,
} from "@/pages/Index";
import { loader as landingLoader } from "@/pages/Landing";
import { loader as singleRecipeLoader } from "@/pages/Recipe";
import { action as newsletterAction } from "@/pages/Newsletter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // 404 error
    errorElement: <Error />,
    children: [
      // landing page is the default child of homelayout
      {
        // error from loader function
        // import useloader where data will be rendered
        index: true,
        errorElement: <SinglePageError />,
        loader: landingLoader(queryClient),
        element: <Landing />,
      },
      {
        path: "recipe/:id",
        loader: singleRecipeLoader(queryClient),
        errorElement: <SinglePageError />,
        element: <Recipe />,
      },
      {
        path: "newsletter",
        action: newsletterAction,
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
