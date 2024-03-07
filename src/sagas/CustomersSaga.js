import * as types from '../constant';
import { addCustomerApi, deleteCustomerApi, getListCustomerApi, updateCustomerApi } from '../fetchAPI/customerFetchApi';
import { put, takeEvery } from 'redux-saga/effects';

function* getListCustomerSaga(){
    try {
        const res = yield getListCustomerApi();
        const data = yield res;
        yield put({
            type:types.GET_CUSTOMER_SUCCESS,
            payload:data
        })
    } catch (error) {
        yield put({
            type:types.GET_CUSTOMER_FAILURE,
            payload:{
                errorMessage:error.message
            }
        })
    }
}

function* addCustomerSaga({payload}){
    try {
        yield addCustomerApi(payload);
        yield getListCustomerSaga();
        yield put({
            type:types.ADD_CUSTOMER_SUCCESS
        })
    } catch (error) {
        yield put({
            type:types.ADD_CUSTOMER_FAILURE,
            payload:{
                errorMessage:error.message
            }
        })
    }
}

function* deleteCustomerSaga({payload}){
    try {
       yield deleteCustomerApi(payload);
       yield getListCustomerSaga();
       yield put({
           type:types.DELETE_CUSTOMER_SUCCESS,
       })
    } catch (error) {
        yield put({
            type:types.DELETE_CUSTOMER_FAILURE,
            payload:{
                errorMessage:error.message
            }
        })
    }
}

function* updateCustomerSaga({payload}){
    try {
       yield updateCustomerApi(payload.id,payload.customer);
       yield getListCustomerSaga();
       yield put({
           type:types.UPDATE_CUSTOMER_SUCCESS,
       })
    } catch (error) {
        yield put({
            type:types.UPDATE_CUSTOMER_FAILURE,
            payload:{
                errorMessage:error.message
            }
        })
    }
}

export const CustomerSaga = [
    takeEvery(types.GET_CUSTOMER_REQUEST,getListCustomerSaga),
    takeEvery(types.ADD_CUSTOMER_REQUEST,addCustomerSaga),
    takeEvery(types.DELETE_CUSTOMER_REQUEST,deleteCustomerSaga),
    takeEvery(types.UPDATE_CUSTOMER_REQUEST,updateCustomerSaga)
]