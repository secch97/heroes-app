import React from "react";
import { HeroCard } from "../components";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const heroes = getHeroesByName(q);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length === 0) {
      return;
    }
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr></hr>
      <div className="row">
        {" "}
        <div className="col-5">
          <h4>Searching</h4>
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            ></input>
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr></hr>
          {q === "" ? (
            <div className="alert alert-primary">Search a hero</div>
          ) : heroes.length === 0 ? (
            <div className="alert alert-danger">No hero found for {q}</div>
          ) : null}
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
