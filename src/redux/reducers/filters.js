const initialState = {
  currentFilter: 'none',
  filtersList: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_FILTERS_SUCCEEDED':
      return {
        currentFilter: 'none',
        filtersList: action.data,
      };
    case 'CHANGED_FILTERS_SUCCEEDED':
      return {
        currentFilter: action.filterValue,
        filtersList: state.filtersList,
      };

    default:
      return state;
  }
}
