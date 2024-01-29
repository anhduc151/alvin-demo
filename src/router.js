import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import CoinDetails from "./components/CoinDetails";
import Blog from "./pages/Blog";
import DetailsBlog from "./pages/Blog/DetailsBlog";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Landingpages/Home";

const publicRoutes = [
  { path: "/", component: Home, layout: null },
  { path: "/sign-in", component: SignIn, layout: null },
  { path: "/sign-up", component: SignUp, layout: null },
  { path: "/dashboard", component: DashBoard },
  { path: "/dashboard/:id", component: CoinDetails },
  { path: "/blog", component: Blog },
  { path: "/blog/:id", component: DetailsBlog },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
