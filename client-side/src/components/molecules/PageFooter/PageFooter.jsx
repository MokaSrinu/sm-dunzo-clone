import React from "react";
import PropTypes from "prop-types";
import classes from "./PageFooter.module.scss";
import { TopPickIcon } from "../../atoms/Icons/Icons";

const PageFooter = (props) => {
  const { areasWeDeliver } = props;
  return (
    <>
      <section className={classes.TopPicks}>
        <div className={classes.TopPicksContent}>
          <h2 className={classes.SectionHeader}>Top picks for you</h2>
          <TopPickIcon />
          <div className={classes.ImageContainer}>
            <img
              className={classes.Image}
              src="https://ik.imagekit.io/dunzo/web-assets/images/d4b.jpg"
              alt="d4d img"
              width="244px"
              height="164px"
            />
            <img
              className={classes.Image}
              src="https://ik.imagekit.io/dunzo/web-assets/images/grocery.jpg"
              alt="grocery img"
              width="244px"
              height="164px"
            />
            <img
              className={classes.Image}
              src="https://ik.imagekit.io/dunzo/web-assets/images/restaurants.jpg"
              alt="restaurants img"
              width="244px"
              height="164px"
            />
            <img
              className={classes.Image}
              src="https://ik.imagekit.io/dunzo/web-assets/images/send-packages.jpg"
              alt="send-packages img"
              width="244px"
              height="164px"
            />
          </div>
        </div>
      </section>
      <section className={classes.MobileAppSuggestion}>
        <div className={classes.MobileAppSuggestionContent}>
          <div className={classes.InfoWrapper}>
            <div className={classes.MobileImage}>
              <img
                className={classes.Image}
                src="https://resources.dunzo.com/web-assets/prod/_next/static/images/dunzo-daily-app-preview-7c97560e963bcd173c11c470b2ff63ed.png"
                alt=""
              />
            </div>
            <div className={classes.DownloadInfo}>
              <p className={classes.Title}>
                All this from the convenience of your phone.
              </p>
              <p className={classes.SubTitle}>
                Download the Dunzo mobile app.{" "}
              </p>
              <div className={classes.DownloadLinks}>
                <img
                  src="https://resources.dunzo.com/web-assets/prod/_next/static/images/playstore-ee5b43e66d1583a6066423fb42fb69d8.svg"
                  alt=""
                />
                <img
                  src="https://resources.dunzo.com/web-assets/prod/_next/static/images/appstore-078da620a293bb95473ae21624a55872.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.AreasWeDeliver}>
        <div className={classes.AreasWeDeliverContent}>
          <h3 className={classes.Header}>Areas we deliver to</h3>
          <div className={classes.LocationContainer}>
            {areasWeDeliver?.map((location, index) => (
              <div key={index} className={classes.FieldColumn}>
                {location}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

PageFooter.propTypes = {
  areasWeDeliver: PropTypes.array,
};

export default PageFooter;
