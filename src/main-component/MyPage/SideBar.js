import React from "react";
import { Link } from "react-router-dom";
import { getAccount, removeAccount } from "../../common/loginInfo";

const Sidebar = (props) => {
  const onClickMyInfoChange = () => {};

  const onClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const onClickLogout = () => {
    removeAccount();
    window.location.href = "/";
  };

  return (
    <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
      <div className="blog-sidebar">
        <div className="widget about-widget-2">
          {/* <div className="img-holder">
                        <img src={about} alt="" />
                    </div> */}
          <h4>{getAccount().humanName}</h4>
          <p>{getAccount().accountKey}</p>
          <div className="aw-shape"></div>
        </div>
        <div className="widget category-widget-2 d-none d-sm-block">
          <h3>마이페이지</h3>
          <ul style={{ cursor: "pointer" }}>
            {/* <li onClick={onClickMyInfoChange}>내정보 변경</li> */}
            <li onClick={onClickLogout}>로그아웃</li>
          </ul>
        </div>

        <div className="contact-widget-2 widget d-none d-sm-block mb-5">
          <h2>
            How We Can <br /> Help You!
          </h2>
          <p></p>
          <Link onClick={onClickHandler} to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
