import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from "../../images/logo.png";
import HeaderTopbar from "../HeaderTopbar";
import { getAccount } from "../../common/loginInfo";

const Header = (props) => {
  const state = {
    isSearchShow: false,
    isCartShow: false,
    isLogin: getAccount()?.isLogin,
  };

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
    <header
      id="header"
      className={`site-header header-style-1 ${props.hclass}`}
    >
      <HeaderTopbar container={"container"} />
      <nav className="navigation navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="navbar-header">
            <div>
              <MobileMenu />
            </div>
            <div className="logo-box">
              <Link onClick={ClickHandler} className="navbar-brand" to="/home">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="showmenu-patent">
              <Link
                onClick={ClickHandler}
                className="mobile-header-link"
                to="/apply"
              >
                신청
              </Link>
            </div>
          </div>
          <div
            id="navbar"
            className="collapse navbar-collapse navigation-holder"
          >
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
                {state.isLogin ? (
                  <Link onClick={ClickHandler} to="/mypage">
                    마이페이지
                  </Link>
                ) : (
                  <Link onClick={ClickHandler} to="/login">
                    로그인&가입
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className="cart-search-contact">
            <div className="header-search-form-wrapper">
              <Link
                onClick={ClickHandler}
                className="header-right-button"
                to="/apply"
              >
                특허 신청
              </Link>
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
