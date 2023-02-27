import Layout from "../src/layout/Layout";;
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import PageTitle from "../src/layout/PageTitle";
import { servicesData } from "../src/data";
const Works2Column = () => {

  const router = useRouter()
  const {name} = router.query;
  const selectedService = servicesData.filter((service)=>service.title.toLowerCase()===name.toLowerCase());
  
  return (
    <Layout>
      <div className="wrapper" style={{
        minHeight: '850px'
      }}> 
      <PageTitle title={name} />
        {/* Section Works */}
        <div className="container" style={{ marginTop: "1rem",marginBottom:'1rem' }}>
          <div className="services-content">
              {selectedService.map((service)=>{
                return(
                  <div key={service.id}>
                    {/* <h5>{service.title.toUpperCase()}</h5> */}
                    <p>{service.content}</p>
                    {
                      service.sub_content.map((point, index)=>{
                        return(
                          <ul key={index}>
                              <h6 className="services-sub-heading">{point.point}</h6>
                            <li key={index}>
                              {point.desc}
                            </li>
                          </ul>
                        )
                      })
                    }
                    </div>
                )
              })

                }
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Works2Column;
