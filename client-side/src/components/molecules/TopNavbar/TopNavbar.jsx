import React from "react";
import { MdArrowBack, MdArrowBackIos, MdArrowDownward, MdArrowDropDown, MdArrowUpward, MdKeyboardArrowDown, MdLocationOn, MdOutlineArrowDownward, MdOutlineShoppingCart, MdSearch } from 'react-icons/md';
import classes from "./TopNavbar.module.scss";

const TopNavbar = () => {
  return (
    <div className={classes.TopNavbar__Container}>
      <div className={classes.TopNavbarContent}>
        <div className={classes.LeftWrap}>
          <img
            src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png"
            alt="Dunzo Logo"
            width="122px"
            height="28px"
          />
          <span className={classes.LocationWrap}><MdLocationOn /><span>Set Location</span><MdKeyboardArrowDown /></span>
        </div>
        <div className={classes.MiddleWrap}>
            <div className={classes.BusinessButton}>Dunzo for Partners</div>
            <div className={classes.BusinessButton}>Business with Dunzo <MdKeyboardArrowDown /></div>
        </div>
        <div className={classes.RightWrap}>
            <div className={classes.SearchItem}>
                <MdSearch />
                Search
            </div>
            <div className={classes.SearchItem}>
                <MdOutlineShoppingCart />
                Cart
            </div>
            <div className={classes.SearchItem}>
                <button className={classes.SignInButton}>
                    Sign in
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
