import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/unknown')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <ol>
      {data.map(item => (
        <li key={item.id} style={{ color: item.color }}>
          {item.name}
        </li>
    
      ))}
      </ol>
    </>
  );
};

export default ApiData;
