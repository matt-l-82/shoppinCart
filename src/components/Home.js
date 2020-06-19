import React from 'react';
import './Home.css';

const Home = (props) => {
    return(
        <div className="home">
            <h1>Welcome to my shop</h1>
            <h2>Feature Products</h2>
            <div className="products">
                <div className="product">
                    <h3>Playstation 5</h3>
                    <p>Price £499</p>
                    <button onClick = {props.addtocart}>Add to Cart</button>
                    <button onClick = {props.removecart}>Remove</button>
                </div>
                <div className="product">
                    <h3>Playstation 4</h3>
                    <p>Price £399</p>
                    <button onClick = {props.addtocart}>Add to Cart</button>
                    <button onClick = {props.removecart}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Home;