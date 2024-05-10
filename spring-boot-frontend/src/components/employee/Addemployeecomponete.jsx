import React, {useState, useEffect} from 'react'
import {Link,   useParams ,useNavigate  } from 'react-router-dom';
 

import EmployeeService from '../../services/employee/EmployeeService'

const AddEmployeeComponent = () => {

    const [fristName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailid, setEmailId] = useState('');
    const navigate = useNavigate();
     

    const saveEmployee = (e) => {
        e.preventDefault(); // Corrected typo in preventDefault()
      
        const employee = { fristName, lastName, emailid };
      
        
      
        EmployeeService.createEmployee(employee)
          .then((response) => {
            console.log(response.data);
              // Access navigate function inside functional component
            navigate('/employees'); // Navigate to '/employees' route
          })
          .catch((error) => {
            console.error(error);
          });
      };

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                     
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {fristName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailid}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success"   onClick={saveEmployee}>Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent