import React, { Fragment, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import "./style.css";
import { getAccount } from "../../common/loginInfo";

const menus = [
  {
    id: 1,
    title: "비용안내",
    link: "/",
    loginFg: null,
  },
  {
    id: 2,
    title: "회사소개",
    link: "/about",
    loginFg: null,
  },
  {
    id: 3,
    title: "Q&A",
    link: "/contact",
    loginFg: null,
  },
  {
    id: 4,
    title: "로그인&가입",
    link: "/login",
    loginFg: false,
  },
  {
    id: 5,
    title: "마이페이지",
    link: "/mypage",
    loginFg: true,
  },
];

const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);
  const isLogin = getAccount()?.isLogin || false;

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => {
            if (item?.loginFg == null || item.loginFg == isLogin) {
              return (
                <ListItem
                  className={item.id === openId ? "active" : null}
                  key={mn}
                >
                  <Link className="active" to={item.link}>
                    {item.title}
                  </Link>
                </ListItem>
              );
            }
          })}
        </ul>
      </div>

      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button
          type="button"
          className="mobile-header-button navbar-toggler open-btn"
        >
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
