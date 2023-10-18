import { Link } from "react-router-dom";
import logoBlack from "../../assets/logos/logo-black-icon.png";
import logoWhite from "../../assets/logos/logo-red-icon.png";
import MenuIcon from "@mui/icons-material/Menu";
import { mainRoutes } from "../../routes";
import style from "./index.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  const blurred = lastScrollY > window.innerHeight ? style.white : style.none;
  return (
    <nav
      className={
        show
          ? `${style.mainNavShow} ${blurred} ${style.nav}`
          : `${style.mainNavHide} ${blurred} ${style.nav}`
      }
    >
      <div className={style.overlay} />

      <div className={style.logoContainer}>
        <img src={blurred ? logoBlack : logoWhite} />
      </div>
      <div className={style.displayLinks}>
        {mainRoutes.map((item: any, key: number) => (
          <Link to={item.href} className="button" key={key}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className={style.searchAndCart}>
        <SearchIcon className="iconBlack" />
        <ShoppingCartIcon className="iconBlack" />
        <MenuIcon
          className={`${style.menuIcon} iconBlack`}
          onClick={() => setNavOpen(true)}
        />
        <nav
          className={style.mobNav}
          style={
            navOpen
              ? { transform: "translateX(0%)" }
              : { transform: "translateX(100%)" }
          }
        >
          <div
            className={style.closeIconContainer}
            onClick={() => setNavOpen(false)}
          >
            <CloseIcon className="iconBlack" />
          </div>
          {mainRoutes.map((link, i) => (
            <Link to={link.href} className="button" key={i}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
