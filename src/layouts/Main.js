import { useEffect, useState } from "react";
import Banner from "../components/header/Banner";
import MainWrapper from "../components/main/MainWrapper";
import Content from "../components/content/Content";
import {
  fetchCategories,
  fetchGetAll,
  fetchGetHits,
} from "../redux/categoriesActions";
import { useSelector, useDispatch } from "react-redux";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetHits);
  }, []);
  useEffect(() => {
    dispatch(fetchCategories);
    dispatch(fetchGetAll);
  }, []);

  return (
    <MainWrapper>
      <Banner />
      <Content title="Хиты продаж!" styleName="top-sales" />
      <Content title="Каталог" styleName="catalog" />
    </MainWrapper>
  );
}
