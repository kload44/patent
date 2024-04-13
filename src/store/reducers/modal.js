import {
  OPEN_PATENT_MODAL,
  CLOSE_PATENT_MODAL,
  OPEN_PATENT_FINISH_MODAL,
  CLOSE_PATENT_FINISH_MODAL,
  OPEN_PAYMENT_MODAL,
  CLOSE_PAYMENT_MODAL,
  OPEN_ALERT_MODAL,
  CLOSE_ALERT_MODAL,
} from "../actions/modal/type";

const init = {
  patent: {
    data: null,
    isOpen: false,
    loading: false,
    error: null,
  },
  patentFinish: {
    data: null,
    isOpen: false,
    loading: false,
    error: null,
  },
  payment: {
    data: null,
    isOpen: false,
    loading: false,
    error: null,
  },
  myinfo: {
    data: null,
    isOpen: false,
    loading: false,
    error: null,
  },
  alert: {
    data: null,
    isOpen: false,
    loading: false,
    error: null,
  },
};

export const modalReducer = (state = init, action) => {
  const res = action.modal;

  switch (action.type) {
    case OPEN_PATENT_MODAL:
      return {
        ...state,
        patent: {
          data: res.data,
          isOpen: true,
        },
      };

    case CLOSE_PATENT_MODAL:
      return {
        ...state,
        patent: {
          data: null,
          isOpen: false,
          loading: false,
          error: null,
        },
      };

    case OPEN_PATENT_FINISH_MODAL:
      return {
        ...state,
        patentFinish: {
          data: res.data,
          isOpen: true,
        },
      };

    case CLOSE_PATENT_FINISH_MODAL:
      return {
        ...state,
        patentFinish: {
          data: null,
          isOpen: false,
          loading: false,
          error: null,
        },
      };

    case OPEN_ALERT_MODAL:
      return {
        ...state,
        alert: {
          data: null,
          isOpen: true,
          loading: false,
          error: null,
        },
      };

    case CLOSE_ALERT_MODAL:
      return {
        ...state,
        alert: {
          data: null,
          isOpen: false,
          loading: false,
          error: null,
        },
      };

    default:
      return state;
  }
};

export default modalReducer;
