import { ADD_TO_CART, GET_LISTS, ListsAction, product, REMOVE_FROM_CART, UPDATE_AMOUNT_CART } from "types/types"

export const setCart = (product: product): ListsAction => {
    return {
      type: ADD_TO_CART,
      payload: product
    }
  }
export const setRemoveCart = (product: product): ListsAction => {
    return {
      type: REMOVE_FROM_CART,
      payload: product
    }
  }
  export const setUpdateAmount = (id: number, amount: number): ListsAction => {
    return {
      type: UPDATE_AMOUNT_CART,
      payload: {
        id,
        amount
      }
    }
  }
export const getLists = (): ListsAction => {
    return {
      type: GET_LISTS
    }
  }