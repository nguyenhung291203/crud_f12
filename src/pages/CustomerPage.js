import CustomerFormAdd from "../components/CustomerFormAdd";
import CustomerList from "../components/CustomerList";

function CustomerPage(){
    return (
        <>
            <h2>Đây là trang customer page</h2>
            <CustomerFormAdd/>
            <CustomerList/>
        </>
    )
}

export default CustomerPage;