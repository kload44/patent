import React, { useEffect } from "react";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import "./style.scss";
import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { getLoginSuccess } from "../../store/actions/account/action";
import { getAccount } from "../../common/loginInfo";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accountState = useSelector((state) => state.account);
  const { data, loading, error } = accountState || {};

  useEffect(() => {
    //로그인시 홈으로 이동합니다.
    if (getAccount()?.isLogin && data?.isLogin) {
      navigate("/home");
    }
  }, [loading, data]);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    dispatch(getLoginSuccess(formData));
  };

  const onGoogleLoginSuccess = (res) => {
    const userData = jwtDecode(res.credential);
    dispatch(
      getLoginSuccess({
        email: userData.email,
        password: userData.sub,
        humanName: userData.name,
        joinType: "google",
      })
    );
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (res) => onGoogleLoginSuccess(res),
    onFailure: (error) => console.log(error),
  });

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>로그인</h2>
        <p>Sign in to your account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "이메일은 필수 입력 항목입니다.",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "유효한 이메일 주소를 입력하세요.",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    className="inputOutline"
                    fullWidth
                    placeholder="이메일"
                    variant="outlined"
                    label="이메일"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...field}
                  />
                )}
              />
              {errors?.email && <span>{errors.email.message}</span>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "비밀번호는 필수 입력 항목입니다.",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&+-^])[A-Za-z\d@$!%*#?&+-^]{8,}$/,
                    message:
                      "영문, 숫자, 특수문자 조합 및 최소 8자 이상이어야 합니다.",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    className="inputOutline"
                    fullWidth
                    placeholder="비밀번호"
                    variant="outlined"
                    name="password"
                    type="password"
                    label="비밀번호"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...field}
                  />
                )}
              />
              {errors?.password && <span>{errors.password.message}</span>}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formAction">
                <FormControlLabel
                  label="로그인 상태 유지"
                  control={<Checkbox {...register("remember")} />}
                />
                {/* <Link to="/forgot-password">비밀번호 찾기</Link> */}
              </Grid>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme" type="submit">
                  로그인
                </Button>
              </Grid>
              <Grid className="loginWithSocial">
                {/* <button
                  onClick={() => googleLogin()}
                  style={{
                    backgroundColor: "#4285F4",
                    color: "#fff",
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  <i className="fa fa-google"></i>
                  <span style={{ marginLeft: "10px", fontWeight: "bold" }}>Google 계정으로 로그인</span>
                </button> */}
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    onGoogleLoginSuccess(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  width={100}
                />
              </Grid>
              <p className="noteHelp">
                계정이 없나요? <Link to="/register">회원가입</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
