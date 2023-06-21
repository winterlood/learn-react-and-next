import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

const FIELDS = [
  "cca3",
  "name",
  "capital",
  "region",
  "flag",
  "flags",
  "population",
];

const simplifyCountry = (country) => {
  return {
    code: country.cca3,
    flagImg: country.flags.png,
    flagEmoji: country.flag,
    commonName: country.name.common,
    region: country.region,
    capital: country.capital.join(", "),
    population: country.population,
  };
};

export const fetchAllCountries = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/independent?status=true&fields=${FIELDS.join(",")}`
    );

    const countries = response.data;

    return countries.map((country) => simplifyCountry(country));
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchSearchResult = async (q) => {
  try {
    const response = await axios.get(`${BASE_URL}/name/${q}`);

    const countries = response.data;
    return countries.map((country) => simplifyCountry(country));
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchCountry = async (code) => {
  try {
    const response = await axios.get(`${BASE_URL}/alpha/${code}`);
    const country = response.data[0];

    return {
      ...simplifyCountry(country),
      officialName: country.name.official,
      googleMapURL: country.maps.googleMaps,
    };
  } catch (e) {}
};
