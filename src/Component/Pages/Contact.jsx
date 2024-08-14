import { useState } from "react";
import { Agencies } from "../InnerComponent/Agencies"

export const Contact=()=>{

   const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      industry: '',
      phone: '',
      home_phone: '',
      country: '',
      state: '',
      city: ''
  });

  const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({
       ...formData,
       [name]: value
   });
};

const handleSubmit = (e) => {
   e.preventDefault();
   // Process the form data, for example, send it to your backend
   console.log('Form submitted:', formData);

   // You can use fetch or axios to send the data to your backend
   fetch('https://portal.hi5-consulting.com/api/contact-us', {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData),
   })
   .then(response => response.json())
   .then(data => {     console.log('Success:', data);
   })
   .catch((error) => {
       console.error('Error:', error);
   });
};

    return(
        <>
        <div className="container pt-8">
            <div className="container mt-5 mb-4">
            <div className="text-center"> <h2 className="industrytitle">Looking for an
<br/>Appointment?
</h2>
         <img src="images/industrydot.JPG"/></div>
            </div>
            <div className="row mx-0 pb-4">
                <div className="col-md-6">
                    <div className="contact-image">
                    <img src="images/contact.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <form className="contactform" onSubmit={handleSubmit}>
                     <h4>Make an Appointment</h4>
                     <p>FOR ANY INQUIRY</p>
                     <div className="col-12">
                        <label>First Name</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange}/>
                     </div>
                     <div className="col-12 mt-4">
                        <label>Last Name</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange}/>
                     </div>
                     <div className="col-12 mt-4">
                        <label>Industry</label>
                        <input type="text" name="industry" value={formData.industry} onChange={handleChange}/>
                     </div>
                     <div className="col-12 mt-4">
                        <label>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                     </div>
                     <div className="col-12 mt-4">
                        <label>Phone Number(Cell)</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
                     </div>
                     <div className="col-12 mt-4">
                        <label>Phone Number(Home/Work)</label>
                        <input type="text" name="home_phone" value={formData.home_phone} onChange={handleChange}/>
                     </div>
                     <div className="col-12 mt-4">
                        <label>Country</label>
                        <select name="country" value={formData.country} onChange={handleChange}>
                            <option className="selected" value="">Select Country</option>

                        </select>
                     </div>
                     <div className="col-12 mt-4">
                        <label>State</label>
                        <select name="state" value={formData.state} onChange={handleChange}>
                            <option className="selected" value="">Select State</option>
                        </select>
                     </div>
                     <div className="col-12 mt-4">
                        <label>City</label>
                        <select name="city" value={formData.city} onChange={handleChange}>
                            <option className="selected" value="">Select City</option>
                        </select>
                     </div>
                     <button className="mt-4 mb-4" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Agencies/>
        </>
    )
}