import React from 'react'
import './Header.css'; // To import css
function Header() {
    return (
        <div className="header">
                {/* image */}
                <img className="headerImage" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt= "Amzon logo"/>
                {/* input box */}
                <div className = "headerSearch">
                    <input  className = "headerSearchInput" type="text" placeholder="Search an Item"/>
                    {/* Add SEARCH BUTTON */}
                </div>
                {/* sign in */}
                <div className="headerLogin">
                    <div className="headerOption">
                        <span>Sign In</span>
                    </div>
                </div>
                {/* Return */}
                <div className="headerReturn">
                    <div className="headerOption">
                        <span >Return</span>
                        <span>Orders</span>
                    </div>
                </div>
                {/* cart */}
                <div className="headerCheckout">
                    {/* Logo of Cart */}
                    <span>0</span>
                </div>
        </div>
    )
}

export default Header
