export const SET_WEATHER = "SET_WEATHER";

export const API_KEY = "48a59b3d36409c2886af9f5b8a83155b";

export const FETCH_CITIES_REQUEST = "FETCH_CITIES_REQUEST";

export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";

export const FETCH_CITIES_FAILURE = "FETCH_CITIES_FAILURE";

export const fetchCititesRequest = () => {
  return { type: FETCH_CITIES_REQUEST };
};

export const fetchCitiesSuccess = (data: object) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: data,
  };
};

export const fetchCitiesFailure = (error: any) => {
  return {
    type: FETCH_CITIES_FAILURE,
    payload: error,
  };
};

export const fetchCities = (value: string) => {
  return (dispatch: any) => {
    dispatch(fetchCititesRequest());
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCitiesSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchCitiesFailure(error));
      });
  };
};

export const getCitiesSelector = (state: any) => state.getCitiesReducer.cities;
