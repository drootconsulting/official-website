import dynamic from "next/dynamic";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";;
import brandingPic from '../public/assets/images/branding.svg';
import strategyPic from '../public/assets/images/strategy.svg';
import digitalPic from '../public/assets/images/digital.svg';
import contentPic from '../public/assets/images/content.svg';
import Image from "next/image";
import { useEffect } from "react";
import PageTitle from "../src/layout/PageTitle";
const Works2Column = () => {


  useEffect(() => {

    document.getElementById('more1').style.display = "none";
    document.getElementById('more2').style.display = "none";
    document.getElementById('more3').style.display = "none";
    document.getElementById('more4').style.display = "none"
    // document.getElementById('serviceFooter').style.paddingBottom = '22rem';
    return () => {

    }
  }, [])



  const functionReadMore = (textId, buttonId) => {
    console.log(textId, buttonId)

    var dots = document.getElementById(textId)
    var btnText = document.getElementById(buttonId);
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less";
      // document.getElementById('serviceFooter').style.paddingBottom = 'rem';

    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more";
      // document.getElementById('serviceFooter').style.paddingBottom = '22rem';
    }
  }
  return (
    <Layout>
      <div className="wrapper" style={{
        minHeight: '850px'
      }}> 
      <PageTitle title="Our Services" />
        {/* Section Works */}
        <div className="container" style={{ marginTop: "1rem",marginBottom:'1rem' }}>
          <div className="row">
            <div className="services-opt col-xs-12 col-sm-12 col-md-6 col-lg-3 ">
              <Image src={strategyPic} alt="strategy" width="80" height="80" />
              <h5>Strategy</h5>
              <p style={{ lineHeight: "normal" }}>We help businesses develop and implement effective strategies <span id="more1" className="hide">
                that can drive success in a competitive marketplace. Our services include market research, data analysis, user experience, and working closely with business leaders to understand their unique challenges and goals.
                By leveraging our experience and expertise, we help businesses gain a fresh perspective, identify growth opportunities, and achieve their long-term objectives.
              </span> </p>
              <button onClick={() => functionReadMore('more1', 'myBtn1')} id="myBtn1" className="read-more-btn">Read more</button>
            </div>
            <div className="services-opt col-xs-12 col-sm-12 col-md-6 col-lg-3 ">
              <Image src={brandingPic} alt="design" width="80" height="80" />
              <h5>Branding & Design</h5>
              <p style={{ lineHeight: "normal" }}>For Droot, branding and design are crucial for establishing a <span id="more2" className="hide">unique identity and presence in the market. we create a unique name, image, and overall identity for the company, while creating visual and functional elements that contribute to our client’s identity and message. Both branding and design are important for building trust with customers and, fostering brand loyalty. </span>  </p>

              <button onClick={() => functionReadMore('more2', 'myBtn2')} id="myBtn2" className="read-more-btn">Read more</button>

            </div>
            <div className="services-opt col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <Image src={digitalPic} alt="digital development" width="80" height="80" />
              <h5>Digital Development</h5>
              <p style={{ lineHeight: "normal" }}>Droot provides digital development solutions,<span id="more3" className="hide">including website and app development, e-commerce, digital marketing, and social media management. Our team creates and manages digital products that meet user needs and behaviors while leveraging digital tools effectively. Our digital development services enable our clients to build a powerful online presence and effectively engage with their target audience.</span> </p>
              <button onClick={() => functionReadMore('more3', 'myBtn3')} id="myBtn3" className="read-more-btn">Read more</button>
            </div>
            <div className=" services-opt col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <Image src={contentPic} alt="content Production" width="80" height="80" />
              <h5>Content Production</h5>
              <p style={{ lineHeight: "normal" }}>Our services, includes the creation and publication of <span id="more4" className="hide">articles, videos, and social media posts. Our team develops comprehensive content strategies that deliver engaging content to your target audience. We utilize our deep understanding of your audience's preferences and behaviors to create effective and compelling content that builds brand awareness and fosters audience engagement.</span> </p>
              <button onClick={() => functionReadMore('more4', 'myBtn4')} id="myBtn4" className="read-more-btn">Read more</button>
            </div>
          </div>
        </div>
      </div>
      <div id="serviceFooter">
      <Footer />

      </div>
    </Layout>
  );
};
export default Works2Column;
