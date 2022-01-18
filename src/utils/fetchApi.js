import { data } from "autoprefixer";
import axios from "axios";

export const fetchApi = async ({ query }) => {
  const purpose = query.purpose || "for-sale";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";
  const baseUrl = `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`;
  const { data } = await axios.get(baseUrl, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "bd28204a4amsh1c7348b25594782p171fcfjsn51ef8ad9a7b3",
    },
  });
  console.log(data);
  return data;
};

export const fetchAutocomplete = async (searchTerm) => {
  const { data } = await axios.get(
    `https://bayut.p.rapidapi.com/auto-complete?query=${searchTerm}`,
    {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "bd28204a4amsh1c7348b25594782p171fcfjsn51ef8ad9a7b3",
      },
    }
  );
  return data;
};

export const fetchPropertyDetails = async (id) => {
  const { data } = await axios.get(
    `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`,
    {
      headers: {
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "x-rapidapi-key": "bd28204a4amsh1c7348b25594782p171fcfjsn51ef8ad9a7b3",
      },
    }
  );
  return data;
};
