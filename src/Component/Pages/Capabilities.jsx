import { Agencies } from "../InnerComponent/Agencies"
import { Capabox } from "../InnerComponent/Capabox"
import { Capabox1 } from "../InnerComponent/Capabox1"
import { Capabox2 } from "../InnerComponent/Capabox2"
import Ver from './images/lf30_editor_tsd0kprm.json'

export const Capabilities=()=>{
    return(
        <>
          <div className="Breadrum" style={{backgroundImage:'url(images/cap.jpg)',backgroundSize:"cover"}}>
         <div className='content' style={{zIndex:'1200'}}>
                    <h1 className='animate__animated animate__fadeInUp Capabilitiesbreadrumtitle'>Capabilities</h1>
                </div>
       <div className="Breadrum-overlay"></div>
      </div>
      <Capabox/>
      <Capabox1 image={Ver}/>
      <Capabox2/>
      <Agencies/>
        </>
    )
}