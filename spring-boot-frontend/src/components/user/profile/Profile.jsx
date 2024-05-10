import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StudentService from '../../../services/user/Userservice';
import { FaUser } from 'react-icons/fa';

const Profile = () => {
  const location = useLocation();
  const stdemail = new URLSearchParams(location.search).get('stdemail');
  console.log(stdemail);

  const [studentProfile, setStudentProfile] = useState([]);

  const fetchStudentProfile = async () => {
    try {
      const response = await StudentService.StudentProfile(stdemail);
      setStudentProfile(response);
    } catch (error) {
      console.error('Error fetching student profile:', error);
    }
  };

  useEffect(() => {
    if (stdemail) {
      fetchStudentProfile();
    }
  }, [stdemail]);

  return (
    <div className='login-main'>
      <div className='login-container'>
        <div className='row'>
          <div className='card-main mt-5 col-md-6 offset-md-3 offset-md-3'>
             <div className='mt-5'>
             <FaUser size={50} className="clickable-icon" />
             </div>
             <h3>Hai {studentProfile.studentName}</h3> 
             <h3>Email {studentProfile.studentemail}</h3> 
             <h3>Grade {studentProfile.studentGrade}</h3> 
             <h3>Address {studentProfile.studentAdress}</h3> 

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
