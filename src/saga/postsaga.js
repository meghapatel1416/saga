import { takeLeading } from "redux-saga/effects";
import { addPost } from "../fetchGetUsers";


export function* addPostSaga()
{
    try {
   
            const data = yield call(addPost, action.payload);
            console.log(data);
            yield put(addPostSuccess({ ...action.payload, ...data }));
          } catch (error) {
            yield put(addPostFailed(error.message));
          }
}

export function* addPostWatcher() {
      yield takeLeading("ADD_POST", addPostSaga);
     }