import { useLottie } from "lottie-react";

export const HomeContentBox=({title,para,subtitle,image})=>{

    const options = {
        animationData:image,
        loop: true
      };
      const { View } = useLottie(options);

    return(
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-6 mt-17 mmt-0">
                  <h6 className="subtitle">{subtitle}</h6>
                  <h3 className="mt-4 mb-2 content-title">{title}</h3>
                  <div className="homecontentpara">
                  <p>{para}</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-17">
                    {View}
               </div>
            </div>
        </div>
    )
}