import { Agencies } from "../InnerComponent/Agencies"
import { ContentBox } from "../InnerComponent/ContentBox"
import { HomeContentBox } from "../InnerComponent/HomeContentBox";
import { ServiceBox } from "../InnerComponent/ServiceBox"
import { TopSlider } from "../InnerComponent/TopSlider"
import Socialmediaprofile from './images/27562-searching-for-profile.json';
import Editor from './images/lf30_editor_lvuzp9j4.json';
import {Helmet} from 'react-helmet'
export const Home=()=>{
    return(
        <> 
        <Helmet>
            <title>Staffing and Recruitment Industry | App Development | Hi5 Consulting</title>
        <meta
      name="keywords"
      content="Recruitment Industry, recruiting and staffing industry, web development company in delaware, smm services company, digital marketing packages usa, seo price packages,"
    />
     <meta
      name="description"
      content="Hi5 Consulting is the best Staffing and Recruitment Industry. Providing Web Development and Design Find Recruiting Services experienced web developers and designers that will cater to all your needs."
    />
        </Helmet>
        <TopSlider/>
        <ContentBox title='Recruiting & Staffing' para='Revolutionizing the hiring process by making it as hassle-free as it can be. It is our top priority to make sure we link companies with highly qualified individuals that fit their needs. We provide you recruitment industry services with the best candidates that we ensure are not only efficient and experienced but also, come with TS/SCI and FSP' subtitle='EXPLORE OUR EXPERTISE' image={Socialmediaprofile}/>
        <ServiceBox/>
        <HomeContentBox title='We are a client-needs driven company' para='Our job is to make sure that you have the peace of mind when hiring an individual while working on securing a permanent contract with different agencies. Our reach goes out to different industries and business realms through which we have made a trustworthy network of professional candidates filling in the in-demand jobs. Our network spans across the USA as well, connected to enterprises, small or large, making sure we provide the best recruiting consulting services with the best.' subtitle='EXPLORE OUR EXPERTISE' image={Editor}/>
        <Agencies/>
        </>
    )
}