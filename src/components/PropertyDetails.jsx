import millify from "millify";
import React, { useState, useEffect } from "react";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { useParams } from "react-router";

import { fetchPropertyDetails } from "../utils/fetchApi";
import ImageScrollbar from "./ImageScrollbar";

const PropertyDetails = () => {
  let { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetchPropertyDetails(id).then((data) => {
      setDetails(data);
      console.log(details);
    });
  }, []);
  return (
    <div className="max-w-7xl my-0 mx-auto">
      <div className="w-[1000px] p-4 mx-auto">
        {details?.photos?.length > 1 ? (
          <ImageScrollbar data={details?.photos} />
        ) : null}
        <div className="w-full p-6">
          <div className="flex items-center pt-2 justify-between">
            <div className="flex items-center">
              {details?.isVerified && (
                <GoVerified className="text-green-400 mr-3" />
              )}
              <p className="font-bold text-lg">
                AED {details?.price ? millify(details?.price) : null}
                {details?.rentFrequency && `/${details?.rentFrequency}`}
              </p>
            </div>

            <img
              src={details?.agency?.logo?.url}
              className="w-[100px] h-[50px]"
            />
          </div>
          <div className="flex items-center justify-between p-1 w-[250px] text-black">
            {details?.rooms}
            <BiBed /> | {details?.baths}
            <BiBath /> | {details.area
              ? millify(details?.area)
              : null} sqft <BiArea />
          </div>
          <div className="mt-2">
            <p className="text-lg font-bold mb-2">{details?.title}</p>
            <p className="text-gray-600">{details?.description}</p>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex justify-between w-[400px] border-b-1 p-3">
              <p>Type</p>
              <p className="font-bold">{details?.type}</p>
            </div>
            <div className="flex justify-between w-[400px] border-b-1 p-3">
              <p>Purpose</p>
              <p className="font-bold">{details?.purpose}</p>
            </div>
            {details?.furnishingStatus && (
              <div className="flex justify-between w-[400px] border-b-1 p-3">
                <p>Furnishing Status</p>
                <p className="font-bold">{details?.furnishingStatus}</p>
              </div>
            )}
          </div>
          <div>
            {details?.amenities?.length && (
              <p className="text-2xl font-boldvmt-5">Facilities:</p>
            )}
            <div className="flex flex-wrap">
              {details?.amenities?.map((item) =>
                item?.amenities?.map((amenity) => (
                  <p
                    key={amenity.text}
                    className="font-bold p-2 bg-gray-200 m-1 border-r-5"
                  >
                    {amenity.text}
                  </p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
