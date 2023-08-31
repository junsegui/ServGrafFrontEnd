import { OPEN_MODAL } from "./actionModalReducer";

const INITIAL_STATE = {
  isOpenPurchaseModal: false,
  IsOpenPriceModal: false,
};
export const modalReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpenPurchaseModal: !state.isOpenPurchaseModal,
      };
    default:
      return state;
  }
};
