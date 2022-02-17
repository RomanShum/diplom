import { useEffect,useState } from "react";
import Banner from "../components/header/Banner";
import MainWrapper from "../components/main/MainWrapper";
import Content from "../components/content/Content"

export default function Main(){

    const [Load,setLoad] = useState(true);
    const [Hits,setHits] = useState([]);
    const [LoadCat,setLoadCat] = useState(true);
    const [Cat,setCat] = useState([]);
    const [Categories,setCategories] = useState([{id:1,title:'Все'}]);

    useEffect(() => {
        loadHits();
    },[])
    useEffect(() => {
        loadCat();
    },[Categories])
    useEffect(() => {
        loadCategory();
    },[])

    const loadHits = () => {
        fetch(
            `http://localhost:7070/api/top-sales`
          )
            .then((resp) => resp.json())
            .then(function (data1) {
            setHits(data1);
              setLoad(false);
            });
    }
    
    const loadCategory = () => {
        fetch(
            `http://localhost:7070/api/categories`
          )
            .then((resp) => resp.json())
            .then(function (data1) { 
            data1.unshift(...Categories)
            setCategories(data1);
            });
    }

    const loadCat = () => {
        fetch(
            `http://localhost:7070/api/items`
          )
            .then((resp) => resp.json())
            .then(function (data1) { 
                setCat(data1);
                setLoadCat(false);
            });
    }

return  <MainWrapper>
    <Banner />
    <Content title="Хиты продаж!" data={Hits} load={Load} styleName='top-sales' />
    <Content title="Каталог" data={Cat} load={LoadCat} categories={Categories} styleName='catalog' />
</MainWrapper>
}