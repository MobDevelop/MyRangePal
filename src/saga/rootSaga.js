import { put, takeEvery,select,take,takeLatest, all, call } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
    console.log("hello saga!")
}

export default function* rootSaga() {
    yield all([
      helloSaga()
    ])
}