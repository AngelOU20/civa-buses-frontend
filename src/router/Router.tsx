import App from "@/App";
import { Buses } from "@/pages/Buses";
import { SingleBus } from "@/pages/SingleBus";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/ErrorPage";
import { CreateBus } from "@/pages/CreateBus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Buses />,
      },
      {
        path: "/bus/:id",
        element: <SingleBus />,
      },
      {
        path: "/create-bus",
        element: <CreateBus />,
      },
    ],
  },
]);

export default router;
