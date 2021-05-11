
import { ADD_TO_CART, UPDATE_AMOUNT_CART, ListsAction, ListState, REMOVE_FROM_CART, } from "types/types";


const initialState: ListState = {
  products: [],
  id:0,
  amount:0
}

const List = (state = initialState, action: ListsAction): ListState => {
  //console.log(action)  
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload;
      const existItem = state.products.find((x) => x.id === product.id);
      if (existItem) {
        return {
          ...state,
          products: state.products.map((x) =>
            x.id === existItem.id ? product : x
          ),
        };
      } else {
        return {
          ...state,
          products: [...state.products, product],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((x) => x.id !== action.payload.id),
      };
    case UPDATE_AMOUNT_CART:
        return {
          ...state,
          id:action.payload.id, 
          amount:action.payload.amount
        };
    default:
      return state;
  }
}
export default List;

