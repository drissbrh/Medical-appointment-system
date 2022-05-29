import React, { useState, useEffect } from "react";
import SearchItem from "../components/SearchItem";
import "./SearchScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { listDoctors } from "../redux/actions/doctorActions";

const SearchScreen = () => {
  const [filterType, setFilterType] = useState("city");
  const [search, setSearch] = useState("");

  const doctorList = useSelector((state) => state.doctorList);
  const { loading, error, doctors } = doctorList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDoctors());
  }, [dispatch]);
  return (
    <div className="searchscreen">
      <div className="inside__searchscreen">
        <div className="filter__area">
          <h2>Search</h2>
          <div className="search__bar">
            <label>Search By</label>
            <select
              value={filterType}
              className=""
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value={"city"}>City</option>
              <option value={"speciality"}>Speciality</option>
            </select>
          </div>
          {filterType === "city" ? (
            <input
              type="text"
              value={search}
              placeholder="Search by city"
              onChange={(e) => setSearch(e.target.value)}
            />
          ) : (
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by speciality"
            />
          )}

          <button type="button">Search</button>
        </div>
        <div className="results__area">
          {loading ? (
            <div className="spinner3"></div>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            doctors.map((doc) => (
              <>
                <SearchItem
                  key1={doc._id}
                  identity={doc._id}
                  name={doc.name}
                  city={doc.city}
                  phone={doc.phoneNumber}
                  address={doc.address}
                  spec={doc.speciality}
                />
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
