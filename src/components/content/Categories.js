export default function Categories({ categories }) {
  console.log(categories);

  const onHandlerClick = (e) => {
    // console.log(e.target);
  };

  return (
    <ul className="catalog-categories nav justify-content-center">
      {categories.map((item) => (
        <li className="nav-item" key={item.id} onClick={onHandlerClick}>
          <a className="nav-link active" href="#" data-id={item.id}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
