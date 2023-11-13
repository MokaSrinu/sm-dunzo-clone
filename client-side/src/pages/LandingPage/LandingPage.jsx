import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { PageFooter } from "../../components/molecules";
import {
  getLandingPageDetails,
  getLandingPageDetailsSelector,
} from "../../redux-toolkit/slices/landing-page";
import classes from "./LandingPage.module.scss";
import { MdArrowForward } from "react-icons/md";

const LandingPage = () => {
  const { city } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    data: getLandingPageDetailsData,
    loading: getLandingPageDetailsLoading,
    error: getLandingPageDetailsError,
  } = useSelector(getLandingPageDetailsSelector);

  const synchronizeComponentData = async () => {
    try {
      const payload = {
        city: city,
      };
      await dispatch(getLandingPageDetails(payload)).unwrap();
    } catch (error) {
      console.error("landingPageDetailsGetRes error", error);
    }
  };
  useEffect(() => {
    synchronizeComponentData();
    window.scrollTo(0,0);
  }, [location]);
  console.log(location)
  return (
    <div className={classes.LandingPage}>
      <div className={classes.LandingPageContent}>
        <section className={classes.BreadCrumbs}>
          <span className={classes.ActiveSection}>
            {getLandingPageDetailsData?.data?.bread_crum?.[0]}
          </span>
          <span className={classes.ArrowIcon}>
            <MdArrowForward />
          </span>
          <span className={classes.City}>
            {getLandingPageDetailsData?.data?.bread_crum?.[1]}
          </span>
        </section>
        <h1 className={classes.CityName}>
          {getLandingPageDetailsData?.data?.city}
        </h1>
        <p className={classes.Description}>
          {getLandingPageDetailsData?.data?.description}
        </p>
        <div className={classes.ImageContainer}>
          {getLandingPageDetailsData?.data?.color_cards?.map((colorCard) => (
            <div className={classes.ImageWrapper} key={colorCard?._id}>
              <img
                className={classes.Image}
                src={colorCard?.image}
                alt={'Color Cards'}
                width="244px"
                height="180px"
              />
              {
                colorCard?.text && 
                <span className={classes.ActiveTag}>{colorCard?.text}</span>
              }
            </div>
          ))}
        </div>
        <div className={classes.PlainCardContainer}>
          {getLandingPageDetailsData?.data?.plain_cards?.map((plainCard) => (
            <div className={classes.ImageWrapper} key={plainCard?._id}>
              <img
                className={classes.Image}
                src={plainCard?.image}
                alt={'Plain Cards'}
                width="40px"
                height="40px"
              />
              <p className={classes.CardTitle}>{plainCard?.text}</p>
              {
                plainCard?.special_text && 
                <span className={classes.ActiveTag}>{plainCard?.special_text}</span>
              }
            </div>
          ))}
        </div>
      </div>
      <PageFooter
        areasWeDeliver={getLandingPageDetailsData?.data?.areas_we_deliver}
      />
    </div>
  );
};

export default LandingPage;
