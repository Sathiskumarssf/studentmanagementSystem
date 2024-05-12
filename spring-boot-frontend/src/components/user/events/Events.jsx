import React, {   useEffect,useState } from 'react';
import axios  from 'axios';
import './event.css'
const Home = () => {

  const [events,SetEvent] =useState(['']);

      useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/api/v1/events` );
                SetEvent(result.data);
                
            } catch (err) {
                alert("Error fetching data");
            }
        };

        fetchData();
    });
  return (
    <div className='text-center'>
      <h2>Upcoming Events</h2>
      {events.length === 0 ? (
        <p>No upcoming events</p>
      ) : (
        <ul className='product-container bg-light  d-flex w-100 ' style={{ textDecoration: 'none' }}>
        {events.map(event => (
          <li className='product-container-items  flex-sm-column pt-1 m-4  ' style={{ textDecoration: 'none' }} key={event.id}>
            <div className='product-detalist'>
            <img src={event.image_path} alt={event.name} className='product-image' />
            <h3>{event.event_name}</h3>
            <p>{event.event_description} </p>
            <h5>{event.date } <span>{event.time}</span></h5>
             
            </div>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default Home;
