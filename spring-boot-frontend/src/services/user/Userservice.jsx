import axios from 'axios';

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/students'; 
const Student_BASE_REST_API_URL = 'http://localhost:8080/api/v1/teacher_timetable/find'; 
const Studentprofile_BASE_REST_API_URL = 'http://localhost:8080/api/v1/students/getuserbyemail'; 

class StudentService{
    async createEmployee(student) {
        try {
              const response = await axios.post(EMPLOYEE_BASE_REST_API_URL,student);
               console.log(response.data)
              return response.data;
    
          } catch (error) {
              console.error('Error fetching employees:', error);
          }
      }


      async Logincheck(studentemail,studentGrade) {
       
        try {
             
            const response = await axios.get(EMPLOYEE_BASE_REST_API_URL + "/finduser", {
                params: {
                    studentemail: studentemail,
                    studentGrade:studentGrade
                }
            });

            console.log(response.data)
            
            return response.data;
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    }
    async StudentTimetable(stdgrede) {
        try {
            const response = await axios.get(Student_BASE_REST_API_URL, {
                params: {
                    classroom: stdgrede,
                }
            }); 
            
            return response.data; // Return only the data, not the entire response object
        } catch (error) {
            console.error('Error fetching students:', error);
            throw error; // Rethrow the error so it can be caught by the caller
        }
    }
    async StudentProfile(stdemail) {
        try {
            const response = await axios.get(Studentprofile_BASE_REST_API_URL, {
                params: {
                    studentemail: stdemail,
                }
            }); 
            console.log(stdemail);
            return response.data; // Return only the data, not the entire response object
        } catch (error) {
            console.error('Error fetching students:', error);
            throw error; // Rethrow the error so it can be caught by the caller
        }
    }
    
    
}

export default new StudentService();