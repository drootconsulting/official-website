import {clientData} from '../data';
import { useState} from 'react';
const List =({client, index})=>{

  const[isMouseOver, setIsMouseOver]=useState(false);

  function MouseOver() {
    setIsMouseOver(true);
  }
  function MouseOut(){
    setIsMouseOver(false);
  }

  return(

    <div
      className= "partners-col col-xs-12 col-sm-6 col-md-3 col-lg-3 scrolla-element-anim-1 scroll-animate " 
      data-animate="active" key={index} style={{ marginTop: "0.5rem", backgroundColor: isMouseOver?"#fff" : "#000", transition:"0.2s ease-in"
      }}onMouseOver={MouseOver} onMouseOut={MouseOut} >
      <div className="partners-item">
        <div className="image">
            {!isMouseOver ? (client.client_name) :
              (<img src={client.image_url}  alt={client.id} style={{opacity: isMouseOver? 1 : 0, transition:"1.5s ease-in"}}/>)
            }
        </div>
      </div>
    </div>
  )
}

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
              {description && <div >
                Long-term partnerships are the key to success. By building strong relationships with our clients and partners, we create a foundation of trust and reliability that lasts for years to come
                  </div>}
            </div>
            <div className="partners-box">
              <div className="partners-items row">
                {
                  clientData.map((client, index)=>(
                      <List client={client} index={index} key={index}/>
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
