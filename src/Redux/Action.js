import {
  createContactConstans,
  deleteContactConstans,
  getAllContactConstans,
  updateContactConstans,
} from "./Constance";
import axios from "axios";

export const getAllContact = () => {
  return async (dispatch) => {
    dispatch({ type: getAllContactConstans.GET_ALL_CONTACT_REQUEST });

    const res = await axios.get("https://blooming-lake-94414.herokuapp.com/contact/");

    if (res.status === 200) {
      dispatch({
        type: getAllContactConstans.GET_ALL_CONTACT_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: getAllContactConstans.GET_ALL_CONTACT_FAIL,
      });
    }
  };
};

export const createContact = (data) => {
  console.log("form careate contact", data);
  return async (dispatch) => {
    dispatch({
      type: createContactConstans.CREATE_CONTACT_REQUEST,
    });

    try {
      const res = await axios.post("https://blooming-lake-94414.herokuapp.com/contact/", data);
      dispatch({
        type: createContactConstans.CREATE_CONTACT_SUCCESS,
        payload: res.data,
      });
    } catch {
      dispatch({
        type: createContactConstans.CREATE_CONTACT_FAIL,
      });
    }
  };
};

export const updateContact = (data) => {
  return async (dispatch) => {
    const res = await axios.put("https://blooming-lake-94414.herokuapp.com/contact", data);
    dispatch({
      type: updateContactConstans.UPDATE_CONTACT_SUCCESS,
      payload: res.data,
    });
  };
};

export const deletContact = (id) => {
  return async (dispatch) => {
    console.log("okk", id);
    try {
      const res = await axios.delete(`https://blooming-lake-94414.herokuapp.com/contact/${id}`);
      dispatch({
        type: deleteContactConstans.DELET_CONTACT_SUCCESS,
        payload: res.data,
      });
    } catch {
      dispatch({
        type: deleteContactConstans.DELET_CONTACT_FAIL,
      });
    }
  };
};
