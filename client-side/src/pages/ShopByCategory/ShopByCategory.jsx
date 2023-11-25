import React from "react";
import { useParams } from "react-router-dom";
import classes from "./ShopByCategory.module.scss";
import { MdArrowForward } from "react-icons/md";

const ShopByCategory = () => {
  const { city, shopCategory } = useParams();
  return (
    <div className={classes.ShopByCategory}>
      <div className={classes.ShopByCategoryContent}>
        <section className={classes.PageHeader}>
          <section className={classes.BreadCrumbs}>
            <span className={classes.ActiveSection}>Home</span>
            <span className={classes.ArrowIcon}>
              <MdArrowForward />
            </span>
            <span className={classes.ActiveSection}>Mumbai</span>
            <span className={classes.ArrowIcon}>
              <MdArrowForward />
            </span>
            <span className={classes.City}>Groceries & Essentials</span>
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
        </section>
        <section className={classes.GroceriesWrapper}>

        </section>
      </div>
    </div>
  );
};

export default ShopByCategory;
