import style from "./CountryPage.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCountry } from "./../api";

export default function CountryPage() {
  const { code } = useParams();
  const [country, setCountry] = useState();

  const setInitData = async () => {
    const data = await fetchCountry(code);
    console.log(data);
    setCountry(data);
  };

  useEffect(() => {
    if (code) {
      setInitData();
    }
  }, [code]);

  if (!country) {
    return <>Loading ...</>;
  }

  return (
    <div className={style.container}>
      <section className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji} {country.commonName}
        </div>
        <div className={style.officialName}>
          {country.officialName}
        </div>
      </section>

      <img className={style.flagImg} src={country.flagImg} />

      <section className={style.body}>
        <div>
          <b>코드 :</b> {country.code}
        </div>
        <div>
          <b>수도 :</b> {country.capital}
        </div>
        <div>
          <b>지역 :</b> {country.region}
        </div>
        <div>
          <b>인구 :</b> {country.population}명
        </div>
        <div>
          <b>지도 :</b>{" "}
          <a target="_blank" href={country.googleMapURL}>
            {country.googleMapURL}
          </a>
        </div>
      </section>
    </div>
  );
}
