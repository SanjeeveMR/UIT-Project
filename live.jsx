import React, { useEffect, useState } from 'react';
import axios from 'axios';

const liveInfo = () => {
  const [game, setgame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = 'a6a86d89476a4d4895362036252603'; 
    const CITY = 'Cricket'; 
    const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`;

    axios
      .get(API_URL)
      .then(response => {
        setgame(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [])
  if (loading) return <p>Loading live data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Score{runs?.wicket?.teamname}, {runs?.country?.country}</h2>
      <p>Temperature: {weather?.current?.temp_c}°C</p>
      <p>Condition: {weather?.current?.condition?.text}</p>
      <img src={weather?.current?.condition?.icon} alt="Weather Icon" />
    </div>
  );
};

export default liveInfo;