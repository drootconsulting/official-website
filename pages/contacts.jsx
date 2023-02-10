import { useState } from "react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import axios from 'axios';

const Contacts = () => {
  const [contactInfo, setContactInfo] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleInputChange=(e)=>{
      setContactInfo({
        ...contactInfo,
        [e.target.name]:e.target.value
      })

      console.log(e.target.value, e.target.name)
  }

  const handleSubmit=(event)=>{
      event.preventDefault();
      console.log("trigger");
      let data = {name:contactInfo.name, email:contactInfo.email, message:contactInfo.message}
      fetch('/api/contactsApi', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log("data", data);
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setContactInfo({
            name:"",
            email:"",
            message:""
          })
        }
      })
    
      // try {
      //   console.log("inside try block");
      //   const data = await axios.post('http://localhost:3000/api/contactsApi', {
      //     name:contactInfo.name, email:contactInfo.email, message:contactInfo.message 
      //   });
      //   console.log("data", data);
      //   console.log('Posted data successfully');
      // } catch (error) {
      //   console.error(error);
      // }
      console.log("contactInfo", contactInfo);
  }

  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <PageTitle title="Contact Us" />

        {/* Section Image Large */}
        <div
          className="section section-inner m-image-large scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <div className="image">
            <div
              className="img js-parallax"
              style={{ backgroundImage: "url(assets/images/contact.jpg)" }}
            />
          </div>
        </div>
        {/* Section Contacts Form */}
        <div className="section section-inner m-contacts-form">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                {/* titles */}
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Say Hello 
                  </div>
                </div>
                {/* contact form */}
                <div className="contacts-form">
                  <form id="cform" method="post" onSubmit={handleSubmit}>
                    <div className="group">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          value = {contactInfo.name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="group">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active"
                      >
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value=  {contactInfo.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="group full">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active">
                        <textarea
                          name="message"
                          placeholder="Message"
                          value =  {contactInfo.message}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div
                      className="submit scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <button className="btn">
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className="alert-success" style={{ display: "none" }}>
                    <p>Thanks, your message is sent successfully.</p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                {/* titles */}
                <div className="m-titles">
                  <h2
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Connect with us
                  </h2>
                </div>
                {/* services */}
                <div className="services-items row">
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-phone-alt" />
                      </div>
                      <div className="name">Phone</div>
                      <div className="text">+91 99887 18950</div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i aria-hidden="true" className="fas fa-at" />
                      </div>
                      <div className="name">E-mail</div>
                      <div className="text">mohit@droot.in</div>
                    </div>
                  </div>
                  <div className="services-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div
                      className="services-item scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <div className="icon">
                        <i
                          aria-hidden="true"
                          className="fab fa-font-awesome-flag"
                        />
                      </div>
                      <div className="name">Location</div>
                      <div className="text">
                      ITHUM TOWER, <br/>
                      B-818,Tower B, A-40, Sector 62, <br/>
                       Noida, Uttar Pradesh 201301
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default Contacts;
