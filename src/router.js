import LoginAdmin from "./Admin/Login";
import CreateBlog from "./Admin/pages/Create-Blog";
import DashboardAdmin from "./Admin/pages/Dashboard-Admin";
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
import NotFound from "./pages/NotFound";
import PostCrypto from "./pages/Post";
import DetailsPosts from "./pages/Post/DetailsPost";
import Topics from "./pages/Topics";
import TopicPosts from "./pages/Topics/Topics_Post";

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
  { path: "/blogs", component: BlogLanding, layout: null },
  { path: "/topics", component: Topics },
  { path: "/topics/:topicId", component: TopicPosts },

  // Routes Admin
  { path: "/admin", component: LoginAdmin, layout: null },
  { path: "/admin/create-blog", component: CreateBlog, layout: null },
  { path: "/admin/dashboard", component: DashboardAdmin, layout: null },

  // 404
  { path: "/404",component: NotFound, layout: null },
];

export { RoutesApp };
