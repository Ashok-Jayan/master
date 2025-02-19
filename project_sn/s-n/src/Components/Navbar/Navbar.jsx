import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useState, useNavigate } from 'react'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>Nira's Shopping Bay</p>
            </div>
            <ul className="nav-menu">
                {/* <li onClick={() => { setMenu("shop") }}><Link to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li> */}
                <li onMouseEnter={() => { setMenu("shop"); setShowDetails(true) }} onMouseLeave={() => {
                    setMenu("");
                    setShowDetails(false);
                }}>Shop{menu === "shop" ? <hr /> : <></>}
                {showDetails && (
                     <p onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
                        New Collection<br /> Offers<br />
                    </p>
                )}
                </li>


                <li onClick={() => { setMenu("mens") }}>Men{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}>Women{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}>Kids{menu === "kids" ? <hr /> : <></> && menu == "kids" ?  console.log("Label") : console.log("Not Label")}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login/Sign up</button>
                <img on src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar
