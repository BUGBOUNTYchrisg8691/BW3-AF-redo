import types from "../../constants";

const initialState = {
  classes: [],
  isFetching: false,
  error: "",
};

export default function classesReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CLASSES_START:
      return {
        ...state,
        isFetching: true,
      };
    case types.FETCH_CLASSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        classes: action.payload,
      };
    case types.FETCH_CLASSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
