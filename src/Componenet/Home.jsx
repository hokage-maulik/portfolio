import React from 'react';
import "../Style/Home.css";
// import { AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import Particle from './Particle';
import "../Style/Particle.css"
import Particles from 'react-tsparticles';

export default function Home() {
  return (
    <div>
      <div className="container mt-5">
        <Particles/>
        {/* <Particle/> */}
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="">
              <h1>
                My Name is <span className='purple'>Maulik</span> <br />
                I am a Fullstack Developer
              </h1>
            </div>
          </div>
          <div className="col-md-6">
            <img  style={{maxHeight:"500px",width:""}}
              src="me.jpeg" 
              alt="Maulik"
              className="img-fluid float-end mt-2"
            />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10">
            <div className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <h5 className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> C++, Javascript, and Node. </b>
                </i>
                <br />
                <br />
                My field of interest includes building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b>
                </i>
                &nbsp; and also in areas related to{" "}
                <b className="purple">Blockchain.</b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple"> Modern Javascript Libraries and Frameworks</b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Node.js</b>
                </i>
              </h5>
            </div>
            <div className="home-about-social text-center">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links d-flex justify-content-center">
                
                {/* <li className="social-icons mx-3">
                  <a
                    href="https://github.com/hokage-maulik"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons text-white"
                  >
                    <AiFillGithub size={40} /> {/* Increased size */}
                  {/* </a> */}
                {/* </li> */} 

                <li className="social-icons mx-3">
                  <a
                    href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons text-white"
                  >
                    <FaLinkedinIn size={40} /> {/* Increased size */}
                  </a>
                </li>
                {/* <li className="social-icons mx-3">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons text-white"
                  >
                    <AiFillInstagram size={40} /> 
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            {/* This space can be used for additional content or left empty */}
          </div>
        </div>
      </div>
    </div>
  );
}
