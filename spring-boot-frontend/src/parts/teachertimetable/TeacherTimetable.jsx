import React, { useEffect, useState } from 'react';
import StudentService from '../../services/user/Userservice';
import './teachertimetable.css'

const TeacherTimetable = (props) => {
  const { grade } = props;
  const [studentTimetable, setStudentTimetable] = useState([]);

  const fetchTeacherTimetable = async () => {
    try {
      const response = await StudentService.StudentTimetable(grade);
      console.log(typeof(response))
      if (Array.isArray(response)) {
        setStudentTimetable(response);
      } else {
        console.error('Response is not an array:', response);
      }
    } catch (error) {
      console.error('Error fetching teacher timetable:', error);
    }
  };

  console.log(studentTimetable)

  useEffect(() => {
    // Check if grade is available
    if (grade) {
      fetchTeacherTimetable();
    }
  }, [grade]);

  return (
    <div className='timetable bg-light '>
      <h2>Teacher Timetable</h2>
      <table className="table border-secoundary">
        <thead className="table-dark">
          <tr>
            <th>Week Day</th>
            <th>Time intervel</th>
            <th>Subject </th>
            <th>Teacher </th>

            
          </tr>
        </thead>
        <tbody>
          {studentTimetable.map((studentTimetableItem, index) => (
            <tr key={index}>
              <td>{studentTimetableItem.weekday}</td>
              <td>{studentTimetableItem.time_priod}</td>
              <td>{studentTimetableItem.subject}</td>
              <td>{studentTimetableItem.teacher_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTimetable;
