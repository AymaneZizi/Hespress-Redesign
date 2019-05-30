import FullArticle from "../components/Articles/FullArticle/FullArticle"
import Home from "../components/Home";
const menuRoutes = [
  {
    path: "/Articles/:id",
    name: "اخبار الاقتصاد",
    Component: FullArticle
  },
  {
    path: "/",
    name: "الرئيسية",
    Component: Home
  }
];

export default menuRoutes;
