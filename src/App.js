import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filters from './components/filters/filters';
import Cards from './components/cards/cards';
import './App.scss';

function App() {
  const reduxDispatch = useDispatch();

  useEffect(() => {
    reduxDispatch({ type: 'FETCH_INITIAL_DATA' });
  }, [reduxDispatch]);

  return (
    <div className="App">
      <div>
        <Filters />
      </div>
      <div className="cards">
        <Cards />
      </div>
    </div>
  );
}

export default App;
