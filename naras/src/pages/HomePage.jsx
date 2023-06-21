import axios from "axios";
import style from "./HomePage.module.css";

import CountryList from "../components/CountryList";
import Searchbar from "../components/Searchbar";
import { useEffect, useState } from "react";
import { fetchAllCountries } from "../api";

export default function HomePage() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchAllCountries();
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, []);

  return (
    <div className={style.container}>
      <Searchbar />
      <CountryList countries={countries} />
    </div>
  );
}
