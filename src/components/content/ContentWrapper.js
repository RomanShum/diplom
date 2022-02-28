import Hits from "./Hits";
import Categories from "./Categories";
import { useSelector, useDispatch } from "react-redux";
import { loadOne } from "../../redux/categoriesActions";

export default function ContentWrapper({ data }) {
  const dispatch=useDispatch();
  let hits = useSelector((state) => state.Hits);
  let categories = useSelector((state) => state.Categories);
  let categoryItems = useSelector((state) => state.CategoryItems);

  const onLoadCategory = (id) => {
    dispatch(loadOne(id));
  }

  return (
    <section className={data.styleName}>
      <h2 className="text-center">{data.title}</h2>
      {data.styleName == "catalog" ? (
        <>
          <Hits hits={categoryItems} status={categories.status}>
            <Categories onLoadCategory={onLoadCategory} categories={categories.items} />
          </Hits>
        </>
      ) : (
        <Hits hits={hits} />
      )}
    </section>
  );
}
