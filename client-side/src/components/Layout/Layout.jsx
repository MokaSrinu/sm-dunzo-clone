import React from 'react';
import classes from './Layout.module.scss';
import { TopNavbar } from '../molecules';

const Layout = (props) => {
    const { children } = props;
  return (
    <div className={classes.Layout__Container}>
        <TopNavbar />
        {children}
    </div>
  )
};

export default Layout