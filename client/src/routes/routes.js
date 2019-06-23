import FullArticle from "../components/Articles/FullArticle/FullArticle"
import Home from "../components/Home";
import Profile from '../components/Profile/Profile'

const routes = {
  article: {
    path: "/article/:id",
    component: FullArticle
  },
  profile: {
    path: "/profile",
    component: Profile
  },
  home: {
    path: "/",
    name: "الرئيسية",
    component: Home
  }
};

export default routes;

