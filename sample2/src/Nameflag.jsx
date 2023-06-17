import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NameFlag = () => {
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
      {data.map((item) => (
      <div key={item.cca2}>
          {item.name.common}
          <br/>
        <img src = {item.flags.svg} style={{width: '100px'}}/>
        </div>
    
      ))}

    </>
  );
};

export default NameFlag;
