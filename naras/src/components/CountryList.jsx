import CountryItem from "./CountryItem";
import style from "./CountryList.module.css";

export default function CountryList() {
  return (
    <div className={style.container}>
      <CountryItem />
    </div>
  );
}
