import { Fragment } from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' },
]

const Products = () => {
    return (
        <Fragment>
        <h1>Products</h1>
        <ul>
            {PRODUCTS.map(product => <li><Link key={product.id} to={product.id}>{product.title}</Link></li>)}
        </ul>
        </Fragment>
    );
};

export default Products;