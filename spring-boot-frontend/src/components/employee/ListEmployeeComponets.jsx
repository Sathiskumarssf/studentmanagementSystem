import React, { useEffect, useState } from 'react';
import EmployeeService from '../../services/employee/EmployeeService';
import { Link } from 'react-router-dom';

const ListEmployeeComponents = () => {
    const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Using async/await to handle asynchronous call
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getAllEmployees();
        setEmployees(response);
      } catch (error) {
        console.error('Error fetching employees:', error);
        // Optionally handle errors for user feedback (e.g., display an error message)
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">List Employee</h2>
      <Link to='/add-employee' className='btn btn-primary '>
        Add emaployee
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee FirstName</th>
            <th>Employee LastName</th>
            <th>Employee Email</th>
            <th>action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.fristName}</td> {/* Corrected typo */}
              <td>{employee.lastName}</td>
              <td>{employee.emailid}</td>
              <td>
                <Link to ={`/edit-employee?id=${employee.id}&&fristName=${employee.fristName}&&lastName=${employee.lastName}&&emailid=${employee.emailid}`} className='btn btn-primary'>
                  update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponents;
