import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaReact, FaFacebook, FaHome, FaEnvelope, FaInfoCircle } from 'react-icons/fa'; // Import FaInfoCircle icon
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-containor bg-secondary    row m-1'>
         
    <div className='col d-flex'>
 
    <img className='logo-image1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLG9bOeQjpeA-4yT3yxpDZsDoWXU-zyo5uw&s" alt="" srcset="" />
    </div>
    
    <div className='col'>
    <div className="container w-90 p-1 ml-sm-1  "  >
     
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
         <div class="container-fluid">
             <a class="navbar-brand" href="#"> </a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><FaInfoCircle /> About Us</a> {/* Use <FaInfoCircle /> for description */}
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><FaHome /> Location</a> {/* Use <FaHome /> instead of {FaHome} */}
              </li>
               
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/sathis-kumar-97771b246/"><FaFacebook /> Facebook</a> {/* Use <FaLinkedin /> instead of {FaLinkedin} */}
              </li>
              <li className="nav-item">
                <a className="nav-link " href="sathiskumarsk2001@gmail.com"><FaEnvelope/>contect through Email</a>
              </li>
            </ul>
          </div>
         </div>
         </nav>
 </div>
    </div>
</div>
  )
}

export default Navbar
