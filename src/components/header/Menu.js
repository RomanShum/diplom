import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

export default function Menu() {
  const items = useSelector((state) => state.Menu);
  const count = useSelector((state) => state.Cart.count);
  return (
    <div
      className="collapase navbar-collapse"
      id="navbarMain"
      style={{ justifyContent: "space-between" }}
    >
      <ul className="navbar-nav mr-auto">
        {items.menu.map((item) => (
          <li className="nav-item active">
            <Link to={item.href}>
              <a className="nav-link" href="/">
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <div className="header-controls-pics">
          <div
            data-id="search-expander"
            className="header-controls-pic header-controls-search"
          ></div>
          <div className="header-controls-pic header-controls-cart">
            {count > 0 ? (
              <div className="header-controls-cart-full">{count}</div>
            ) : (
              ""
            )}

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
    </div>
  );
}
