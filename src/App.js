import './App.css';
import { useState, useEffect } from 'react';
import Country from './components/Country';

function App() {
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,capital,flags')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCountryList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('❌ Error fetching country data:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  let content;

  if (loading) {
    content = <p className="text-center text-muted">Loading...</p>;
  } else if (error) {
    content = <p className="text-center text-danger">Error fetching country data</p>;
  } else {
    content = countryList.map((country, index) => (
      <Country key={index} data={country} />
    ));
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Country World</h1>
      <div className="row">
        {content}
      </div>
    </div>
  );
}

export default App;
