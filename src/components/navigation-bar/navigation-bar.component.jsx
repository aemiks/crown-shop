import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../cart-icon.styles.scss/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation-bar.styles.scss'

const NavigationBar = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)


     
    return (
    <Fragment>
        <div className="navigation-bar">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo" />
            </Link>  
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    Shop
                </Link>
                {currentUser ? (
                    <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                ) : ( 
                    <Link className="nav-link" to='/auth'>
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
    </Fragment>
    )
}

export default NavigationBar;