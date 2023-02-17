import { Swiper, SwiperSlide } from "swiper/react";
import { home1SliderProps } from "../sliderProps";
import { data } from "../data";
const SwipperComponent =()=>{
   return(
    <>
    
    <div className="wrapper" id="swipper"> 
        <Swiper {...home1SliderProps}   className="section hero-main-slider" >
          {
            data.map((item) => (
              <SwiperSlide className="swiper-slide" data-color="dark" key={item.id}
              >
                  <div className="slide" style={{ margin: "auto", display: 'flex', width: '100%', height: '100%', backgroundColor: '#0D0D0D', justifyContent: 'center', alignItems: 'center', overflow: "hidden" }}>
                    <video muted loop src={item.video_url} autoPlay className="video" type="video/mp4" style={{objectFit: item.id===1?"cover":"none"}}/>
                  </div>
                 {
                  <div className="slide-titles">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="titles dark" style={{ color: item.id === 1 ? "#232323" : '#fff' }}>
                          <div className="label scrolla-element-anim-1">{item.label}</div>
                          <div
                            className="title scrolla-element-anim-1 scroll-animate floating"
                            data-animate="active"
                          >
                            <span
                              className="title-inner splitting-text-anim-2" style={{fontWeight: 'bolder', fontFamily: 'helvetica'}}
                              data-splitting=""
                            >
                              {item.title}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                } 

              </SwiperSlide>
            ))}

          {/* pagination */}
          {/* navigation */}
          <div className="swiper-buttons">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </Swiper>
      </div>
      </>
   )

}

export default SwipperComponent;