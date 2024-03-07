import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CustomerPage from "./pages/CustomerPage"


const RouterRoot = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<HomePage/>}/>
                    <Route path="/customers" element={<CustomerPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterRoot