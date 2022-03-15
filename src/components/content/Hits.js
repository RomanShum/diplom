import Loader from "./Loader";
import MoreItems from "./MoreItems";
import { Link } from "react-router-dom";
export default function Hits(props) {
  const onHandleLoad = () => {
    props.onLoadMore();
  };
  if (props.hits.status != "ok" || props.status == "idle") {
    return <Loader />;
  }
  return (
    <>
      {props.children}
      <div className="row">
        {props.hits.items.map((item) => (
          <div className="col-4">
            <div className="card">
              <img
                src={item.images[0]}
                className="card-img-top img-fluid"
                alt={item.title}
              />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
                <p className="card-text">{item.price} руб.</p>
                <Link
                  to={`/view/${item.id}`}
                  state={{ id: item.id, price: item.price }}
                >
                  <a href="#" className="btn btn-outline-primary">
                    Заказать
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {props.children != undefined ? (
        <MoreItems onHandleClick={onHandleLoad} />
      ) : (
        <></>
      )}
    </>
  );
}
