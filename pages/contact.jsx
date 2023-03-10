import Layout from "../src/layout/Layout";
import PageTitle from "../src/layout/PageTitle";
import Image from 'next/image';
import mumbaiPic from '../public/assets/images/mumbai.jpg';
import noidaPic from "../public/assets/images/noida.jpg";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import ContactForm from "../src/components/ContactForm";
const Contact = () => {

  const postUrl = `https://droot.us18.list-manage.com/subscribe/post?u=0736c2c9dbd48bfdc69b8d88f&id=61d41d7035`

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
                  <MailchimpSubscribe
                    url={postUrl}
                    render={({ subscribe, status, message }) => (
                      <ContactForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                      />
                    )}
                  />
                  {/* */}
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
                  <address className="contact address">ITHUM TOWER, B-818,<br />
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
                    HD-299, Enam Sambhav, C-20, <br />
                    G Block Rd, Bandra Kurla Complex, <br />
                    Mumbai, Maharashtra 400051
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
