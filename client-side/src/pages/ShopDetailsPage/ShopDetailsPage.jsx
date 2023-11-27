import React from 'react';
import PropTypes from 'prop-types';
import classes from './ShopDetailsPage.module.scss';
import { useParams } from 'react-router-dom';

const ShopDetailsPage = props => {
    const { shopCode } = useParams();
  return (
    <div>ShopDetailsPage - {shopCode}</div>
  )
}

ShopDetailsPage.propTypes = {}

export default ShopDetailsPage;
