

import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees'; 

class EmployeeService {
  async getAllEmployees() {
    try {
          const response = await axios.get(EMPLOYEE_BASE_REST_API_URL);
           console.log(response.data)
          return response.data;

      } catch (error) {
          console.error('Error fetching employees:', error);
      }
  }

  async createEmployee(employee) {
    try {
          const response = await axios.post(EMPLOYEE_BASE_REST_API_URL,employee);
           console.log(response.data)
          return response.data;

      } catch (error) {
          console.error('Error fetching employees:', error);
      }
  }
  async EditEmployee(id,employee) {
    try {
          const response = await axios.put(EMPLOYEE_BASE_REST_API_URL+"/" +id,employee);
           console.log(response.data)
          return response.data;

      } catch (error) {
          console.error('Error fetching employees:', error);
      } 
  }
}

export default new EmployeeService();
