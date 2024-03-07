import { useDispatch } from "react-redux";

import { deleteCustomerAction } from './../actions/customerAction';
function CustomerDelete(props){
    const{idCustomer} = props;
    const dispatch = useDispatch();
    function handleDelete(){
        dispatch(deleteCustomerAction(idCustomer));
    }

    return (
        <>
            <button onClick={handleDelete}>DELETE</button>
        </>
    )
}
export default CustomerDelete;