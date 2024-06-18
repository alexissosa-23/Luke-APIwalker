import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Result from './components/Result';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <SearchForm />
      <Routes>
        <Route path="/:resource/:id" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
