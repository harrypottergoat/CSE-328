import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);

  // Function to handle menu click
  const handleMenuClick = (menuName) => {
    setMenu(menuName);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("teken");
    setToken("");
    navigate("/")
  }

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/" onClick={() => handleMenuClick('home')}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      {/* Navbar Menu */}
      <ul className="navbar-menu">
        {/* Home */}
        <Link
          to="/"
          onClick={() => handleMenuClick('home')}
          className={menu === 'home' ? 'active' : ''}
        >
          home
        </Link>
        
        {/* Menu */}
        <a
          href="#explore-menu"
          onClick={() => handleMenuClick('menu')}
          className={menu === 'menu' ? 'active' : ''}
        >
          menu
        </a>
        
        {/* Contact Us */}
        <a
          href="#footer"
          onClick={() => handleMenuClick('contact-us')}
          className={menu === 'contact-us' ? 'active' : ''}
        >
          contact us
        </a>
      </ul>

      {/* Right Side of Navbar */}
      <div className="navbar-right">
        {/* Search */}
        <img
          src={assets.search_icon}
          alt="Search"
          onClick={() => handleMenuClick('search')}
          className={menu === 'search' ? 'active-icon' : ''}
        />
        
        {/* Cart */}
        <div
          className="navbar-search-icon"
          onClick={() => handleMenuClick('cart')}
        >
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="Cart"
              className={menu === 'cart' ? 'active' : ''}
            />
          </Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        {!token?<button
          onClick={() => {
            setShowLogin(true);
            handleMenuClick('sign-in');
          }}
          className={menu === 'sign-in' ? '' : ''}
        >
          sign-in
        </button> : <div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>}
         {/* Sign-In */}
        
      </div>
    </div>
  );
};

export default Navbar;
