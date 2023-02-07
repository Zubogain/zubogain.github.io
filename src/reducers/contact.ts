import { PayloadAction } from "@reduxjs/toolkit";
import { IContactState } from "interfaces/contact";
import { CONTACT_FORM_REQUEST } from "../actions/contact";

const initialState: IContactState = {
  isError: false,
  isResponse: false,
  prevIsResponse: false,
};

export default function reducer(
  state = initialState,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case CONTACT_FORM_REQUEST:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
