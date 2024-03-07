import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCustomerAction } from "../actions/customerAction";
function CustomerEdit(props) {
    const{customer} = props;
    const [isModal, setIsModal] = useState(false);
    const dispatch = useDispatch();
    function openModal(){
        setIsModal(true);
    }
    function closeModal(){
        setIsModal(false);
    }
    function handleSubmit(e){
        e.preventDefault();
        const customerPayload = {
            name:e.target.name.value,
            address:e.target.address.value,
            phone:e.target.phone.value
        }

        dispatch(updateCustomerAction(customer.id,customerPayload));
        
        closeModal();
    }
    return (
        <>
            {
                isModal && (
                    <>
                        <div className="modal">
                            <form onSubmit={handleSubmit}>
                                <label>Name</label>
                                <input name="name" defaultValue={customer.name} placeholder="name..." /><br />
                                <label>Address</label>
                                <input name="address" defaultValue={customer.address} placeholder="address..." /><br />
                                <label>Phone</label>
                                <input name="phone" defaultValue={customer.phone} placeholder="phone..." /><br />
                                <button >SAVE</button>
                                <button onClick={closeModal}>CLOSE</button>
                            </form>
                        </div>
                    </>
                )
            }

            <button onClick={openModal}>EDIT</button>
        </>
    )
}

export default CustomerEdit;