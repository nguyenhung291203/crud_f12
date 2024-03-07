import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomerAction } from "../actions/customerAction";

function CustomerFormAdd() {
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
        const customer = {
            name:e.target.name.value,
            address:e.target.address.value,
            phone:e.target.phone.value
        }
        dispatch(addCustomerAction(customer));
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
                                <input name="name" placeholder="name..." /><br />
                                <label>Address</label>
                                <input name="address" placeholder="address..." /><br />
                                <label>Phone</label>
                                <input name="phone" placeholder="phone..." /><br />
                                <button >ADD</button>
                                <button onClick={closeModal}>CLOSE</button>
                            </form>
                        </div>
                    </>
                )
            }

            <button onClick={openModal}>Add customer</button>
        </>
    )
}

export default CustomerFormAdd;