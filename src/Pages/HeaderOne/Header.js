import React from 'react'
import './Header.css'; // To import css
function Header() {
    return (
        <div className="header">
            <nav>
                {/* image */}
                <img className="headerImage" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt= "Amzon logo"/>
                {/* Location */}
                <span>Deliver in </span>
                {/* input box */}
                <input type="text"/>
                {/* sign in */}
                <span>Sign in</span>
                {/* Return */}
                <span> Return</span>
                {/* cart */}
                <span>Cart</span>
            </nav>
        </div>
    )
}

export default Header
