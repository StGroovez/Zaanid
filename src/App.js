import './App.css';
import React from 'react';
import houseposter from './images/house-example.jpg'
import { NavBar } from './NavBar.js';
import { HouseProfile } from './HouseProfile.js';
import { UserList } from './UserList.js';

const defaultHouses = [
  { name: 'example house', housePoster: houseposter }, 
  { name: 'example house', housePoster: houseposter }, 
  { name: 'example house', housePoster: houseposter }, 
  { name: 'example house', housePoster: houseposter }, 

]

function App() {
  return (
    <div className="main-container">
      <div className='navbar-container'>
        <NavBar />
      </div>
      <UserList >
        {defaultHouses.map(house =>(
          <HouseProfile
          key= {house.name}
          houseImg={house.housePoster}
          />
         ))}
      </UserList>
    </div>
        
  );
}

export default App;
