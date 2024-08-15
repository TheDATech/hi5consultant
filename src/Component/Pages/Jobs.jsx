import { Link } from "react-router-dom"
import { Agencies } from "../InnerComponent/Agencies";
import { FaLongArrowAltRight,FaSearch } from "react-icons/fa";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useEffect, useState } from "react";
import axios from "axios";

const extractUniqueOptions = (jobs, key) => {
  const options = jobs.map(job => job[key]);
  return [...new Set(options)].map(option => ({ value: option, label: option }));
};
export const Jobs=()=>{
    const [jobData, setJobData] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [industryOptions, setIndustryOptions] = useState([]);
    const [locationOptions, setLocationOptions] = useState([]);
    const [typeOptions, setTypeOptions] = useState([]);
    const [industry, setIndustry] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    
    const getJobs=async()=>{
      try{
        const response =await axios.get('https://portal.hi5-consulting.com/api/all-jobs')
        setJobData(response.data.jobs);
        setFilteredJobs(response.data.jobs);
      }catch(err){
        console.log('err',err)
      }
    }

    useEffect(()=>{
      getJobs()
    },[])

    const filterJobs = () => {
      let filtered = jobData;
  
      if (industry) {
        filtered = filtered.filter(job => job.job_industry === industry);
      }
      if (location) {
        filtered = filtered.filter(job => job.job_location === location);
      }
      if (type) {
        filtered = filtered.filter(job => job.employment_type === type);
      }
      if (searchTerm) {
        filtered = filtered.filter(job =>
          job.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.job_summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.short_description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      setFilteredJobs(filtered);
    };

    useEffect(() => {
      filterJobs();
    }, [industry, location, type,searchTerm]);

    useEffect(() => {
      if (jobData.length) {
        setIndustryOptions(extractUniqueOptions(jobData, 'job_industry'));
        setLocationOptions(extractUniqueOptions(jobData, 'job_location'));
        setTypeOptions(extractUniqueOptions(jobData, 'employment_type'));
      }
    }, [jobData]);
    return(
        <>
        <div className="container-fluid pt-8" style={{backgroundColor:'#F8F9FA'}}>
            <div className="container p-md-5 p-3" style={{backgroundColor:'#FFFF'}}>
                <div className="row">
                    <h4 style={{fontSize:'1.5rem'}} className="mb-4">Jobs</h4>
                    <div className="col-md-3 mt-2 mb-2">
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
                    <div className="input-group-append">
                       <span className="input-group-text">
                          <FaSearch/>
                       </span>
                     </div>
                    </div>
                    </div>
                    <div className="col-md-2 mt-2 mb-2">
                        <Dropdown  options={industryOptions}
              onChange={(e) => setIndustry(e.value)}
              value={industry} placeholder="All Job Industry" controlClassName='myControlClassName'/>
                    </div>
                    <div className="col-md-2 mt-2 mb-2">
                        <Dropdown  options={typeOptions}
              onChange={(e) => setType(e.value)}
              value={type} placeholder="All Job Type" controlClassName='myControlClassName'/>
                    </div>
                    <div className="col-md-2 mt-2 mb-2">
                        <Dropdown  options={locationOptions}
              onChange={(e) => setLocation(e.value)}
              value={location} placeholder="All Job Location" controlClassName='myControlClassName'/>
                    </div>
                </div>
                <table>
                  {filteredJobs.map((job, index) => {
                     return(
                      <tr key={index}>
                      <td><Link to={`/jobs/${job.slug}`}>{job.job_title}</Link></td>
                      <td>{job.job_industry && job.job_industry}</td>
                      <td>{job.job_location && job.job_location}</td>
                      <td><Link to={`/jobs/${job.slug}`} style={{fontSize:'12px'}}>More Details <FaLongArrowAltRight/></Link></td>
                    </tr>
                     )
})}

                </table>
            </div>
        </div>
        <Agencies/>
        </>
    )
}