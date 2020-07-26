import { put, takeLatest, all } from 'redux-saga/effects';
import { FetchInitialData } from '../redux/actions';

function* watchFetchInitial() {
  yield takeLatest('FETCH_INITIAL_DATA', initFech);
}

function* initFech() {
  try {
    const data = yield fetch(
      'https://snappfood.ir/mobile/v2/restaurant/vendors-list'
    ).then(
      res => res.json()
    ).then(
      res => res.data.finalResult
    );

    yield put(FetchInitialData(data));
  } catch (e) {
    console.log('err: ', e);
  }
}

export default function* rootSaga() {
  yield all([
    watchFetchInitial()
  ])
}
