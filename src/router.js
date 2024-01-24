import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Landingpages/Home";

const publicRoutes = [
  { path: "/dashboard", component: DashBoard },
  { path: "/", component: Home, layout: null },
  { path: "/sign-in", component: SignIn, layout: null },
  { path: "/sign-up", component: SignUp, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
