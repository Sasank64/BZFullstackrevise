import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Name = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <ol>
      {data.map((item) => (
      <li key={item.cca2}>
          {item.name.common}
        </li>
    
      ))}
</ol>
    </>
  );
};

export default Name;
