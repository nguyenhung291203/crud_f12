import * as types from "../constant";
const initialState = {
    listCustomer:[],
    isFetching:false,
    dataFetching:false,
    error:false,
    errorMessage:null
}

const customerReducer = (state=initialState,action)=>{
    switch(action.type){
        case types.GET_CUSTOMER_REQUEST:
        case types.ADD_CUSTOMER_REQUEST:
        case types.DELETE_CUSTOMER_REQUEST:
        case types.UPDATE_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching:true,
            }

        case types.GET_CUSTOMER_SUCCESS:
            return {
                ...state,
                isFetching:false,
                dataFetching:true,
                error:false,
                errorMessage:null,
                listCustomer:action.payload
            }

        case types.ADD_CUSTOMER_SUCCESS:
        case types.DELETE_CUSTOMER_SUCCESS:
        case types.UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                isFetching:false,
                dataFetching:true,
                error:false,
                errorMessage:null,
            }

        
        
        
        case types.GET_CUSTOMER_FAILURE:
        case types.ADD_CUSTOMER_FAILURE:
        case types.DELETE_CUSTOMER_FAILURE:
        case types.UPDATE_CUSTOMER_FAILURE:
            return {
                ...state,
                isFetching:false,
                dataFetching:false,
                error:true,
                errorMessage:action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default customerReducer;