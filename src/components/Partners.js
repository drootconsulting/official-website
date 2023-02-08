import {partnerData} from '../data';
import { useState,useEffect} from 'react';
import Link from "next/link";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const Partners = ({description}) => {

  
  return (
    <div className="section section-inner m-partners">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {/* partners */}
            <div className="m-titles">
              <h2
                className="m-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Long term partners, Long term trust
              </h2>
              {description && <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                Long-term partnerships are the key to success. By building strong relationships with our clients and partners, we create a foundation of trust and reliability that lasts for years to come
                  </div>}
            </div>
            <div className="partners-box">
              <div className="partners-items row">
                {
                  partnerData.map((item)=>(
                        <div
                        className="partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate"
                        data-animate="active" key={item.id} style={{borderRight:"1px solid #323141"}} >
                        <div className="partners-item">
                          <div className="image">
                            <a target="_blank" href="#">
                              <img src={item.partnerLogoImage} style={{ backgroundColor: "#fff" }} alt={item.id} />
                            </a>
                          </div>
                        </div>
                      </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
