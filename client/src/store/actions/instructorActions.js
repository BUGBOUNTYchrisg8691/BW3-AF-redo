import AxiosWithAuth from "../../utils/AxiosWithAuth";
import { instructorTypes } from "../../constants";

export function fetchInstructorClasses(id) {
  return (dispatch) => {
    dispatch({ type: instructorTypes.FETCH_INSTRUCTOR_CLASSES_START });
    AxiosWithAuth()
      .get(`/api/users/${id}/classes`)
      .then((res) => {
        dispatch({
          type: instructorTypes.FETCH_INSTRUCTOR_CLASSES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: instructorTypes.FETCH_INSTRUCTOR_CLASSES_FAILURE,
          payload: err.message,
        });
      });
  };
}
