type WeatherOfCity = {
  main: string;
};

type SisType = {
  country: string;
};

type CityType = {
  weather?: Array<WeatherOfCity>;
  name?: string;
  sys?: SisType;
};

export type SearchType = React.FC<{
  city: CityType;
  fetchCities: any;
}>;
