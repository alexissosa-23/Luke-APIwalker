import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import obiWan from '../images/obiWan.png';
import './Result.css';

const Result = () => {
  const { resource, id } = useParams();
  const [data, setData] = useState(null);
  const [homeworld, setHomeworld] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/${resource}/${id}`)
      .then(response => {
        setData(response.data);
        setError(false);

        if (resource === 'people') {
          axios.get(response.data.homeworld)
            .then(hwResponse => setHomeworld(hwResponse.data.name))
            .catch(() => setHomeworld('Unknown'));
        }
      })
      .catch(() => {
        setError(true);
        setData(null);
      });
  }, [resource, id]);

  if (error) {
    return (
      <div className="error">
        <h1>These aren't the droids you're looking for</h1>
        <img src={obiWan} alt="Obi-Wan Kenobi" />
      </div>
    );
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="result">
      <h1>{data.name || data.title}</h1>
      {resource === 'people' && <p>Homeworld: {homeworld}</p>}
      <p>Height: {data.height}</p>
      <p>Hair Color: {data.hair_color}</p>
      <p>Birth Year: {data.birth_year}</p>
    </div>
  );
};

export default Result;
