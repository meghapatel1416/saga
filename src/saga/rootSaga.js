import { all } from "redux-saga/effects";
import { watchDecrementAsync, watchIncrementAsync } from "./counterSaga";
import watcherUserSaga from "./usersaga";



export default function* rootSaga() {
  //  yield all([getProductsWatcher(), incWatcher(),watcherUserSaga(), getPostsWatcher(),addPostWatcher()]);

  yield all([watchDecrementAsync(), watchIncrementAsync(),watcherUserSaga()]);
  }