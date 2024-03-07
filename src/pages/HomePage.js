import {Link} from "react-router-dom";
function HomePage(){
    return (
        <>
            <ul>
                <li>
                    <Link to="/customers">Sang trang customer page</Link>    
                </li>
            
            </ul>
            <h1>Đây là trang Home Page</h1>
        </>
    )
}

export default HomePage;