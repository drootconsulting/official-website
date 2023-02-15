import Header from '../layout/Header';

const Preloader = ({setLoader}) => {
  return (
    <div style={{ backgroundColor: 'black' }}>
    
        <Header/>
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
