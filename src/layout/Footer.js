import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  return (
    <footer className="footer"  style={{backgroundColor:router.pathname === '/bhaskar-jyoti-work' ? '#2f2f2f' : '#040407'}}>
      <hr style={{margin:"0"}}></hr>
      <div className="footer__builder" style={{paddingTop:"50px", paddingBottom:"50px"}}>
        <div className="container align-center">
          <div className="row footer__build">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{textAlign:"left"}}>
              <div className="h-titles copyright" style={{display:"flex", justifyContent: 'space-between'}}>
              <div style={{fontWeight: 300, color: "#f4f4f7"}}>
                  &#169; 2023 | Droot Consulting Private Limited
              </div>
              <div className="details-label">
                  <a href="/privacyPolicy" 
                  data-animate="active">Privacy Policy</a>
              </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{textAlign:"right"}}>
              <div className="h-titles">
              <div className="social-links footer-social-links"> 
                <a
                  target="_blank"
                  href="https://www.instagram.com/droot_official/"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-instagram" />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/drootindia/"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-facebook-f" />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/droot/mycompany/"
                  className="scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <i aria-hidden="true" className="fab fa-linkedin-in" />
                </a>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};
export default Footer;
