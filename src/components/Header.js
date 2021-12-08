import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Cart} from '../Context'

const Header = () => {
    const {cart} = useContext(Cart)
    return (
        <nav
            className="navbar navbar-light d-flex justify-content-between mb-4 px-4"
            style={{
            backgroundColor: '#e3f2fd'
        }}>
            <Link to="/" className="navbar-brand">React Context</Link>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/cart" className="nav-link d-flex">
                        Cart
                        <span className="badge bg-danger d-flex ms-2">{cart.length}</span>
                    </Link>
                </li>
            </ul>

        </nav>
    )
}

export default Header;
