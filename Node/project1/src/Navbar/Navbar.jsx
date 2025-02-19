import './Navbar.css';
import React from 'react';
import logo from '../assets/Logo.png';

const Navbar = () => {
    return (
        <>
            {/* <nav id='top-navbar'>
               <img src={logo} id='navbar-image' />
               <input type='text' id='searchbox'></input>
               <button id='nav-button'>Search</button>
               <ul id='list'>
                <li id='l1'>Home</li>
                <li id='l1'>Products</li>
                <li id='l1'>Contact</li>
                <li id='l1'>Offers</li>
                <li id='l1'>About</li>
               </ul>
        </nav> */}
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} id='navbar-logo'></img>E-commerce</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id='navcontents'>
                            <li class="nav-item">
                                <a class="nav-link active contents" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item contents">
                                <a class="nav-link " aria-current="page" href="#">Updates</a>
                            </li>
                            <li class="nav-item dropdown contents">
                                <a class="nav-link dropdown-toggle" id='dropdown' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"></a>Kids Assoceries</li>
                                    <li><a class="dropdown-item" href="#">New Collections</a></li>
                                    <li><a class="dropdown-item" href="#">Electronics</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex" role="login">
                            <button class="btn navloginbtn" type="submit">Login/SignUp</button>
                        </form>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2 navsearch" type="search" placeholder="Search items" aria-label="Search"></input>
                            <button class="btn btn-outline-success navsearchbtn" type="submit">Search</button>
                        </form>
                    </div>
                </div>

            </nav>

            {/* <footer class="footercontainer">
                <div class="footercontents">
                    
                </div>
            </footer> */}
          

            {/* <footer class="text-center text-lg-start bg-body-tertiary text-muted footercontents">
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>E-commerce
                                </h6>
                                <p>
                                    E-commerce business is a company that generates revenue from selling products or services online,
                                    or uses the internet to pursue sales leads.
                                </p>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 fotcenterconts">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Textiles</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Toys</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Electronics</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Furnitures</a>
                                </p>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 fotcenterconts">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Help</a>
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 fotcenterconts">
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3"></i> New Dheli, NY 10012, IND</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    demo-e-commerce@example.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> +91 9566732222</p>
                                <p><i class="fas fa-print me-3"></i> +91 9944645555</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer> */}
        </>
    )
}

export default Navbar
