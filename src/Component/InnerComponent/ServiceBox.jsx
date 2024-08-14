
export const ServiceBox=()=>{

    return(
        <div className="servicebg container-fluid">
           <div className='container pt-10'>
             <div className="row">
                <div className="col-md-4">
                    <div className="servicecard">
                          <img src='images/Featurs_img-2.png' alt=''/>
                          <h3>Creative Design</h3>
                          <p>Create an impression that lasts using our creative designing team that ensures your company looks their best.</p>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="servicecard">
                          <img src='images/Featurs_img-1-1.png' alt=''/>
                          <h3>Web Development</h3>
                          <p>Our team makes sure all your web related content is meeting your company’s standards.</p>
                    </div>
                </div>
                <div className="col-md-4">
                <div className="servicecard">
                          <img src='images/Featurs_img-3-1.png' alt=''/>
                          <h3>Mobile Application</h3>
                          <p>Let us make it easier for you and your clients to connect by making your own mobile application.</p>
                    </div>
                </div>
             </div>
           </div>
           <div className="servicebg-overlay"></div>
        </div>
    )
}