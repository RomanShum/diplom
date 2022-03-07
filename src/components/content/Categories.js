import { useLocation, Link } from "react-router-dom";

export default function Categories({ categories, onLoadCategory }) {
  const location = useLocation();
  const id = location.state != null ? location.state.id : 1;

  const onHandlerClick = (e) => {
    onLoadCategory(e.target.dataset.id);
  };

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categories.map((item) => (
        <Link to={`/${item.id}`} state={{ id: item.id }}>
          <li className="nav-item" key={item.id} onClick={onHandlerClick}>
            <a
              className={item.id === id ? "nav-link active" : "nav-link"}
              href=""
              data-id={item.id}
            >
              {item.title}
            </a>
          </li>
        </Link>
      ))}
    </ul>
  );
}
