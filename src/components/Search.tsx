import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchCities, getCitiesSelector } from "../redux/actions";
import { SearchType } from "../components/types";
import { State } from "../redux/types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 39px;
  width: 300px;
`;

const SearchDump: SearchType = ({ fetchCities, city }) => {
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    fetchCities(inputValue);
  }, [inputValue, fetchCities]);

  const onInputChange = (value: string) => {
    setInputValue(value);
  };

  console.log(city);

  return (
    <Container>
      <Input
        placeholder="Введите город"
        value={inputValue}
        onChange={(event) => onInputChange(event.target.value)}
      />
      <div>
        Погода -
        {city.weather ? city?.weather[0].main : "Такого города не найдено"}
      </div>
      <div>Местоположение - {city.name ?? "Такого города не найдено"}</div>
      <div>Страна - {city?.sys?.country ?? "Такого города не найдено"}</div>
    </Container>
  );
};

const mapStateToProps = (state: State) => ({
  city: getCitiesSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, State, Action>) => ({
  fetchCities: (value: string) => dispatch(fetchCities(value)),
});

const Search = connect(mapStateToProps, mapDispatchToProps)(SearchDump);

export default Search;
