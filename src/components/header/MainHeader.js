import logo from "../../img/header-logo.png";
import Menu from "./Menu";

export default function MainHeader() {
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light bg-light"
      style={{ padding: 10 }}
    >
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Bosa Noga" />
      </a>
      <Menu /> 
    </nav>
  );
}
