import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchForm.css';

const SearchForm = () => {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${resource}/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label>
        Search for:
        <select value={resource} onChange={(e) => setResource(e.target.value)}>
          <option value="people">People</option>
          <option value="films">Films</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
        </select>
      </label>
      <label>
        Id:
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
