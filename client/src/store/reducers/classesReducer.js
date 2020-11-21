import getTimeDiff from "../../utils/getTimeDiff";
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
    case types.SEARCH_CLASSES:
      return {
        ...state,
        classes: state.classes.filter((cls) => {
          return cls[action.payload.category]
            .toString()
            .toLowerCase()
            .includes(action.payload.search.toLowerCase());
        }),
      };
    case types.SEARCH_CLASSES_TIME:
      return {
        ...state,
        classes: state.classes.filter((cls) => {
          return getTimeDiff(cls.start_time, cls.end_time)
            .toString()
            .includes(action.payload);
        }),
      };
    default:
      return state;
  }
}
