import Hits from "./Hits";
import Categories from "./Categories";
import { useSelector, useDispatch } from "react-redux";

export default function ContentWrapper({ data }) {
  let hits = useSelector((state) => state.Hits);
  let categories = useSelector((state) => state.Categories);
  let categoryItems = useSelector((state) => state.CategoryItems);
  return (
    <section className={data.styleName}>
      <h2 className="text-center">{data.title}</h2>
      {data.styleName == "catalog" ? (
        <>
          <Hits hits={categoryItems} status={categories.status}>
            <Categories categories={categories.items} />
          </Hits>
        </>
      ) : (
        <Hits hits={hits} />
      )}
    </section>
  );
}
