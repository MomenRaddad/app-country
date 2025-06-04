import './App.css';
import { useState, useEffect } from 'react';
import Country from './components/Country';
function App() {
const[CountryList, setCountryList] = useState([]);


useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountryList(data))
      .catch(error => console.error('Error fetching country data:', error));
  }, []);
 
const gridViewCountry = CountryList.map((country, index) => (
         <Country key={index} data={country} />
       ));

  return (
    
    
  <div className="container mt-4">
    <h1 className="text-center mb-4">Country World</h1>
    <div className="row">
      {gridViewCountry}
    </div>
  </div>
  );
}

export default App;
