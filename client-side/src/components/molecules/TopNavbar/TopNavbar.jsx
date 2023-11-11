import React from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdLocationOn,
} from "react-icons/md";
import { CartIcon, SearchIcon } from "../../atoms/Icons/Icons.jsx";
import classes from "./TopNavbar.module.scss";

const TopNavbar = () => {
  return (
    <>
      <section className={classes.TopNavbar__Container}>
        <div className={classes.TopNavbarContent}>
          <div className={classes.LeftWrap}>
            <img
              src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png"
              alt="Dunzo Logo"
              width="122px"
              height="28px"
            />
            <span className={classes.LocationWrap}>
              <MdLocationOn />
              <span>Set Location</span>
              <MdKeyboardArrowDown />
            </span>
          </div>
          <div className={classes.MiddleWrap}>
            <div className={classes.BusinessButton}>Dunzo for Partners</div>
            <div className={classes.BusinessButton}>
              Business with Dunzo <MdKeyboardArrowDown />
            </div>
          </div>
          <div className={classes.RightWrap}>
            <div className={classes.SearchIcon}>
              <SearchIcon />
              Search
            </div>
            <div className={classes.CartIcon}>
              <CartIcon />
              Cart
            </div>
            <div className={classes.SignInButtonWrap}>
              <button className={classes.SignInButton}>Sign in</button>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.NavbarBottom__Container}>
        <div className={classes.NavbarBottomContent}>
          <div className={classes.LeftWrap}>
            <div className={classes.PanItemsImage}>
              <img
                src="https://resources.dunzo.com/web-assets/prod/_next/static/images/paan-3514c1ca4be5af789addd127f4c24308.png"
                alt="PanItemsImage"
                className={classes.Icon}
                width="32"
                height="32"
              />
            </div>
            <p className={classes.HeaderMessage}>
              Order Paan items, munchies and much more on our new Dunzo Mo app
            </p>
          </div>
          <div className={classes.RightWrap}>
            <button className={classes.DownloadAppButton}>
              <span>Download Dunzo Mo app now</span>
              <span>
                <MdKeyboardArrowRight fontSize='1.125rem'/>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopNavbar;
