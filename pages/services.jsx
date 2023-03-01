import Layout from "../src/layout/Layout";;
import brandingPic from '../public/assets/images/branding.svg';
import strategyPic from '../public/assets/images/strategy.svg';
import digitalPic from '../public/assets/images/digital.svg';
import contentPic from '../public/assets/images/content.svg';
import Image from "next/image";
import { useEffect } from "react";
import PageTitle from "../src/layout/PageTitle";
import Link from 'next/link'
const Works2Column = () => {


  useEffect(() => {

    document.getElementById('more1').style.display = "none";
    document.getElementById('more2').style.display = "none";
    document.getElementById('more3').style.display = "none";
    document.getElementById('more4').style.display = "none"
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
        <div className="container" style={{ marginTop: "5rem",marginBottom:'1rem' }}>
          <div className="row">
            
            <div className="services-opt col-xs-12 col-sm-12 col-md-6 col-lg-3 ">
            <Link href={{ pathname: 'service', query: { name: 'Strategy' }}} className="service-page-detail">
              <Image src={strategyPic} alt="strategy" width="80" height="80" />
              <h5>Strategy</h5>
              </Link>
              <p style={{ lineHeight: "normal" }}>We help businesses to develop and implement effective strategies that can drive <span id="more1" className="hide">success in a competitive marketplace. Our services include market research, data analysis, user experience, and working closely with business leaders to understand their unique challenges and goals. By leveraging our experience and expertise, we help businesses to gain a fresh and unique perspective, identify growth opportunities, and achieve their long-term objectives.
              </span> </p>
              <Link href={{ pathname: 'service', query: { name: 'Strategy' }}} >
              <button  id="myBtn1" className="read-more-btn">View more</button>
              </Link>
            </div>
           
            
            <div className="services-opt col-xs-12 col-sm-12 col-md-6 col-lg-3 ">
            <Link href={{ pathname: 'service', query: { name: 'Branding & Design' }}} className="service-page-detail">
              <Image src={brandingPic} alt="design" width="80" height="80" />
              <h5>Branding & Design</h5>
              </Link>
              <p style={{ lineHeight: "normal" }}>Establishing a unique identity and presence for our clients in the market is very essential<span id="more2" className="hide"> for our team. We create a unique name, image, and overall identity for the company while creating visual and functional elements that contribute to our client identity and message. Both branding and design are important for building the trust of customers and encouraging brand loyalty.
              </span>  </p>
              <Link href={{ pathname: 'service', query: { name: 'Branding & Design' }}} className="service-page-detail">
              <button  id="myBtn2" className="read-more-btn">View more</button>
              </Link>
            </div>
           
            
            <div className="services-opt col-xs-12 col-sm-12 col-md-6 col-lg-3" >
            <Link href={{ pathname: 'service', query: { name: 'Software Development' }}} className="service-page-detail">
              <Image src={digitalPic} alt="software development" width="80" height="80" />
              <h5 style={{fontSize:"24px"}}>Software Development</h5>
              </Link>
              <p style={{ lineHeight: "normal" }}>Whether you need a customized web application, a mobile app, or a complex software system,<span id="more3" className="hide"> our developers provide you with comprehensive software development services that incorporate the latest technologies and features like react native, react development, Java, JavaScript, Node.js, Git, Docker, and Kubernetes. Our team's priority is to create customized content strategies that help clients achieve their business goals. We design, develop, test, and deploy efficient, reliable, and optimized web and mobile applications for Android and iOS while giving close attention to the UI/UX  to ensure that our applications are both functional and visually appealing, as well as user-friendly.
            </span> </p>
            <Link href={{ pathname: 'service', query: { name: 'Software Development' }}} className="service-page-detail">
              <button id="myBtn3" className="read-more-btn">View more</button>
              </Link>
            </div>
           
            
            <div className=" services-opt col-xs-12 col-sm-12 col-md-6 col-lg-3">
            <Link href={{ pathname: 'service', query: { name: 'Content Production' }}} className="service-page-detail">
              <Image src={contentPic} alt="content Production" width="80" height="80" />
              <h5>Content Production</h5>
              </Link>
              <p style={{ lineHeight: "normal" }}>We aim to help you establish thought leadership, engage with your audience, and  <span id="more4" className="hide">increase conversions by creating compelling articles, blogs, and videos that enhance your digital marketing strategy. Our comprehensive approach to content creation covers ideation, research, production, optimization, and distribution, ensuring that the end result is high-quality and SEO-friendly content that conveys your brand's objectives.</span> </p>
                <Link href={{ pathname: 'service', query: { name: 'Content Production' }}} >
              <button  id="myBtn4" className="read-more-btn">View more</button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Works2Column;
