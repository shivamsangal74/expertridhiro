import React from 'react'
import '../css/footer.css'
function Footer() {
  return (
//     <div className="container-fluid bg-dark">
//     <div className="row">
//       <div className="col-md-12">
//         <div className=" text-center text-white py-4">Developed By Nivyam Technology</div>
//       </div>
//     </div>

//   </div>
<footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Opp. Teacher's Colony Nehru Road,Baraut </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9152315891/8791249996</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>totalaquaadvane@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src="https://lh3.googleusercontent.com/p/AF1QipNifHXSFgwW3EK16cfAC3-pZRvK2S4w1Rg8jUbD=s1360-w1360-h1020" className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>Near Doon Public School,Opp. Teacher's Colony Nehru Road,Baraut.</p>
                            </div>
                          
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Company Service Certificate</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="http://expertridhiro.com/docs/bluemount.pdf">Blue Mount </a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="http://expertridhiro.com/docs/livepure.pdf">LivePure RO</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="http://expertridhiro.com/docs/tesla.pdf">TESLA Power</a></li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                               <p><b>GST NO : 09CQPPG7731R1ZU </b></p>
                               <p><b>MSME NO : UDYAM-UP-09-0016934 </b></p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved.</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu footer-social-icon">
                       
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
