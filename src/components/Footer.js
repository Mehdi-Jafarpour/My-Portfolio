import React from 'react'
import {useNavigate} from "react-router-dom"
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkdinIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'

import "../styles/Footer.css"

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
        <div className="socialMedia">
         <a href="https://www.facebook.com/mehdi.jafar.77"><FacebookIcon /></a>
         <a href="http://linkedin.com/in/mehdi-jafarpour-abb250135"><LinkdinIcon /></a>
         <EmailIcon onClick={()=> {navigate('/contact')}}/>  
        </div>
        <p>&copy; 2022 Mehdijafarpour04.com</p>
    </div>
  )
}

export default Footer