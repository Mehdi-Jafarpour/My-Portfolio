import React, { useRef , useState } from "react";
import emailjs from "@emailjs/browser";
import '../styles/Contact.css'


const Contact = () => {
  const form = useRef();
  const [fName , setFname] = useState();
  const [email , setEmail] = useState();
  const [message , setMessage] = useState();

 const handleSubmit = (e) =>{
  e.preventDefault();
  setFname("")
  setEmail("")
  setMessage("")
 }
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_pg1s0ab",
        "template_6z61z8g",
        form.current,
        "-xsayBL_yzkcAI8Ol"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      

  };

  return (
    <div>
      <div className="contactTitle">
        <p>If you send an email, your reply will be sent within 24 hours</p>
      </div>
    <div className="contact">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name :</label>
        <input 
        value={fName} 
        type="text" 
        name="user_name" 
        onChange={(e) => setFname(e.target.value)}/>
        <label>Email :</label>
        <input 
        value={email} 
        type="email" 
        name="user_email" 
        onChange={(e) => setEmail(e.target.value)} />
        <label>Message :</label>
        <textarea 
        value={message} 
        name="message" 
        onChange={(e) => setMessage(e.target.value)}/>
        <input type="submit" value="Send" onClick={handleSubmit} />
      </form>
    </div>
    </div>
  );
};

export default Contact;

