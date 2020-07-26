export const FetchInitialData = (data) => ({
  type: 'FETCH_INITDATA_SUCCEEDED',
  data
});

export const FetchFilters = (data) => ({
  type: 'FETCH_FILTERS_SUCCEEDED',
  data
});

export const ChangeFilter = (filterValue) => ({
  type: 'CHANGE_FILTER',
  filterValue
});

export const FilterChanged = (filterValue) => ({
  type: 'CHANGED_FILTERS_SUCCEEDED',
  filterValue
});

export const UpdateData = (data) => ({
  type: 'UPDATE_DATA',
  data
})