import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from "../../images/logo.png";
import HeaderTopbar from "../HeaderTopbar";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const [cartActive, setcartState] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;

  return (
    <header id="header" className={`site-header header-style-1 ${props.hclass}`}>
      <HeaderTopbar container={"container"} />
      <nav className="navigation navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="navbar-header">
            <MobileMenu />
            <Link onClick={ClickHandler} className="navbar-brand" to="/home">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse navigation-holder">
            <ul className="nav navbar-nav mb-2 mb-lg-0">
              <li>
                <Link onClick={ClickHandler} to="/contact">
                  비용안내
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/about">
                  회사소개
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/contact">
                  Q&A
                </Link>
              </li>
              <li>
                <Link onClick={ClickHandler} to="/contact">
                  로그인
                </Link>
              </li>
            </ul>
          </div>

          <div className="cart-search-contact">
            <div className="header-search-form-wrapper">
              <button className="header-right-button">특허신청</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
