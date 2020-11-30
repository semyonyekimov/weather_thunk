import { initialCitiesStateTypes } from "./types";
import { combineReducers } from "redux";
import {
  FETCH_CITIES_FAILURE,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
} from "./actions";

const initialCitiesState: initialCitiesStateTypes = {
  request: false,
  cities: [],
  error: null,
};

export const getCitiesReducer = (state = initialCitiesState, action: any) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return { ...state, request: true };
    case FETCH_CITIES_SUCCESS:
      return { ...state, request: false, cities: action.payload };
    case FETCH_CITIES_FAILURE:
      return { ...state, request: false, error: action.error };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ getCitiesReducer });
