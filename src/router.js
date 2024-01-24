import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Landingpages/Home";

const publicRoutes = [
  { path: "/", component: Home, layout: null },
  { path: "/sign-in", component: SignIn, layout: null },
  { path: "/sign-up", component: SignUp, layout: null },
  { path: "/dashboard", component: DashBoard },
];

const privateRoutes = [
];

export { publicRoutes, privateRoutes };
