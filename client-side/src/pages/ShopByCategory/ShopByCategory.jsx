import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./ShopByCategory.module.scss";
import { MdArrowForward } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getStoreDetailsByCategory,
  getStoreDetailsByCategorySelector,
} from "../../redux-toolkit/slices/store-details";

const ShopByCategory = () => {
  const { city, shopCategory } = useParams();
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const {
    data: getStoreDetailsByCategoryData,
    loading: getStoreDetailsByCategoryLoading,
    error: getStoreDetailsByCategoryError,
  } = useSelector(getStoreDetailsByCategorySelector);

  const renderCategory = () => {
    switch(shopCategory){
      case 'groceries-and-essentials':
        return 'Groceries & Essentials';
      case 'meat-and-fish':
        return 'Meat & Fish';
      default:
        break;
    }
  };

  const handleHomeNavigation = () => {
    navigate(`/${city}`);
  };

  const handleStoreCardActionClick = (store) => {
    navigate(`/${city}/${shopCategory}/${store?._id}`);
  }

  const getPageSyncData = async () => {
    try {
      const payload = {
        city: city,
        category: shopCategory,
      };
      const getStoreDetailsByCategoryRes = await dispatch(
        getStoreDetailsByCategory(payload)
      ).unwrap();
    } catch (error) {
      console.error("Error in getPageSyncData", error);
    }
  };

  console.log("getStoreDetailsByCategoryRes", getStoreDetailsByCategoryData);

  useEffect(() => {
    getPageSyncData();
  }, []);
  return (
    <div className={classes.ShopByCategory}>
      <section className={classes.PageHeader__Container}>
        <div className={classes.PageHeader}>
          <section className={classes.BreadCrumbs}>
            <span className={classes.ActiveSection} onClick={handleHomeNavigation}>Home</span>
            <span className={classes.ArrowIcon}>
              <MdArrowForward />
            </span>
            <span className={classes.ActiveSection} onClick={handleHomeNavigation}>{city}</span>
            <span className={classes.ArrowIcon}>
              <MdArrowForward />
            </span>
            <span className={classes.City}>{renderCategory()}</span>
          </section>
          <div className={classes.ShopCategoryWrapper}>
            <div className={classes.ImageWrapper}>
              <img
                src="https://ik.imagekit.io/dunzo/icons/website/bluegreen/category/grocery.png"
                alt="Grocery Icon"
                height="40px"
                width="40px"
              />
            </div>
            <div className={classes.CategoryWrapper}>
              <h1 className={classes.Label}>
                Groceries & Essentials in Mumbai
              </h1>
              <span className={classes.StoreCount}>148 Stores</span>
            </div>
          </div>
        </div>
      </section>
      <div className={classes.ShopByCategoryContent}>
        <section className={classes.GroceriesWrapper}>
          {getStoreDetailsByCategoryData?.data?.map((store) => (
            <div className={classes.StoreCard} key={store?._id} onClick={() => handleStoreCardActionClick(store)}>
              <div className={classes.ImageWrapper}>
                <img src={store?.store_banner_image} alt='store_banner_image' width='125px' height='125px'/>
              </div>
              <div className={classes.InfoWrapper}>
                <p className={classes.StoreName}>{store?.store_name || '-'}</p>
                <p className={classes.StoreLandmark}>{store?.store_landmark || '-'}</p>
                <p className={classes.StoreDistance}>{store?.store_distance || '-'}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ShopByCategory;
