import React, { useState, useEffect } from "react";
import SearchItem from "../components/SearchItem";

import "./SearchScreen.css";
import { useDispatch, useSelector } from "react-redux";
import {
  listDoctorsByBoth,
  listDoctorsBycity,
  listDoctorsBySpec,
} from "../redux/actions/doctorActions";
import { useParams } from "react-router-dom";

const SearchScreen = () => {
  const { keyword } = useParams();
  const { pageNumber } = useParams() || 1;
  const [filterType, setFilterType] = useState("city");
  const [search, setSearch] = useState("");

  const doctorList = useSelector((state) => state.doctorList);
  const { loading, error, doctors } = doctorList;
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterType === "city") {
      dispatch(listDoctorsBycity(search, ""));
    }
    if (filterType === "speciality") {
      dispatch(listDoctorsBySpec(search, ""));
    }
    if (filterType === "spec and city") {
      dispatch(listDoctorsByBoth(search, ""));
    }
  }, [dispatch, search, filterType]);
  return (
    <div className="searchscreen">
      <div className="inside__searchscreen">
        <div className="filter__area">
          <h2>Search</h2>
          <div className="search__bar">
            <label>Search By</label>
            <select
              value={filterType}
              className="filter__type"
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value={"city"}>City</option>
              <option value={"speciality"}>Speciality</option>
              <option value={"spec and city"}>spec and city</option>
            </select>
          </div>
          {filterType === "city" ? (
            <input
              type="text"
              value={search}
              placeholder="Search by city"
              onChange={(e) => setSearch(e.target.value)}
            />
          ) : filterType === "speciality" ? (
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by speciality"
            />
          ) : (
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by spec and city"
            />
          )}

          {/* <button type="button">Search</button> */}
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
                  docImage={doc.image}
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
