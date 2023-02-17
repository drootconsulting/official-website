import { useState } from "react";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import axios from 'axios';
import Image from 'next/image';
import mumbaiPic from '../public/assets/images/mumbai.jpg';
import noidaPic from "../public/assets/images/noida.jpg";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleInputChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("trigger");
    let data = { name: contactInfo.name, email: contactInfo.email, message: contactInfo.message }
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
          name: "",
          email: "",
          message: ""
        })
      }
    })

    console.log("contactInfo", contactInfo);
  }

  return (
    <Layout>
      <div className="wrapper">
        <PageTitle title="Contact Us" />
        <div className="section section-inner m-contacts-form">
          <div className="container">
            <div className="row">
              <div >
                <div className="m-titles">
                  <div
                    className="m-title scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    Say Hello
                  </div>
                </div>
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
                          value={contactInfo.name}
                          onChange={handleInputChange}
                          style={{ backgroundColor: "#1C2224", outline: "none", fontFamily: "sans-serif" }}
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
                          value={contactInfo.email}
                          onChange={handleInputChange}
                          style={{ backgroundColor: "#1C2224", fontFamily: "sans-serif" }}
                        />
                      </div>
                    </div>
                    <div className="group full">
                      <div
                        className="value scrolla-element-anim-1 scroll-animate"
                        data-animate="active">
                        <textarea
                          type="text"
                          name="message"
                          placeholder="Message"
                          value={contactInfo.message}
                          onChange={handleInputChange}
                          style={{ backgroundColor: "#1C2224", border: "none", fontFamily: "sans-serif" }}
                        />
                      </div>
                    </div>
                    <div
                      className="submit scrolla-element-anim-1 scroll-animate"
                      data-animate="active"
                    >
                      <button className="btn" style={{ border: "2px solid #c0c0c7", borderRadius: "50px" }}>
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className="alert-success" style={{ display: "none" }}>
                    <p>Thanks, your message is sent successfully.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location-contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 location-title-div">
                <h3 className="location-title" >Locations</h3>
              </div>
              <div className=" location-1 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="location-image">
                  <Image src={noidaPic} alt="Noida" />
                </div>
                <div className="location-detail">
                  <div className="city-name">
                    Noida
                  </div>
                  <div className="contact">
                    +91 120-4136316
                  </div>
                  <a className="contact" href="mailto:info@droot.in">info@droot.in</a>
                  <address className="contact address">ITHUM TOWER,B-818, <br />
                    Tower B, A-40, Sector 62, <br />
                    Noida, Uttar Pradesh 201301</address>
                </div>
              </div>
              <div className=" location-1 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="location-image">
                  <Image src={mumbaiPic} alt="Mumbai" />
                </div>
                <div className="location-detail">
                  <div className="city-name">
                    Mumbai
                  </div>
                  <div className="contact">
                    +91 22-48808623
                  </div>
                  <a className="contact" href="mailto:info@droot.in">info@droot.in</a>
                  <address className="contact address">
                    Enam Sambhav, C-20, <br />
                    G Block Rd, Bandra Kurla Complex, <br />
                    Mumbai, Maharashtra 400051
                  </address>
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
export default Contact;
