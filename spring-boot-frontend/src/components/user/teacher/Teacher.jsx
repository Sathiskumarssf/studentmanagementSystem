import React from 'react'
import Navbar from '../../../parts/navbar/Navbar'
import TeacherTimetable from '../../../parts/teachertimetable/TeacherTimetable'
import Event from '../../user/events/Events'
import Achivements from '../../user/achivements/Achivements'
import { FaUser } from 'react-icons/fa';
import {   useLocation,useNavigate } from 'react-router-dom';
import Footercomponents from '../../employee/footercomponent';

 
import './teacher.css'

const Teacher = () => {

  const location = useLocation();
  const stdemail = new URLSearchParams(location.search).get('sdtemail');
  const stdgrede = new URLSearchParams(location.search).get('sdtgrade');

  const navigate = useNavigate();

  function togoprofile(){
    navigate(`/studentprofile?stdemail=${stdemail}`)
  }
 
 
  return (
    <div  >
       
      <Navbar/>
      <button className='prifile-icon bg-light' onClick={togoprofile}>
        <FaUser size={40} className="clickable-icon" />
      </button>
      <div className="home-main bg-light">
       

          <h1 className='school-name centered-text'>
          
            St/John's college Rakwana
          </h1>
          <h4 className='school-description'>
          [St/John's college  ] is more than just a place of learning; it's a vibrant community dedicated to nurturing young minds, fostering creativity, and shaping future leaders. Nestled in [Location], our school boasts a rich history of academic excellence, innovation, and inclusivity.

        At [St/John's college], we prioritize holistic education, providing students with a supportive and engaging environment where they can thrive academically, socially, and emotionally. Our dedicated team of educators is committed to inspiring a love for learning, encouraging critical thinking, and empowering students to reach their full potential   
          </h4>
      </div>

      <TeacherTimetable grade={stdgrede}  />
      <Event/>
       <Achivements/>
       <Footercomponents className=" "/>
    </div>
  )
}

export default Teacher