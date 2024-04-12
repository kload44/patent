import React from "react";
import { Link } from "react-router-dom";

const Payment = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="payinfo-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-3 col-md-6 col-12">
            <div className="payinfo-grid">
              <i className="fi flaticon-mace"></i>
              <h3>Free</h3>
              <p>
                출원번호 확인 <br /> 정규출원 마감일 관리 <br /> 무료 상담정보
                안내
              </p>
              <Link
                onClick={ClickHandler}
                to="/contact"
                className="theme-btn-s2"
              >
                Contact with us
              </Link>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-12">
            <div className="payinfo-grid">
              <i className="fi flaticon-standard"></i>
              <h3>Basic</h3>
              <p>
                Free 서비스 + <br /> 변리사 직접 상담 1회 <br /> 임시출원 1건
              </p>
              <Link
                onClick={ClickHandler}
                to="/contact"
                className="theme-btn-s2"
              >
                Contact with us
              </Link>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-12">
            <div className="payinfo-grid">
              <i className="fi flaticon-balance"></i>
              <h3>STANDARD</h3>
              <p>
                Basic 서비스 + <br /> 기술문서 사전 검토 <br /> 맞춤형 IP
                지원사업 안내
              </p>
              <Link
                onClick={ClickHandler}
                to="/contact"
                className="theme-btn-s2"
              >
                Contact with us
              </Link>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-12">
            <div className="payinfo-grid">
              <i className="fi flaticon-mace"></i>
              <h3>PREMIUM</h3>
              <p>
                STANDARD 서비스 + <br /> 임시출원 5건 <br /> 정규출원 1건 <br />{" "}
                우선심사 신청 <br /> (정규 출원 이후 6개월 이내 등록)
              </p>
              <Link
                onClick={ClickHandler}
                to="/contact"
                className="theme-btn-s2"
              >
                Contact with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
