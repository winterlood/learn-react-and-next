import { useNavigate } from "react-router-dom";
import style from "./Layout.module.css";
export default function Layout({ children }) {
  const nav = useNavigate();

  const onClickLogo = () => {
    nav("/");
  };

  return (
    <div className={style.container}>
      <header>
        <div className={style.logo} onClick={onClickLogo}>
          🌏 NARAS
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
