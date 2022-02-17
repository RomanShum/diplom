export default function Categories({categories}){
    return <ul className="catalog-categories nav justify-content-center">
        {categories.map((item) => (
            <li className="nav-item" key={item.id}>
            <a className="nav-link active" href="#">{item.title}</a>
          </li>
        ))}
  </ul>
}