import React from 'react';
import laptopImg from "../Assets/about.png";
import Techstack from './Data/Techstak';
import Toolstack from './Data/Toolstack';
import '../Style/About.css'

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <blockquote className="blockquote mb-0">
              <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am <span className="purple">Maulik Vaghela</span>
                from <span className="purple"> Ahemdabad, India.</span>
                <br />
                I am currently employed as a Full-Stack developer at Juspay.
                <br />
                I have completed Integrated BSc in Chemistry at Gujarat University.
                <br /><br />
                Apart from coding, some other activities that I love to do!
              </p>
              <ul>
                <li className="about-activity">Playing Games</li>
                <li className="about-activity">Gymnetics</li>
                <li className="about-activity">Travelling</li>
              </ul>
              <p className='mx-5' style={{ color: "rgb(155 126 172)" }}>
                "Strive to build things that make a difference!"{" "}
              </p>
              <footer className="blockquote-footer mx-5">Maulik</footer>
            </blockquote>
          </div>
          <div className="col-md-6">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-11">
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset</strong>
            </h1>
            <Techstack/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack/>
          </div>
        </div>
      </div>
    </div>
  );
}
