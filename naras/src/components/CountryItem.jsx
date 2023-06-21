import { useNavigate } from "react-router-dom";
import style from "./CountryItem.module.css";

const mock = {
  code: "KOR",
  flagImg: "https://flagcdn.com/w320/kr.png",
  flagEmoji: "🇰🇷",
  commonName: "South Korea",
  region: "Asia",
  capital: "Seoul",
  population: 2000,
};

export default function CountryItem(props) {
  const {
    code,
    flagImg,
    flagEmoji,
    commonName,
    region,
    capital,
    population,
  } = props;

  const nav = useNavigate();

  const onClickItem = () => {
    nav(`/country/${code}`);
  };

  return (
    <div className={style.container} onClick={onClickItem}>
      <img className={style.flag_img} src={flagImg} />
      <div className={style.inner}>
        <div className={style.name}>
          {flagEmoji} {commonName}
        </div>
        <div className={style.info_wrapper}>
          <div className={style.region}>지역 : {region}</div>
          <div className={style.population}>평판 : {population}</div>
          <div className={style.capital}>수도 : {capital}</div>
        </div>
      </div>
    </div>
  );
}

// CountryItem.defaultProps = {
//   ...mock,
// };
