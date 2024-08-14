import Lottie from "lottie-react";
import React, { useEffect, useRef } from 'react';

export const ContentBox=({title,para,subtitle,image})=>{

  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.4);
    }
  }, []);

    

    return(
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-7 mt-10 mmt-0">
                  <h6 className="subtitle">{subtitle}</h6>
                  <h3 className="mt-4 mb-2 content-title">{title}</h3>
                  <div className="contentpara">
                  <p>{para}</p>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                <Lottie animationData={image} lottieRef={lottieRef}/>
               </div>
            </div>
        </div>
    )
}