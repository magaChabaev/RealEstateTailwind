import React, { useState } from "react";

import { AiOutlineHome, AiOutlineSearch, AiFillFilter } from "react-icons/ai";
import { filterDataForCategory, filterData } from "../utils/filterData";
import { fetchApi } from "../utils/fetchApi";

const Search = ({
  query,
  setQuery,
  inputValue,
  setInputValue,
  locationData,
  showLocations,
  setShowLocations,
  setProperty,
}) => {
  const [activeButton, setActiveButton] = useState(true);
  const [activeButtonFilter, setActiveButtonFilter] = useState(false);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setActiveButton(true);
            setQuery({ ...query, purpose: "for-sale" });
          }}
          className={
            activeButton
              ? "bg-white text-blue-700 px-5 py-2 font-bold rounded-tl-sm rounded-tr-sm"
              : "bg-gray-600 text-white px-5 py-2 font-bold rounded-tl-sm rounded-tr-sm"
          }
        >
          Sale
        </button>
        <button
          onClick={() => {
            setActiveButton(false);
            setQuery({ ...query, purpose: "for-rent" });
          }}
          className={
            !activeButton
              ? "bg-white text-blue-700 px-5 py-2 font-bold rounded-tl-sm rounded-tr-sm"
              : "bg-gray-600 text-white px-5 py-2 font-bold rounded-tl-sm rounded-tr-sm"
          }
        >
          Rent
        </button>
      </div>
      <div className="bg-white w-8/12 text-black flex items-center h-20 justify-between rounded-br-sm	rounded-tr-sm rounded-bl-sm z-10">
        <div className="flex items-center after:content-[''] after:w-px after:bg-gray-300 after:h-8 ml-3 after:mx-3">
          <AiOutlineHome className="mr-2" />
          <select
            defaultValue={"disabled"}
            onChange={(e) =>
              setQuery({ ...query, categoryExternalID: e.target.value })
            }
          >
            <option value={"disabled"}>Property type</option>
            {filterDataForCategory.map((el, index) => (
              <option key={index} value={el.value}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col grow relative">
          <div className="grow flex items-center">
            <AiOutlineSearch className="mr-2" />
            <input
              placeholder="Search..."
              className="w-11/12 focus:outline-none"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setShowLocations(true);
              }}
            ></input>
          </div>
          {showLocations && (
            <div className="overflow-auto text-black absolute top-[50px] left-[20px] grow w-11/12 h-[300px]">
              {locationData?.map((location) => (
                <div
                  className="bg-white p-6 border-b border-gray-300 cursor-pointer"
                  onClick={(e) => {
                    setShowLocations(false);
                    setInputValue(location.name);
                    setQuery({
                      ...query,
                      locationExternalIDs: location.externalID,
                    });
                  }}
                >
                  {location.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <button
            className="text-white bg-blue-700 py-3 px-5 mr-3 my-2 w-28 rounded"
            onClick={() =>
              fetchApi({
                query,
              }).then(({ hits }) => setProperty(hits))
            }
          >
            Search
          </button>
        </div>
      </div>
      {activeButtonFilter && (
        <div className="bg-white text-black w-8/12 flex flex-wrap rounded">
          {filterData?.map((filter) => (
            <select
              className="p-6"
              onChange={(e) =>
                setQuery({ ...query, [filter.queryName]: e.target.value })
              }
            >
              <option selected disabled>
                {filter.placeholder}
              </option>
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          ))}
        </div>
      )}
      <div className="mt-6">
        <button
          onClick={() => setActiveButtonFilter(!activeButtonFilter)}
          className={
            activeButtonFilter
              ? "bg-white text-blue-700 px-5 py-2 font-bold rounded-tl-sm rounded-tr-sm flex items-center"
              : "bg-gray-600 text-white px-5 py-2 font-bold rounded-tl-sm rounded-tr-sm flex items-center"
          }
        >
          <AiFillFilter className="mr-2" />
          Filters
        </button>
      </div>
    </div>
  );
};

export default Search;
