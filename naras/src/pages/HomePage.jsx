import style from "./HomePage.module.css";

import CountryList from "../components/CountryList";
import Searchbar from "../components/Searchbar";

export default function HomePage() {
  return (
    <div className={style.container}>
      <Searchbar />
      <CountryList />
    </div>
  );
}
