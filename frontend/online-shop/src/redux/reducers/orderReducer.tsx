import Order from "../../models/Order";
import * as types from "../actions/actionTypes";

const initialState = {
  order: Order,
};

export default function productReducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
