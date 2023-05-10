import React, { useEffect } from 'react'
import { landingPageDetailsGet } from '../../api-client';

const Page1 = () => {
  const synchronizeComponentData = async () => {
    try {
      const payload = {
        city: 'mumbai',
      }
      const landingPageDetailsGetRes = await landingPageDetailsGet(payload);
      console.log('landingPageDetailsGetRes', landingPageDetailsGetRes);
    } catch (error) {
      console.error('landingPageDetailsGetRes error', error);
    }
  }
  useEffect(()=>{
    synchronizeComponentData();
  }, []);
  return (
    <div>Page1</div>
  )
}

export default Page1;