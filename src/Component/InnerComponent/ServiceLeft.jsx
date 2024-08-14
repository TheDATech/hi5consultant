import { useLottie } from "lottie-react";

export const ServiceLeft=({title,para,subtitle,image,id,height,margin})=>{

    const options = {
        animationData:image,
        loop: true
      };
      const { View } = useLottie(options);

    return(
        <div className="container-fluid" style={{backgroundColor:'#F8F9FA'}}>
                <div className="container pt-8" id={id}>
            <div className="row">
                <div className="col-md-5 serviceleftmoveto">
                  <h6 className="subtitle1">{subtitle}</h6>
                  <h3 className="mt-5 mb-4 serviceleft-title">{title}</h3>
                  <p className="contentpara1">{para}</p>
                </div>
                <div className="col-md-6" id="serviceimageheight" style={{height:height,marginTop:margin}}>
                    {View}
               </div>
            </div>
        </div>
        </div>
    )
}