import Loader from "./Loader"
import Hits from "./Hits"
import Categories from "./Categories"
export default function ContentWrapper({data}){
    return <section className={data.styleName}>
    <h2 className="text-center">{data.title}</h2>
    {data.load ? <Loader /> : data.categories!=undefined ? <><Categories categories={data.categories} /><Hits hits={data.data}/></>:<Hits hits={data.data}/>}
  </section>
}