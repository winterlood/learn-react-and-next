import style from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <div className={style.container}>
      <header>NARAS</header>
      <main>{children}</main>
    </div>
  );
}
