import React, {   useEffect,useState } from 'react';
import axios  from 'axios';
import './achivements.css'
const Home = () => {

  const [achivements,SetAchivements] =useState(['']);

      useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/achivement` );
                SetAchivements(result.data);
                
            } catch (err) {
                alert("Error fetching data");
            }
        };

        fetchData();
    });
  return (
    <div className='text-center'>
      <h2>Our Achivements</h2>
      {achivements.length === 0 ? (
        <p>No upcoming events</p>
      ) : (
        <ul className='product-container bg-light  d-flex w-100 ' style={{ textDecoration: 'none' }}>
        {achivements.map(achivement => (
          <li className='product-container-items  flex-sm-column pt-1 m-4  ' style={{ textDecoration: 'none' }} key={achivement.id}>
            <div className='product-detalist'>
            <img src={achivement.image_path} alt={achivement.name} className='product-image' />
            <h6>{achivement.achivement_description}</h6>
            
            </div>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Home;
