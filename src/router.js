import ChangePass from "./Auth/ChangePass";
import ForgotPassword from "./Auth/ForgotPass";
import SignIn from "./Auth/SignIn";
import SignInOTP from "./Auth/SignIn/OTP";
import SignUp from "./Auth/SignUp";
import VerifyEmail from "./Auth/Verify";
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
  { path: "/forgot-password", component: ForgotPassword, layout: null },
  { path: "/verify-email/:email", component: VerifyEmail, layout: null },
  { path: "/sign-in-otp", component: SignInOTP, layout: null },
  { path: "/changepass", component: ChangePass, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
