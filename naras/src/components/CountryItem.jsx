import { useNavigate } from "react-router-dom";
import style from "./CountryItem.module.css";

const mock = {
  flagImg: "https://flagcdn.com/w320/kr.png",
  flagEmoji: "🇰🇷",
  commonName: "South Korea",
  region: "Asia",
  languages: "Korean",
  population: 2000,
};

export default function CountryItem(props) {
  const {
    flagImg,
    flagEmoji,
    commonName,
    region,
    languages,
    population,
  } = props;

  const nav = useNavigate();

  const onClickItem = () => {
    nav(`/country/${commonName}`);
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
          <div className={style.languages}>언어 : {languages}</div>
          <div className={style.population}>평판 : {population}</div>
        </div>
      </div>
    </div>
  );
}

CountryItem.defaultProps = {
  ...mock,
};
