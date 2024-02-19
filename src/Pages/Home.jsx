import { useState, useEffect } from 'react';
import Items from '../components/Item';
import slide1 from '../assets/images/slider1.jpg';
import slide2 from '../assets/images/slider2.jpg';
import slide3 from '../assets/images/slider3.jpg';
import banner34 from '../assets/images/banner34.jpeg';
import support from '../assets/images/24x7-support.jpg';
import installation from '../assets/images/RO-Installation1.jpg';
import spare from '../assets/images/RO-Spare-Parts.jpg';
import amc from '../assets/images/ro-amc-services.jpg';
import cleaning from '../assets/images/ro-cleaning.jpg';
import repair from '../assets/images/ro-repair-cleaning-services.jpg';
import logo1 from '../assets/images/logo1.jpg';
import logo2 from '../assets/images/logo2.jpg';
import logo3 from '../assets/images/logo3.jpg';
import logo4 from '../assets/images/logo4.jpg';
import logo5 from '../assets/images/logo5.jpg';
import axios from 'axios';
import { url, profileId } from '../Confing.js';
import '../css/home.css'
import Amc from '../components/Amc.jsx';
export default function Home() {

  const [Item, setItem] = useState([]);


  useEffect(async () => {
    let response = await axios.post(`${url}getItem`, { profileId: profileId });

    setItem(response.data.Data)
  }, []);

  return (
    <>

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" />
            {/* <div className="carousel-caption block" style={{ color: 'black' }}>
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div> */}
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" />
            {/* <div className="carousel-caption block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div> */}
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" />
            {/* <div className="carousel-caption block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div> */}
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" style={{ backgroundColor: 'black' }} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" style={{ backgroundColor: 'black' }} aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div style={{ "marginBottom": "20px" }}>

      </div>
      <div className="card mb-3" style={{ "max-width": "540px;" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img style={{ "height":"400px","marginLeft":"75px"}} src={banner34} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="text-center" style={{ "font-weight": "600", "font-size": "35px" }}>Welcome to <span style={{ "color": "#1288c6" }}> Total Aqua Advance</span></h2>
              <p style={{  "font-size": "15px" }}><strong>Total Aqua Advance: Services, Spare Parts, RO Water Purifier Repair And Service Center. We sale, service, AMC and installation.</strong></p>
              <p className="text1" >Operating in your market since 2010 with more than 2000 satisfied customers in the area of ​Baraut, Muzaffarnagar, Shamli and Baghpat. Together with Tesla Power USA, Blue Mount Service Center, we are providing you complete RO services like RO Spare Parts, RO Install Solution, RO Repair, Service and AMC at wholesale rates. I fulfill your trust every moment, then we are called Total Aqua Advance will come to your city Barot, it is the responsibility of all of us to take care of the health of not only your family but also your pocket, as well as better health of your family Also take care of is our priority.</p>

              <p className="text1">You can call our tollfree number or helpline number.Every call will be attended and rectified within 24 to 48 hours.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class=" text-center mx-auto">
          <h2>Our Services</h2>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-80 border-0 box-shadow"><img className="card-img-top" src={installation} style={{ height: "200px" }} />
            <div className="card-body text-center">
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-80 border-0 box-shadow"><img className="card-img-top" src={amc} style={{ height: "200px" }} />
            <div className="card-body text-center">
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-80 border-0 box-shadow"><img className="card-img-top" src={repair} style={{ height: "200px" }} />
            <div className="card-body text-center">
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-80 border-0 box-shadow"><img className="card-img-top" src={support} style={{ height: "200px" }} />
            <div className="card-body text-center">
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-80 border-0 box-shadow"><img className="card-img-top" src={spare} style={{ height: "200px" }} />
            <div className="card-body text-center">
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card text-center h-80 border-0 box-shadow"><img className="card-img-top" src={cleaning} style={{ height: "200px" }} />
            <div className="card-body text-center">
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class=" text-center mx-auto">
          <h2>Our Products</h2>
        </div>
        <div className="col-md-3">
          <div className="list-group list-group-flush sticky-top">
            <a className="list-group-item list-group-item-action text-secondary  active" data-toggle="list">
              Ro</a>
            <a className="list-group-item list-group-item-action text-secondary " data-toggle="list">
              Parts </a>
            <a className="list-group-item list-group-item-action text-secondary " data-toggle="list">
              AMC</a>
          </div>
        </div>
        <div className="col-md-9">
          <div className="tab-content">
            <div className="tab-pane active" id="pane-1">
              <div className="row">

                {
                  Item.map(Item1 =>
                    <Items item={Item1} />
                  )
                }


              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='row'>
        <div class=" text-center mx-auto">
          <h2>Our Brands</h2>
        </div>
        <marquee behavior="scroll" direction="left" onMouseOver="this.stop()" onMouseOut="this.start()">
          <a href="contact.html"><img src={logo1} alt="livpure" /></a>
          <a href="#"><img src={logo2} alt="smith" /></a>
          <a href="#"><img src={logo3} alt="lg" /></a>
          <a href="#"><img src={logo4} alt="aquaguard" /></a>
          <a href="#"><img src={logo5} alt="" /></a>

        </marquee>
      </div>
      <div className='row'>
        < Amc/>
      </div>
    </>
  )
}
