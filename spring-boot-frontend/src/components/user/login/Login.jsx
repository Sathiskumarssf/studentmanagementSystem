import React, {useState } from 'react'
import {Link,useNavigate  } from 'react-router-dom';
 
import './login.css'
 

import StudentService from '../../../services/user/Userservice'

const Register = () => {
 
     
    const [studentEmail, setstudentEmail] = useState('');
    const [studentGrade, setstudentGrade] = useState('');
    const navigate = useNavigate();
     

    const saveStudent = async (e) => {
        e.preventDefault(); // Corrected typo in preventDefault()
        StudentService.Logincheck(studentEmail,studentGrade)
          .then((response) => {
            console.log(response );
          
              if(response ==="Princiapal"){
                  navigate(`/add-employee?sdtgrade=${studentGrade}&sdtemail=${studentEmail}`); 
              }else if(response ==="Teacher"){
                navigate(`/teacherHome?sdtgrade=${studentGrade}&sdtemail=${studentEmail}`); 
              }else if(response =! null){
                navigate(`/studenthome?sdtgrade=${studentGrade}&sdtemail=${studentEmail}`); 
              }
              else{
                alert("something error");
              }
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (
        <div className='login-main'>
            
           <div className = "login-container">
                <div className = "row">
                    <div className = "card-main mt-5 col-md-6 offset-md-3 offset-md-3"  >
                    <h2 className='school-name-for-loginpage'>Welcome To St/joun's college</h2>
                         <img className='logo-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLG9bOeQjpeA-4yT3yxpDZsDoWXU-zyo5uw&s" alt="" srcset="" />
                     
                        <div className = "card-body">
                            <form>
                                

                                <div className = "form-group mb-2">
                                    
                                    <input
                                        type = "email"
                                        placeholder = "Enter Your Email"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {studentEmail}
                                        onChange = {(e) => setstudentEmail(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    
                                    <input
                                        type = "email"
                                        placeholder = "Enter Your Password"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {studentGrade}
                                        onChange = {(e) => setstudentGrade(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-primary"   onClick={saveStudent}>Submit </button>
                                <Link to="/studentlogin" className="btn btn-primary"> Cancel </Link>
                            </form>

                        </div>
                        
                    </div>
                </div>

           </div>

        </div>
    )
}

export default Register