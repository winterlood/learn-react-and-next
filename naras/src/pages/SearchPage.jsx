import style from "./SearchPage.module.css";
import { useSearchParams } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import CountryList from "../components/CountryList";
import { fetchSearchResult } from "./../api";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get("q");

  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResult(q);
    data.sort((a, b) => b.population - a.population);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return (
    <div className={style.container}>
      <Searchbar q={q} />
      <div>
        <b>{q}</b> 검색 결과
      </div>
      <CountryList countries={countries} />
    </div>
  );
}
