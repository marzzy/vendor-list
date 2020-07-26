import { put, takeLatest } from 'redux-saga/effects';
import { FilterChanged, UpdateData } from '../redux/actions';

export function* watchFilterChange() {
  yield takeLatest('CHANGE_FILTER', changeFilter);
}

function* changeFilter(action) {

  try {
    const url = new URL("https://snappfood.ir/mobile/v2/restaurant/vendors-list?filters="),
      params = { 'Sortings': [action.filterValue] };

    const data = yield fetch(url + JSON.stringify(params)).then(
      res => res.json()
    ).then(
      res => res.data.finalResult
    );

    yield put(UpdateData(data));
    yield put(FilterChanged(action.filterValue));

  } catch (e) {
    console.log('err: ', e);
  }
}
