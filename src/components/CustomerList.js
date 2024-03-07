import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomersAction } from "../actions/customerAction";
import CustomerDelete from "./CustomerDelete";
import CustomerEdit from "./CustomerEdit";
function CustomerList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCustomersAction());
    }, [])
    const customers = useSelector(state => state.customers);
    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>STT</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>PHONE</th>
                    <th>ACTION</th>
                </tr>
                {
                    !customers.error && (
                        customers.listCustomer.map((customer, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.address}</td>
                                <td>{customer.phone}</td>
                                <td><CustomerEdit customer={customer}/></td>
                                <td><CustomerDelete idCustomer={customer.id}/></td>
                            </tr>
                        ))
                    )
                }
                </tbody>
               

            </table>
        </>
    )
}

export default CustomerList;