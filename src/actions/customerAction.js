import * as types from "../constant";
export function getCustomersAction(){
    return {
        type: types.GET_CUSTOMER_REQUEST
    }
}

export function addCustomerAction(customer){
    return {
        type:types.ADD_CUSTOMER_REQUEST,
        payload:customer
    }
}

export function deleteCustomerAction(id){
    return {
        type:types.DELETE_CUSTOMER_REQUEST,
        payload:id
    }
}

export function updateCustomerAction(id,customer){
    return {
        type:types.UPDATE_CUSTOMER_REQUEST,
        payload:{
            id:id,
            customer:customer
        }
    }
}