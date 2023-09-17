import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products');
    }

    return (
        <Fragment>
            <h1>My HomePage</h1>
            <p>
                Go To <Link to="products">List of Products</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </Fragment>
    )
}

export default HomePage;