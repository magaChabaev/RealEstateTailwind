import React, { useState, useEffect } from "react";

import Search from "./Search";
import { fetchApi, fetchAutocomplete } from "../utils/fetchApi";
import Property from "./Property";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [showLocations, setShowLocations] = useState(false);
  const [locationData, setLocationData] = useState();
  const [query, setQuery] = useState({});
  const [property, setProperty] = useState();
  useEffect(() => {
    fetchApi({
      query,
    }).then(({ hits }) => {
      console.log(hits);
      setProperty(hits);
    });
  }, []);
  useEffect(() => {
    fetchAutocomplete(inputValue).then(({ hits }) => setLocationData(hits));
  }, [inputValue]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="bg-black relative">
          <div className="max-w-7xl my-0 mx-auto">
            <div className="text-white pt-36 text-6xl w-[28rem]">
              <p className="line-clamp-3">
                Buy or rent your home at the best price
              </p>
            </div>
            <div className="text-white pt-20 pb-20">
              <Search
                query={query}
                setQuery={setQuery}
                inputValue={inputValue}
                setInputValue={setInputValue}
                locationData={locationData}
                showLocations={showLocations}
                setShowLocations={setShowLocations}
                setProperty={setProperty}
              />
            </div>
            <div className="w-[33.33%] h-full bg-center bg-house bg-cover bg-no-repeat absolute right-0 top-0"></div>
          </div>
        </div>
        <div className="max-w-7xl my-0 mx-auto flex flex-wrap justify-between flex-auto">
          {property?.map(
            ({
              coverPhoto,
              price,
              location,
              rooms,
              baths,
              area,
              externalID,
            }) => (
              <Property
                image={coverPhoto}
                price={price}
                location={location}
                rooms={rooms}
                baths={baths}
                area={area}
                externalID={externalID}
              />
            )
          )}
        </div>
        <div className="bg-black text-gray-400 text-center p-6">
          Real Estate by Magomed Chabaev
        </div>
      </div>
    </>
  );
};

export default Main;
