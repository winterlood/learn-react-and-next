import CountryList from "../components/CountryList";
import Searchbar from "../components/Searchbar";

export default function HomePage() {
  return (
    <div>
      <Searchbar />
      <CountryList />
    </div>
  );
}
