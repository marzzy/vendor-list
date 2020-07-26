import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeFilter } from '../../redux/actions';

function Filters() {
  const { currentFilter, filtersList } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  function handleClick(value) {
    dispatch(ChangeFilter(value));
  }

  if (filtersList && filtersList.length){
    return (
      <ul>
        {filtersList.map((filter, index) => (
          <li
            key={`${filter.value}-${index}`}
            className={currentFilter === filter.value ? 'active' : ''}
            onClick={handleClick.bind(null, filter.value)}
          >
            {filter.title}
          </li>
        ))}
      </ul>
    );
  }
  return (<p>loading...</p>)
}

export default Filters;
