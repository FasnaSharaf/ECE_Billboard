import React from 'react';
import '../Styles/Prop.css';
const Prop = () => {
    return (
        <header className="prop" id='prop'>

          <div className="title-wrapper">
            <img className="logo" src="./Cet_emblem-removebg-preview.png" alt="Logo" />
            <h3>College of Engineering Trivandrum</h3>
          </div>

          <div className="title-wrapper-ece">
            <img className="logo" src="./eclogoblack.png" alt="Logo" />
            <b>ECE BILLBOARD</b>
          </div>
        <div className="contact-info">
            <i class="fa fa-send-o"></i>
            <div className="contact-info1">
            <p>Email</p>
            <a href="mailto:email_id@cet.ac.in">email_id@cet.ac.in</a>
            </div>
            
        </div>
        </header>
    );
    };
   
   export default Prop;