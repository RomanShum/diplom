import Hits from "./Hits";
import Categories from "./Categories";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadOne, loadMore } from "../../redux/categoriesActions";
import { useLocation, Link } from "react-router-dom";
import { fetchGetAll, fetchCategories } from "../../redux/categoriesActions";

export default function ContentPageWrapper(data) {
  const dispatch = useDispatch();
  let categories = useSelector((state) => state.Categories);
  let categoryItems = useSelector((state) => state.CategoryItems);
  let path = data.path ? "/" + data.path : "";
  const location = useLocation();
  const categoryid = location.state != null ? location.state.id : 1;
  useEffect(() => {
    dispatch(fetchCategories);
    if (categoryid == 1) {
      dispatch(fetchGetAll);
    } else {
      dispatch(loadOne(categoryid));
    }
  }, []);

  const onLoadCategory = (id) => {
    if (id != 1) {
      dispatch(loadOne(id));
    } else {
      dispatch(fetchGetAll);
    }
  };

  const onLoadMore = () => {
    dispatch(loadMore(categoryid, categoryItems.items.length));
  };

  return (
    <section className={data.styleName}>
      <h2 className="text-center">{data.title}</h2>
      <Hits
        hits={categoryItems}
        status={categories.status}
        onLoadMore={onLoadMore}
      >
        <Categories
          onLoadCategory={onLoadCategory}
          categories={categories.items}
          path={path}
        />
      </Hits>
    </section>
  );
}
