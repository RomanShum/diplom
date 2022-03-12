import { useEffect } from "react";
import { fetchItem } from "../redux/viewActions";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/content/Loader";

export default function View() {
  const dispatch = useDispatch();
  let location = useLocation();
  let item = useSelector((state) => state.View);
  let is_active = true;
  useEffect(() => {
    dispatch(fetchItem(location.state.id));
  }, []);

  if (item.status != "ok") {
    return <Loader />;
  }
  item = item.items;
  is_active = item.sizes.filter((item) => item.avalible == true).length > 0;
  return (
    <>
      <main class="container">
        <div class="row">
          <div class="col">
            <section class="catalog-item">
              <h2 class="text-center">{item.title}</h2>
              <div class="row">
                <div class="col-5">
                  <img src={item.images[0]} class="img-fluid" alt="" />
                </div>
                <div class="col-7">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Артикул</td>
                        <td>{item.sku}</td>
                      </tr>
                      <tr>
                        <td>Производитель</td>
                        <td>{item.manufacturer}</td>
                      </tr>
                      <tr>
                        <td>Цвет</td>
                        <td>{item.color}</td>
                      </tr>
                      <tr>
                        <td>Материалы</td>
                        <td>{item.material}</td>
                      </tr>
                      <tr>
                        <td>Сезон</td>
                        <td>{item.season}</td>
                      </tr>
                      <tr>
                        <td>Повод</td>
                        <td>{item.reason}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="text-center">
                    <p>
                      Размеры в наличии:
                      {item.sizes.map((size) =>
                        size.avalible == true ? (
                          <span class="catalog-item-size">{size.size}</span>
                        ) : (
                          ""
                        )
                      )}
                    </p>
                    {is_active ? (
                      <p>
                        Количество:
                        <span class="btn-group btn-group-sm pl-2">
                          <button class="btn btn-secondary">-</button>
                          <span class="btn btn-outline-primary">1</span>
                          <button class="btn btn-secondary">+</button>
                        </span>
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  {is_active ? (
                    <button class="btn btn-danger btn-block btn-lg">
                      В корзину
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
