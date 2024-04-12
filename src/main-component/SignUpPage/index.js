import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Button, Grid, TextField } from "@mui/material";
import { getJoinSuccess } from "../../store/actions/account/action";

const SignUpPage = () => {
  const navigate = useNavigate();
  const accountState = useSelector((state) => state.account);
  const { data, loading, error } = accountState || {};

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    //로그인시 홈으로 이동합니다.
    if (data?.isJoin && error == null) {
      navigate("/login");
    }
  }, [data]);

  const onSubmit = (data) => {
    dispatch(getJoinSuccess(data));
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>회원가입</h2>
        <p>Signup your account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: "이름은 필수 입력 항목입니다.",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="text"
                    name="name"
                    className="inputOutline"
                    placeholder="이름"
                    variant="outlined"
                    label="이름"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      maxLength: 20,
                    }}
                  />
                )}
              />
              {errors?.name && <span>{errors.name.message}</span>}
            </Grid>
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
                    type="text"
                    name="email"
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
                    {...field}
                    fullWidth
                    type="password"
                    name="password"
                    className="inputOutline"
                    placeholder="비밀번호"
                    variant="outlined"
                    label="비밀번호"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      maxLength: 30,
                    }}
                  />
                )}
              />
              {errors?.password && <span>{errors.password.message}</span>}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="cBtn cBtnLarge cBtnTheme"
                  type="submit"
                >
                  회원가입
                </Button>
              </Grid>
              {/* <Grid className="loginWithSocial">
                                <Button className="google">
                                    <i className="fa fa-google"></i>
                                </Button>
                            </Grid> */}
              <p className="noteHelp">
                이미 가입한 계정이 있나요?{" "}
                <Link to="/login">로그인하러 가기</Link>
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

export default SignUpPage;
