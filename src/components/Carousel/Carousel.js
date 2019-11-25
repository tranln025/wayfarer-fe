import React from 'react';
import './Carousel.css';
import { Link } from 'react';

const Carousel = () => (
  // <div className="carousel-container container">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="/cities/london">
            <img className="carousel-img" src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg" alt="london"/>
          </a>
        </div>

        <div className="carousel-item">
        <a href="/cities/san-franciso">
          <img className="carousel-img" src="https://cdn.aarp.net/content/dam/aarp/travel/destination-guides/2018/04/1140-travel-destination-san-francisco-main-page.imgcache.rev2e8bf9592b441099e8e7efb70e1c1e4b.web.650.370.jpg" alt="san francisco"/>
        </a>
        </div>
        <div className="carousel-item">
          <a href="/cities/winnipeg">
            <img className="carousel-img" src="https://www.macleans.ca/wp-content/uploads/2017/04/12.-Winnipeg_Manitoba.jpg" alt="winnipeg"/>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/cities/vienna">
            <img className="carousel-img" src="https://skyticket.com/guide/wp-content/uploads/2017/12/shutterstock_719357683.jpg" alt="vienna"/>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/cities/sydney">
            <img className="carousel-img" src="https://assets.vancouverisawesome.com/wp-content/uploads/2019/09/25093747/sydney-opera-house.jpg" alt="sydney"/>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/cities/seatle">
            <img className="carousel-img" src="https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/north-america/seattle-travel.adapt.1900.1.jpg" alt="seatle"/>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/cities/berlin">
            <img className="carousel-img" src="https://www.ef.co.nz/sitecore/__/~/media/universal/stage/5x2/destinations/de/berlin.jpg" alt="berlin"/>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/cities/florence">
            <img className="carousel-img" src="https://plushostels.com/files/firenze/florence_cover_min.jpg" alt="florence"/>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/cities/hong-kong">
            <img className="carousel-img" src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Hong%20Kong/hong-kong-victoria-peak-pano-guide.jpg?imwidth=450" alt="hong-kong"/>
          </a>
        </div>
        <div className="carousel-item">
          <a href="/cities/bangkok">
            <img className="carousel-img" src="https://www.fodors.com/wp-content/uploads/2019/04/HERO_BangkokTips_Hero_shutterstock_367503629.jpg" alt="bangkok"/>
          </a>
        </div>
      </div>
    </div>
  // </div>
);

export default Carousel;