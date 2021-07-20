import {
  getAllContactConstans,
  createContactConstans,
  updateContactConstans,
  deleteContactConstans,
} from "./Constance";

const initalState = {
  loading: false,
  error: null,
  contact: [],
};

export const contactReducer = (state = initalState, action) => {
  switch (action.type) {
    case getAllContactConstans.GET_ALL_CONTACT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case getAllContactConstans.GET_ALL_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: action.payload,
      };
    case getAllContactConstans.GET_ALL_CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        contact: [],
        error: "Fail to get all contact",
      };

    case createContactConstans.CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: [...state.contact, action.payload],
      };
    case createContactConstans.CREATE_CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        error: "Fail to careate a new contact",
      };
    case updateContactConstans.UPDATE_CONTACT_SUCCESS:
      const updateState = {
        ...state,
        contact: state.contact.map((con) =>
          con._id == action.payload._id ? action.payload : con
        ),
      };
      return updateState;

    case deleteContactConstans.DELET_CONTACT_SUCCESS:     
      const afterDelet = state.contact.filter(
        (con) => con._id !== action.payload._id
      );
      console.log(afterDelet);
      return {
        ...state,
        contact: afterDelet,
      };

    default:
      return state;
  }
};
