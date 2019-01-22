import { put, takeEvery,select,take,race, takeLatest, all, call } from 'redux-saga/effects'
import {saveScoreAPI} from '../api/ShootingScoreApi'
export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
    console.warn("hello saga!")
}

export function* watchSaveScore() {
    yield takeLatest("SAVING_SCORE", saveScoreFunction);
}

export function* saveScoreFunction() {
    try{
        const score = yield select()
        appData = score.appData
        yield saveScoreAPI(appData)
        yield put({type: "SAVING_SUCCESS"})
    }catch( error ){
        console.error(error)
        yield put({type: "SAVING_FAIL"})
    }
}

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchSaveScore()
    ])
}