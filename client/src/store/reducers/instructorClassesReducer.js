import { instructorTypes } from "../../constants";

const initialState = {
  instructorClasses: [],
  isFetching: false,
  error: "",
};

export default function instructorClassesReducer(state = initialState, action) {
  switch (action.type) {
    case instructorTypes.FETCH_INSTRUCTOR_CLASSES_START:
      return {
        ...state,
        isFetching: true,
      };
    case instructorTypes.FETCH_INSTRUCTOR_CLASSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        instructorClasses: action.payload,
      };
    case instructorTypes.FETCH_INSTRUCTOR_CLASSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
