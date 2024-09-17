import { useState } from "react";
import  './App.css';

import nigeria from './images/nigeria.png';
import vietnam from './images/vietnam.png';
import egypt from './images/egypt.png';
import france from './images/france.png';
import india from './images/india.png';
import london from './images/london.png';
import netherlands from './images/netherlands.png';
import southafrica from './images/southafrica.png';
import southkorea from './images/southkorea.png';
import usa from './images/usa.png';


 
const App = () => {

  const details = [
    {
      img: nigeria,
      name: 'Nigeria',
      capital: 'Abuja',
      language: 'multilingual',
      population: '218.5 million',
      currency: 'Naira',
      id: '1',
    },
  
    {
      img: vietnam,
      name: 'Vietnam',
      capital: 'Hanoi',
      language: 'Vietnamese',
      population: '98.19 million',
      currency: 'Vietnamese dong',
      id: '2',
    },


    {
      img: egypt,
      name: 'Egypt',
      capital: 'Cairo',
      language: 'Arabic',
      population: '111 million ',
      currency: 'Egyptian Pound',
      id: '2',
    },

    {
      img: france,
      name: 'France',
      capital: 'Paris',
      language: 'french',
      population: '67.97 million ',
      currency: 'the euro',
      id: '2',
    },


    {
      img: india,
      name: 'India',
      capital: 'New Delhi',
      language: 'Hindi',
      population: '1.417 billion',
      currency: 'rupee',
      id: '2',
    },


    {
      img: london,
      name: 'England',
      capital: 'London',
      language: 'English',
      population: '55.98 million',
      currency: 'pounds',
      id: '2',
    },



    {
      img: netherlands,
      name: 'Netherlands',
      capital: 'Amsterdam',
      language: 'Dutch',
      population: '17.7 million ',
      currency: 'euro',
      id: '2',
    },




    {
      img: southafrica,
      name: 'South Africa',
      capital: 'Cape Town, Pretoria, Bloemfontein',
      language: 'multilingual',
      population: '59.89 million',
      currency: 'Rand',
      id: '2',
    },


    {
      img: southkorea,
      name: 'South Korea',
      capital: 'Seoul',
      language: 'Korean',
      population: '51.63 million',
      currency: ' Won',
      id: '2',
    },


    {
      img: usa,
      name: 'USA',
      capital: 'Washington, D.C.',
      language: 'English',
      population: '333.3 million',
      currency: ' Dollars',
      id: '2',
    },
  
  
    
  
  ]

 

const [currentIndex, setCurrentIndex] =  useState(0);


const increment = () => {
  setCurrentIndex((currentIndex + 1) % details.length)
}


const currentDetail = details[currentIndex];
  
const {img, name, capital, language, population, currency} = currentDetail;
console.log(currentDetail);


  return(
    <div>

      <div className="parent">
      <div className="country-card-container">

  <div className="country-img-container">
  <img className="country-img" src={img} />
  <h1>{name}</h1>
   </div>

    <div className="text-container">
  <h3>Capital: {capital}</h3>
  <h3>Language: {language}</h3>
  <h3>Population: {population}</h3>
  <h3>Currency: {currency}</h3>

   </div>
</div>


<div className="generate-btn-container">
   <button className="generate-btn" onClick={increment}>Generate Country</button>
  </div>

    
    </div>    
   
    </div>
  )
}




export default App