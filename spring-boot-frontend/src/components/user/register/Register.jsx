import React, {useState, useEffect} from 'react'
import {Link,   useParams ,useNavigate  } from 'react-router-dom';
 
import './register.css'
import StudentService from '../../../services/user/Userservice'

const Register = () => {
 
    const [studentName, setstudentName] = useState('')
    const [studentAdress, setstudentAdress] = useState('');
    const [studentemail, setstudentemail] = useState('');
    const [studentGrade, setstudentGrade] = useState('');
    const navigate = useNavigate();
     

    const saveStudent = (e) => {
        e.preventDefault(); // Corrected typo in preventDefault()
      
        const student = { studentName, studentAdress,studentemail,studentGrade};
      
        
      
        StudentService.createEmployee(student)
          .then((response) => {
            console.log(response.data);
              
            navigate('/studentlogin'); // Navigate to '/employees' route
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (
        <div>
       
           
           <div className = "register-container">
                <div className = "row">
                    <div className = "card-main1 mt-5  col-md-6 offset-md-3 offset-md-3"  >
                    <h2 className='school-name-for-loginpage'>Welcome To St/joun's college</h2>
                    <img className='logo-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLG9bOeQjpeA-4yT3yxpDZsDoWXU-zyo5uw&s" alt="" srcset="" />
                     
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                     
                                    <input
                                        type = "text"
                                        placeholder = "Enter your name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {studentName}
                                        onChange = {(e) => setstudentName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                     
                                    <input
                                        type = "text"
                                        placeholder = "Enter Your Address"
                                        name = "lastName"
                                        className = "form-control"
                                        value = { studentAdress}
                                        onChange = {(e) => setstudentAdress(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                     
                                    <input
                                        type = "email"
                                        placeholder = "Enter Your email"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {studentemail}
                                        onChange = {(e) => setstudentemail(e.target.value)}
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