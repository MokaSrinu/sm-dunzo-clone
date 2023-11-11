import React from 'react';
import classes from './Layout.module.scss';
import { LayoutFooter, TopNavbar } from '../molecules';

const Layout = (props) => {
    const { children } = props;
  return (
    <div className={classes.Layout__Container}>
        <TopNavbar />
        {children}
        <LayoutFooter />
    </div>
  )
};

export default Layout