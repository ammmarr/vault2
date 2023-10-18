import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import Privacy from "./pages/PrivacyPolicy/Privacy";
import Blog from "./pages/blog/Blog";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contactUs/Contact";
import CookiesPage from "./pages/cookies/CookiesPage";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";
import Terms from "./pages/terms of use/Terms";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";

export const mainRoutes = [
  {
    name: "Home",
    href: "/",
    element: <Home />,
  },
  {
    name: "Products & Services",
    href: "/products-and-services",
    element: <Products />,
  },

  {
    name: "Blog",
    href: "/blogs",
    element: <Blogs />,
  },
  {
    name: "About Us",
    href: "/about-us",
    element: <AboutUs />,
  },
  {
    name: "Contact",
    href: "/contact",
    element: <Contact />,
  },
];
export const allRoutes = [
  {
    name: "Home",
    href: "/",
    element: <Home />,
  },
  {
    name: "Products & Services",
    href: "/products-and-services",
    element: <Products />,
  },
  {
    name: "Blog",
    href: "/blogs",
    element: <Blogs />,
  },
  {
    name: "About Us",
    href: "/about-us",
    element: <AboutUs />,
  },
  {
    name: "blog",
    href: "/blog/:id",
    element: <Blog />,
  },
  {
    name: "product",
    href: "/product/:id",
    element: <Product />,
  },
  {
    name: "cookeis",
    href: "/cookies",
    element: <CookiesPage />,
  },
  {
    name: "Contact",
    href: "/contact",
    element: <Contact />,
  },
  {
    name: "Terms Of Use",
    href: "/terms-of-use",
    element: <Terms />,
  },
  {
    name: "Privacy and Policy",
    href: "/privacy-policy",
    element: <Privacy />,
  },
];

export const socialMediaLinks = [
  {
    name: "Facebook",
    href: "",
    icon: <FacebookRounded />,
  },
  {
    name: "instagram",
    href: "",
    icon: <Instagram />,
  },
  {
    name: "twitter",
    href: "",
    icon: <Twitter />,
  },
  {
    name: "LinkedIn",
    href: "",
    icon: <LinkedIn />,
  },
];
