import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
             <a class="navbar-brand" href="#">Menu</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                 <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="http://localhost:3000/homewithoutlogin">Home</a>
                 </li>
                 <li class="nav-item">
                 <a class="nav-link" href="#">About Us</a>
                 </li>
                 <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Dropdown
                 </a>
                 <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">Action</a></li>
                     <li><a class="dropdown-item" href="#">Another action</a></li>
                     
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                 </ul>
                 </li>
                 <li class="nav-item">
                 <a class="nav-link  " aria-disabled="true">Contects</a>
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
