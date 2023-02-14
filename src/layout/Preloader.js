import Script from 'next/script'


const Preloader = ({setLoader}) => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      {/* <Script
        src="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100i%2C300%2C300i%2C400%2C400i%2C500%2C500i%2C700%2C700i%2C900%2C900i%7CPlayfair+Display%3A100%2C100i%2C300%2C300i%2C400%2C400i%2C500%2C500i%2C700%2C700i%2C900%2C900i%7CMr+De+Haviland&display=swap"
        onLoad={() => {
          // setLoader(false)
        }}
      /> */}

    </div>
    // <div className="preloader">
    //   <div className="centrize full-width">
    //     <div className="vertical-center">
    //       <div className="spinner-logo">
    //         <img src="assets/images/drootlogoW.png" alt="logo" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Preloader;
