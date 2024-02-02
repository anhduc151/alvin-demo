import CreateBlog from "./Admin/Create-Blog";
import ChangePass from "./Auth/ChangePass";
import ForgotPassword from "./Auth/ForgotPass";
import SignIn from "./Auth/SignIn";
import SignInOTP from "./Auth/SignIn/OTP";
import SignUp from "./Auth/SignUp";
import VerifyEmail from "./Auth/Verify";
import CoinDetails from "./components/CoinDetails";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/Blog/DetailsBlog";
import DashBoard from "./pages/Dashboard";
import BlogLanding from "./pages/Landingpages/Blog-Landing";
import Home from "./pages/Landingpages/Home";
import PostDemo from "./pages/Landingpages/Post-Crypto";
import PostCrypto from "./pages/Post";
import DetailsPosts from "./pages/Post/DetailsPost";

const RoutesApp = [
  { path: "/", component: Home, layout: null },
  { path: "/sign-in", component: SignIn, layout: null },
  { path: "/sign-up", component: SignUp, layout: null },
  { path: "/dashboard", component: DashBoard },
  { path: "/dashboard/:id", component: CoinDetails },
  { path: "/blog", component: Blog },
  { path: "/blog/:id", component: BlogDetail },
  { path: "/forgot-password", component: ForgotPassword, layout: null },
  { path: "/verify-email/:email", component: VerifyEmail, layout: null },
  { path: "/sign-in-otp", component: SignInOTP, layout: null },
  { path: "/changepass", component: ChangePass, layout: null },
  { path: "/posts-crypto", component: PostCrypto },
  { path: "/posts-crypto/:id", component: DetailsPosts },
  { path: "/create-blog", component: CreateBlog },
  { path: "/post-crypto-demo", component: PostDemo, layout: null },
  { path: "/blogs", component: BlogLanding, layout: null },
];

export { RoutesApp };
