import combineReducers from "../reducers/index";
import rootSaga from "../sagas";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: combineReducers,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(sagaMiddleware, logger)
});
sagaMiddleware.run(rootSaga)

export default store;