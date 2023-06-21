import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Searchbar.module.css";

export default function Searchbar({ q }) {
  const nav = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(q);
  }, [q]);

  const onChangeInput = (e) => {
    setSearch(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onClickSearch();
    }
  };

  const onClickSearch = () => {
    nav(`/search?q=${search}`);
  };

  return (
    <div className={style.container}>
      <input
        value={search}
        onChange={onChangeInput}
        onKeyDown={onKeydown}
        placeholder="SEARCH..."
      />
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}
