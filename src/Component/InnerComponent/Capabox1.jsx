import { useLottie } from "lottie-react";
export const Capabox1=({image})=>{
    const options = {
        animationData:image,
        loop: true
      };
      const { View } = useLottie(options);
    return(
        <div className="container mt-5">
            <h1 className="Captitle mb-3">Partner for Federal Opportunities</h1>
            <div class="elementor-divider m-2">
			<p class="elementor-divider-separator animate__animated animate__bounceInRight" style={{border:"1px solid #8678B8",width:'40rem'}}>
						</p>
		</div>
        <p className="Cappara">We can provide you with qualified candidates that can be potential permanent hires that will stick with you while you connect with different federal opportunities that you might be interested in. It is our intent to make sure to give you the peace of mind when hiring an individual while working on securing a permanent contract with different agencies. Our candidates have also been placed in the US Federal Agencies such as, the Department of Defense, Air Force, US Navy, NASA, NGA, DHS, CBP, UST and FBI.</p>
            <div className="row">
                <div className="col-md-6 mt-10">
                    <h3 className="Captitle">Cost effectiveness</h3>
                    <p className="Cappara">The typically possibility based commission approach can without much of a stretch have a huge effect on any organization’s main concern. Rather than the typical possibility based commission approach, our Recruiting-as-a-Service model gives critical influence to organizations that enroll in volume, as this assistance structure permits them to make numerous situations at a level month to month expense of $3000 with no covered up costs.</p>
                </div>
                <div className="col-md-6">
                    <div className="row agencies mt-5" style={{width:"450px",height:"350px"}}>
                    {View}
                    </div>
                </div>
            </div>
        </div>
    )
}