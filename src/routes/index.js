import { createBrowserRouter } from "react-router-dom";
import NavBar from "../pages/layout/NavBar";

const routes = [
  {
    path: "/",
    element: <NavBar />
  }
];

const BrowserRouter = createBrowserRouter();

const router = BrowserRouter({
  routes
});

export default router;
