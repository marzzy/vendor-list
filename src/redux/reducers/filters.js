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

    default:
      return state;
  }
}
