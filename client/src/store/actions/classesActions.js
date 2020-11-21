import AxiosWithAuth from "../../utils/AxiosWithAuth";
import types from "../../constants";

export function fetchClasses() {
  return (dispatch) => {
    dispatch({ type: types.FETCH_CLASSES_START });
    AxiosWithAuth()
      .get("/api/classes")
      .then((res) => {
        dispatch({ type: types.FETCH_CLASSES_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.FETCH_CLASSES_FAILURE, payload: err.message });
      });
  };
}

export function searchClasses(search) {
  return (dispatch) => {
    dispatch({ type: types.SEARCH_CLASSES, payload: search });
  };
}

export function searchClassesTime(search) {
  return (dispatch) => {
    dispatch({ type: types.SEARCH_CLASSES_TIME, payload: search });
  };
}
