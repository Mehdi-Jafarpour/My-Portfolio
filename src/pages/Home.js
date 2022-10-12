import React from "react";
import {useNavigate} from "react-router-dom"
import EmailIcon from "@material-ui/icons/Email";
import SaveIcon from "@material-ui/icons/SaveAltOutlined";
import pdf from "../assets/CV.pdf";
import {CertificateList} from '../helper/CertificateList'
import CertificateItem from '../components/CertificateItem'

import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, My Name Is Mehdi</h2>
        <div className="prompt">
          <p>A Frontend Developer With Passion For Learning and Ctreating.</p>
          <EmailIcon onClick={()=> {navigate('/contact')}}/>
          <a href={pdf} download="CV.pdf">
            <SaveIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>SKILLS</h1>
        <ol className="list">
          <li >
            <h2>Front-End</h2>
            <spam className="item">
              Html5, Css3, Bootstrap, JavaScript Es6, jQuery, React-js and
              Redux,Jest(Writing tests).
            </spam>
          </li>
          <li >
            <h2>Network</h2>
            <spam className="item">
              Problem-Solving and Administration, Networking, Cloud, Automation
              and Scripting, Security and Monitoring, Account Access Management,
              IoT/Mobile Device Management, Scripting Languages, Hardware
              Management, SQL.{" "}
            </spam>
          </li>
          <li>
            <h2>Spoken Languages</h2>
            <spam className="item">English, Persion, Turky</spam>
          </li>
        </ol>
      </div>
      <div className="certificates">
      <h1 className="certificateTitle">My Certificates</h1>
        <div className="certificatetList">
        {CertificateList.map((certificate)=> {
            return <CertificateItem name={certificate.name}  image={certificate.image}/>
          })}
        </div>
      </div>
    </div>
    
  );
}

export default Home;
