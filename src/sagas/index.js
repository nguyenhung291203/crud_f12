import { all } from "redux-saga/effects"
import { CustomerSaga } from "./CustomersSaga"
function* rootSaga() {
    yield all([
        ...CustomerSaga
    ])
}
export default rootSaga