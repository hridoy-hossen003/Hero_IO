import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/Home/Home.jsx";
import Root from "./Root/Root.jsx";
import Apps from "./Components/Apps/Apps.jsx";
import Installation from "./Components/Installed/Installation.jsx";
import axios from "axios";
import AppDetails from "./Components/Apps/AppDetails.jsx";
import NotFoundPage from "./Components/ErrorPages/NotFoundPage.jsx";
import ErrorPage from "./ErrorComponets/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        loader: () => axios.get("AllApps.json").then((res) => res.data),
        Component: Apps,
      },
      {
        path: "installation",
        loader: () =>
          axios
            .get(
              "https://raw.githubusercontent.com/hridoy-hossen003/Hero_IO/refs/heads/main/appsdata",
            )
            .then((res) => res.data),
        Component: Installation,
      },
      {
        path: "apps/:id",
        loader: async () => {
          const res = await axios.get(
            "https://raw.githubusercontent.com/hridoy-hossen003/Hero_IO/refs/heads/main/appsdata",
          );
          return res.data;
        },
        Component: AppDetails,
      },
      // {
      //   path: "apps/:id/installation",
      //   Component : Installation,
      // },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
