import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Tovarlar from "./pages/tovarlar";
import Tovar from "./pages/tovar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tovarlar />,
  },
  {
    path: "/product/:id",
    element: <Tovar />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
