import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DOMPurify from 'dompurify';


export const JobDetail=()=>{
  const [Open,setOpen]=useState(false);
  const [jobData,setJobData]=useState([]);
  console.log('jobData',jobData)
  const [values,setValues]=useState({
    job_id:'',
    full_name: '',
    email: '',
    phone_no: '',
    cover_letter: '',
    document: null,
  });
  const [msg,setMsg]=useState(false);
  const slug=useParams();
   

  const getJobs=async()=>{
    try{
      const response=await axios.get(`https://portal.hi5-consulting.com/api/job-details/${slug.slug}`)
      setJobData(response.data.job_detail)
      setValues((prevValues) => ({
        ...prevValues,
        job_id: response.data.job_detail.id,
      }));
    }catch(err){
      console.log('err',err)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setValues({
      ...values,
      document: e.target.files[0],
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('job_id', values.job_id);
    formData.append('full_name', values.full_name);
    formData.append('email', values.email);
    formData.append('phone_no', values.phone_no);
    formData.append('cover_letter', values.cover_letter);
    formData.append('document', values.document);

    console.log('formData',formData)


    try {
      const response = await fetch('https://portal.hi5-consulting.com/api/apply-job', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      if(data.message){
        setOpen(false)
        setMsg(true)
        toast.success('Thanks for submitting your application for a job at Hi5 Consulting.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        setValues({
          job_id:'',
          full_name: '',
          email: '',
          phone_no: '',
          cover_letter: '',
          document: null,
        })
      }
      // Handle successful response, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error:', error);
      // Handle error, e.g., show an error message
    }
  };

  const onCloseModal = () => setMsg(false);

  const sanitizedResponsibilities = DOMPurify.sanitize(jobData.responsibilities);

  useEffect(()=>{
    getJobs()
  },[])
return(
    <>
   <ToastContainer />
       <div className="container-fluid pt-8" style={{backgroundColor:'#F8F9FA'}}>
            <div className="container p-md-5 p-3" style={{backgroundColor:'#FFFF'}}>
            <h4 className="content-title px-md-4">{jobData && jobData.job_title}</h4>
            <div className="awsm-job-specification-wrapper px-md-4">
            <div class="awsm-job-specification-item awsm-job-specification-job-type"><span class="awsm-job-specification-label"><strong>Job Industry: </strong>
                  </span><span class="awsm-job-specification-term" style={{textTransform:"capitalize"}}>{jobData && jobData.job_industry}</span> 
                 </div>
                 <div class="awsm-job-specification-item awsm-job-specification-job-type"><span class="awsm-job-specification-label"><strong>Job Type: </strong></span
                 ><span class="awsm-job-specification-term" style={{textTransform:"capitalize"}}>{jobData && jobData.employment_type}</span> 
                 </div>
                 <div class="awsm-job-specification-item awsm-job-specification-states">
                  <span class="awsm-job-specification-label"><strong>Job Location: </strong></span>
                  <span class="awsm-job-specification-term" style={{textTransform:"capitalize"}}>{jobData && jobData.job_location}</span> 
                  </div>
                  <div class="awsm-job-specification-item awsm-job-specification-job-type"><span class="awsm-job-specification-label"><strong>Grade: </strong>
                  </span><span class="awsm-job-specification-term" style={{textTransform:"capitalize"}}>{jobData && jobData.grade}</span> 
                 </div>
                  </div>
            <div className="awsm-job-entry-content entry-content mt-3 px-md-4">
	
<p className="content-title">Summary:</p>


<p className="homecontentpara">{jobData && jobData.job_summary}</p>

<p className="homecontentpara">{jobData && jobData.short_description}</p>

{jobData && jobData.long_description && <p className="content-title">Long Description</p>}
<p className="homecontentpara">{jobData && jobData.long_description}</p>

<p className="content-title">Responsibilities:</p>



<div className="homecontentpara" dangerouslySetInnerHTML={{ __html: sanitizedResponsibilities }}/>
  




<p className="content-title">Requirements:</p>




{jobData && <div dangerouslySetInnerHTML={{ __html: jobData.requirements }} className="homecontentpara"/>}
{Open===false && !msg ?<button className="applyNow mb-3" onClick={()=>setOpen(true)}>Apply Now</button>:""}
</div>
<div className="awsm-job-form px-md-4">
{Open===true && (
<div className="awsm-job-form-inner">

	
	<h2>
		Apply for this position	</h2>
	<form className="awsm-application-form" onSubmit={handleSubmit}>
  <div className="awsm-job-form-group">
    <label htmlFor="awsm-applicant-name" className="awsm-applicant-name">Full Name <span className="awsm-job-form-error">*</span></label>
    <input type="text" name="full_name" className="awsm-job-form-field awsm-job-form-control" value={values.full_name}
                      onChange={handleChange} id="awsm-applicant-name" required data-msg-required="This field is required." />
    </div>
    <div className="awsm-job-form-group"><label htmlFor="awsm-applicant-email" className="awsm-applicant-name">Email 
        <span className="awsm-job-form-error">*</span></label>
        <input type="email" name="email" className="awsm-job-form-field awsm-job-form-control" value={values.email}
                      onChange={handleChange} id="awsm-applicant-email" required data-msg-required="This field is required." data-rule-email="true" data-msg-email="Please enter a valid email address." /></div>
        <div className="awsm-job-form-group"><label htmlFor="awsm-applicant-phone" className="awsm-applicant-name">Phone <span className="awsm-job-form-error">*</span></label>
        <input type="tel" name="phone_no" className="awsm-job-form-field awsm-job-form-control" value={values.phone_no}
                      onChange={handleChange} id="awsm-applicant-phone" required data-msg-required="This field is required." /></div>
        <div className="awsm-job-form-group">
            <label htmlFor="awsm-cover-letter" className="awsm-applicant-name">Cover Letter <span className="awsm-job-form-error">*</span></label>
            <textarea name="cover_letter" value={values.cover_letter}
                      onChange={handleChange}  className="awsm-job-form-field awsm-job-form-control" id="awsm-cover-letter" required data-msg-required="This field is required." rows={5} cols={50} defaultValue={""} /></div>
            <div className="awsm-job-form-group" ><label htmlFor="awsm-application-file">Upload CV/Resume <span className="awsm-job-form-error">*</span></label><input type="file" name="document" onChange={handleFileChange} className="awsm-job-form-field awsm-resume-file-control awsm-job-form-control awsm-form-file-control" id="awsm-application-file"  style={{background:"transparent",border:"none"}} required data-msg-required="This field is required." accept=".pdf, .doc, .docx" /><small>Allowed Type(s): .pdf, .doc, .docx</small></div>
            <div className="awsm-job-form-group awsm-job-inline-group d-flex">
            <input name="awsm_form_privacy_policy" className="awsm-job-form-field" id="awsm_form_privacy_policy" style={{width:"12px"}} defaultValue="yes" type="checkbox" checked={values.awsm_form_privacy_policy}
                      onChange={handleChange} data-msg-required="This field is required." aria-required="true" required />
            <label htmlFor="awsm_form_privacy_policy" className="mt-2 mx-1">By using this form you agree with the storage and handling of your data by this website. <span className="awsm-job-form-error">*</span></label>
    </div>
  <input type="hidden" name="job_id" defaultValue={jobData && jobData.id} />
  <input type="hidden" name="action" defaultValue="awsm_applicant_form_submission" />
  <div className="awsm-job-form-group">
    <input type="submit" name="form_sub" id="awsm-application-submit-btn" className="awsm-application-submit-btn" defaultValue="Submit" data-response-text="Submitting.." />
  </div>
</form>


	<div class="awsm-application-message" style={{display: "none"}}></div>

	
</div>)} 
		</div>
            </div>
        </div>

      <Modal open={msg} onClose={onCloseModal} center>
        <p className="text-center"><IoMdCheckmarkCircleOutline className="fs-1" style={{color:"#8678b8"}}/></p>
        <h4 className="text-center" id="msg">Thanks for submitting your application for<br/> a job at Hi5 Consulting.</h4>
      </Modal>
    </>
)
}