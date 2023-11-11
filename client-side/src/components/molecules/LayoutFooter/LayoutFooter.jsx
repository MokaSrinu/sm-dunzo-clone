import React from "react";
import PropTypes from "prop-types";
import classes from "./LayoutFooter.module.scss";

const LayoutFooter = (props) => {
  return (
    <div className={classes.LayoutFooter}>
      <div className={classes.LayoutContent}>
        <section className={classes.FooterDesc__Wrap}>
          <p className={classes.Title}>
            You can’t stop time, but you can save it!
          </p>
          <p className={classes.Description}>
            Living in the city, there is never enough time to shop for
            groceries, pick-up supplies, grab food and wade through traffic on
            the way back home. How about we take care of all of the above for
            you? What if we can give you all that time back? Send packages
            across the city and get everything from food, groceries, medicines
            and pet supplies delivered right to your doorstep. From any store to
            your door, just make a list and we’ll make it disappear. Just Dunzo
            It!
          </p>
        </section>
        <section className={classes.Divider}></section>
        <section className={classes.MoreSection}>
          <div className={classes.LeftWrap}>
            <div>
              <img
                src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-footer-dbc7c51cccb1c5e6b2210740296729e3.png"
                alt="Dunzo IMG"
                width="70px"
                height="70px"
              />
            </div>
            <div>
              <h4 className={classes.ListHeader}>Dunzo</h4>
              <ul className={classes.List}>
                <li className={classes.ListItem}>About</li>
                <li className={classes.ListItem}>Jobs</li>
                <li className={classes.ListItem}>Contact</li>
                <li className={classes.ListItem}>Terms & Conditions</li>
                <li className={classes.ListItem}>Privacy Policy</li>
                <li className={classes.ListItem}>Dunzo for partner</li>
                <li className={classes.ListItem}>Dunzo for business</li>
              </ul>
            </div>
            <div>
              <h4 className={classes.ListHeader}>SERVICEABLE CITIES</h4>
              <ul className={classes.List}>
                <li className={classes.ListItem}>Bangalore</li>
                <li className={classes.ListItem}>Pune</li>
                <li className={classes.ListItem}>Gurgaon</li>
                <li className={classes.ListItem}>Hyderabad</li>
                <li className={classes.ListItem}>Delhi</li>
                <li className={classes.ListItem}>Chennai</li>
                <li className={classes.ListItem}>Mumbai</li>
              </ul>
            </div>
            <div>
              <h4 className={classes.ListHeader}>GET IN TOUCH</h4>
              <ul className={classes.List}>
                <li className={classes.ListItem}>Email</li>
                <li className={classes.ListItem}>Media Queries</li>
                <li className={classes.ListItem}>Twitter</li>
                <li className={classes.ListItem}>Facebook</li>
                <li className={classes.ListItem}>Instagram</li>
                <li className={classes.ListItem}>Linkedin</li>
              </ul>
            </div>
          </div>
          <div className={classes.RightWrap}>
            <img
              src="https://resources.dunzo.com/web-assets/prod/_next/static/images/footer-mascot-0a94653a7991194aa18773ec353d7fb6.png"
              alt="scooty img"
              width="250px"
              height="200px"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

LayoutFooter.propTypes = {};

export default LayoutFooter;
