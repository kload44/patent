import "react-toastify/dist/ReactToastify.min.css";
import {
  OPEN_PATENT_MODAL,
  CLOSE_PATENT_MODAL,
  OPEN_PATENT_FINISH_MODAL,
  CLOSE_PATENT_FINISH_MODAL,
  OPEN_PAYMENT_MODAL,
  CLOSE_PAYMENT_MODAL,
  OPEN_ALERT_MODAL,
  CLOSE_ALERT_MODAL,
} from "./type";
import { getContact } from "../../../api/axios/common";
import { toast } from "react-toastify";

export const openPatentModal = (modal) => ({
  type: OPEN_PATENT_MODAL,
  modal,
});

export const closePatentModal = (modal) => ({
  type: CLOSE_PATENT_MODAL,
  modal,
});

export const openPatentFinishModal = (modal) => ({
  type: OPEN_PATENT_FINISH_MODAL,
  modal,
});

export const closePatentFinishModal = (modal) => ({
  type: CLOSE_PATENT_FINISH_MODAL,
  modal,
});

export const openPaymentModal = (modal) => ({
  type: OPEN_PAYMENT_MODAL,
  modal,
});

export const closePaymentModal = (modal) => ({
  type: CLOSE_PAYMENT_MODAL,
  modal,
});

export const openAlertModal = (modal) => ({
  type: OPEN_ALERT_MODAL,
  modal,
});

export const closeAlertModal = (modal) => ({
  type: CLOSE_ALERT_MODAL,
  modal,
});

export const sendMail = (contactInfo) => async (dispatch) => {
  try {
    const response = await getContact(contactInfo);
    if (response.status == "success") {
      toast.success("문의 메일 전송에 성공하였습니다.");
    } else {
      toast.success("문의 메일 전송에 실패하였습니다.");
    }
  } catch (error) {
    toast.success("문의 메일 전송에 실패하였습니다.");
  }
};
