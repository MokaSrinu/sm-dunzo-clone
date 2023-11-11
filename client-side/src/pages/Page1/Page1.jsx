import React, { useEffect, useState } from 'react'
import { landingPageDetailsGet } from '../../api-client';
import { PageFooter } from '../../components/molecules';
import classes from './Page1.module.scss';

const Page1 = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const synchronizeComponentData = async () => {
    try {
      const payload = {
        city: 'mumbai',
      }
      const landingPageDetailsGetRes = await landingPageDetailsGet(payload);
      console.log('landingPageDetailsGetRes', landingPageDetailsGetRes);
      setLandingPageData(landingPageDetailsGetRes?.data?.data);
    } catch (error) {
      console.error('landingPageDetailsGetRes error', error);
    }
  }
  useEffect(()=>{
    synchronizeComponentData();
  }, []);
  return (
    <div className={classes.Page1}>Page1
      <PageFooter areasWeDeliver={landingPageData?.areas_we_deliver}/>
    </div>
  )
}

export default Page1;