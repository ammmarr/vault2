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
    href: "https://www.facebook.com/tazzweed",
    icon: <FacebookRounded />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/tazzweed.ai/",
    icon: <Instagram />,
  },
  {
    name: "twitter",
    href: "https://twitter.com/tazzweedai",
    icon: <Twitter />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/100752194/",
    icon: <LinkedIn />,
  },
];
