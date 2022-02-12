import { useSelector} from "react-redux";

export default function Menu() {
  const items = useSelector(state=>state.Menu)
  return <div
  className="collapase navbar-collapse"
  id="navbarMain"
  style={{ justifyContent: "space-between" }}
>
  <ul className="navbar-nav mr-auto">
    {items.map((item) =>  <li className="nav-item active">
      <a className="nav-link" href="/">
        {item.title}
      </a>
    </li>)}
  </ul>
  <div>
    <div className="header-controls-pics">
      <div
        data-id="search-expander"
        className="header-controls-pic header-controls-search"
      ></div>
      <div className="header-controls-pic header-controls-cart">
        <div className="header-controls-cart-full">1</div>
        <div className="header-controls-cart-menu"></div>
      </div>
    </div>
    <form
      data-id="search-form"
      className="header-controls-search-form form-inline invisible"
    >
      <input className="form-control" placeholder="Поиск" />
    </form>
  </div>
</div>;
}
