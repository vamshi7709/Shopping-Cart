import React from "react";

export default function Header(props) {
    const { countCartItems } = props;
    return (
        <header className="row black center" style={{'backgroundColor': '#e0e0e0'}}>
            <div>
                <a href="#/">
                    <h1>Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="#/cart">
                    Cart{' '}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ) : (
                        ''
                    )}
                </a>{' '}
            </div>
        </header>
    );
}