import millify from "millify";
import React from "react";

import { GoVerified } from "react-icons/go";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { Link } from "react-router-dom";

const Property = ({ image, price, location, area, baths, rooms, externalID }) => {
  return (
    <div className="basis-1/3 py-6">
      <div className="w-80 rounded shadow-md">
        <Link to={`/${externalID}`} className="">
          <img className="w-80 h-56" src={image.url} />
          <div className="flex items-center font-bold px-6 pt-6">
            <GoVerified />
            <p className="ml-2">{`AED ${millify(price)}`}</p>
          </div>
          <div className="flex text-gray-400 text-sm px-6 pb-6 border-gray-300 border-solid border-b-1">
            <p className="line-clamp-1">
              {location.map((el) => {
                if (location.indexOf(el) === location.length - 1)
                  return el.name;
                return `${el.name}, `;
              })}
            </p>
          </div>
          <hr />
          <div className="flex px-6 pt-6 font-bold justify-around">
            <div className="flex items-center">
              <BiBed />
              <p className="ml-2">{rooms}</p>
            </div>
            <div className="flex items-center">
              <BiBath />
              <p className="ml-2">{baths}</p>
            </div>
            <div className="flex items-center">
              <BiArea />
              <p className="ml-2">{millify(area)} sqft</p>
            </div>
          </div>
          <div className="flex px-6 pb-6 justify-around text-sm text-gray-400">
            <div>
              <p>Rooms</p>
            </div>
            <div>
              <p>Bathrooms</p>
            </div>
            <div>
              <p>Living Area</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Property;
