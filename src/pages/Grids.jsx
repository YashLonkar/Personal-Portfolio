import React from 'react';
import Pic1 from '../assets/landscape-1.png';
import Pic2 from '../assets/landscape-2.png';
import Pic3 from '../assets/landscape-3.png';
import '../styles/Grids.css';

const Grids = () => {
  return (
    <div id="card-area">
      <div className="wrapper">
        <div className="box-area">
          <div className="box">
            <img alt="Mountaineering" src={Pic1} />
            <div className="overlay">
              <h3>Feedback System</h3>
              <p>Para</p>
              <a href="#">Book Now</a>
            </div>
          </div>
          <div className="box">
            <img alt="Scuba Diving" src={Pic2} />
            <div className="overlay">
              <h3>Scuba Diving</h3>
              <p>Para</p>
              <a href="#">Book Now</a>
            </div>
          </div>
          <div className="box">
            <img alt="Travel World" src={Pic3} />
            <div className="overlay">
              <h3>Travel World</h3>
              <p>Para</p>
              <a href="#">Book Now</a>
            </div>
          </div>
          <div className="box">
            <img alt="Travel World" src={Pic3} />
            <div className="overlay">
              <h3>Travel World</h3>
              <p>Para</p>
              <a href="#">Book Now</a>
            </div>
          </div>
          <div className="box">
            <img alt="Travel World" src={Pic3} />
            <div className="overlay">
              <h3>Travel World</h3>
              <p>Para</p>
              <a href="#">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grids;
