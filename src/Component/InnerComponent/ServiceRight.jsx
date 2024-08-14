import { useLottie } from "lottie-react";

export const ServiceRight=({title,para,subtitle,image,id})=>{

    const options = {
        animationData:image,
        loop: true
      };
      const { View } = useLottie(options);

    return(
        <div className="container">
            <div className="row pb-3" id={id}>
            <div className="col-md-6 pt-5 order-md-1 order-2" id="serviceimageheight">
                    {View}
               </div>
                <div className="col-md-5 mt-5 order-md-2 order-1">
                  <h6 className="subtitle1">{subtitle}</h6>
                  <h3 className="mt-5 mb-4 serviceleft-title">{title}</h3>
                  <p className="contentpara1">{para}</p>
                </div>
            </div>
        </div>
    )
}