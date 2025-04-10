import React from 'react'; 
import {Link} from "react-router-dom";
function Contact() {
///const videoRef = useRef(null);
///const playvideo=()=>videoRef.current.play();
///const pausevideo=()=>videoRef.current.pause();
  return(
    
      
      <section id="contact">
        
          <header className="header">
            <h2>Contact Us</h2>
          </header>
          <button> <Link to="/">Back to Home </Link></button>
          <p>If you have any questions or suggestions, feel free to reach out to us!</p>
          <p> Address: 123 Sports Street, New York, USA</p>
          <p> Phone: +1 234 567 890</p>
          <p> Email: info@sportsworld.com</p>
          <br></br>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required /><br /><br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required /><br /><br />

            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" rows="4" required></textarea><br /><br />

            <input type="submit" value="Submit" />
          </form>
          <nav>
            <br></br>
           

          </nav>
        </section>
);
  }
  export default Contact;