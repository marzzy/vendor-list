import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filters from './components/filters/filters';
import Cards from './components/cards/cards';
import './App.css';

function App() {
  const reduxDispatch = useDispatch();

  useEffect(() => {
    reduxDispatch({ type: 'FETCH_INITIAL_DATA' });
  }, [reduxDispatch]);

  return (
    <div className="App">
      <div className="Filters">
        <Filters />
      </div>
      <div className="Cards">
        <Cards />
      </div>
    </div>
  );
}

export default App;
