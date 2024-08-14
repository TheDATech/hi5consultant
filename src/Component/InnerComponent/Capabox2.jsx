import { FaJava } from "react-icons/fa6";

export const Capabox2=()=>{
    return(
        <div className="container mb-5">
            <h1 className="Captitle mb-3">Development Process Outsourcing</h1>
            <div class="elementor-divider m-2">
			<p class="elementor-divider-separator animate__animated animate__bounceInRight" style={{border:"1px solid #8678B8",width:'50rem'}}>
						</p>
		</div>
            <div className="row">
                <div className="col-md-6">
                    <h3 className="Captitle mt-4">Development Platforms</h3>
                    <p className="Cappara mt-3">You can count on us to develop your business Websites, CRM &amp; Mobile Applications on WordPress, using different programming languages as per your need such as HTML/CSS, PHP, JAVA and Asp .NET. Our Developers highly capable and qualified individuals that would easily cater to any company’s particular needs, helping out in making the process smoothly.</p>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-6 text-center pt-4">
                            <img src="images/wordpress.png" alt=""/>
                        </div>
                        <div className="col-6 text-center pt-4">
                        <img src="images/php.png" alt=""/>
                        </div>
                        <div className="col-6 text-center pt-3 mt-md-3">
                         <FaJava className="java"/>
                        </div>
                        <div className="col-6 text-center pt-4">
                         <img src="images/laravelicon.png" alt="laravel" height="120px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}