import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { sendMail } from "./../../store/actions/modal/action";

const ContactFrom = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // dispatch(sendMail(data));
  };

  return (
    <form
      method="post"
      className="contact-validation-active"
      id="contact-form-main"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-field">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="이름*"
          {...register("name", {
            required: "이름은 필수 입력 항목입니다.",
          })}
        />
        <p className="warning">{errors.name ? errors.name.message : " "}</p>
      </div>
      <div className="form-field">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="이메일*"
          {...register("email", {
            required: "이메일은 필수 입력 항목입니다.",
          })}
        />
        <p className="warning">{errors.email ? errors.email.message : " "}</p>
      </div>
      <div className="form-field">
        <input
          type="phone"
          name="phone"
          className="form-control"
          placeholder="전화번호*"
          {...register("phone", {
            required: "전화번호는 필수 입력 항목입니다.",
          })}
        />
        <p className="warning">{errors.phone ? errors.phone.message : " "}</p>
      </div>
      <div className="form-field">
        <select
          type="text"
          name="subject"
          className="form-control"
          {...register("subject", {
            required: "주제를 선택해주세요.", // 필수 입력 항목임을 설정
          })}
        >
          <option value={""}>주제선택*</option>
          <option>특허</option>
          <option>디자인</option>
        </select>
        <p className="warning">
          {errors.subject ? errors.subject.message : " "}
        </p>
      </div>
      <div className="form-field fullwidth">
        <textarea
          type="text"
          name="notes"
          className="form-control"
          placeholder="내용을 입력해 주세요.*"
          {...register("notes", {
            required: "내용은 필수 입력 항목입니다.",
          })}
        ></textarea>
        <p className="warning">{errors.notes ? errors.notes.message : " "}</p>
      </div>
      <div className="submit-area">
        <button type="submit" className="theme-btn-s3">
          문의하기
        </button>
      </div>
    </form>
  );
};

export default ContactFrom;
