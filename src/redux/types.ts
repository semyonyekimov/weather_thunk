export type initialCitiesStateTypes = {
  request: boolean;
  cities: object;
  error: null;
};

export type State = {
  getCitiesReducer: initialCitiesStateTypes;
};

export type Data = {
  base: string;
  clouds: object;
  main: object;
  weather: Array<object>;
  sys: object;
  // и тд, каждый тоже расписываем
};
