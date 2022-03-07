import { useEffect, useState } from "react";
import Banner from "../components/header/Banner";
import MainWrapper from "../components/main/MainWrapper";
import Content from "../components/content/Content";
import { loadOne } from "../redux/categoriesActions";
import { useLocation, Link } from "react-router-dom";
import {
  fetchCategories,
  fetchGetAll,
  fetchGetHits,
} from "../redux/categoriesActions";
import { useSelector, useDispatch } from "react-redux";

export default function Main() {
  const dispatch = useDispatch();
  const location = useLocation();
  const categoryid = location.state != null ? location.state.id : 1;

  useEffect(() => {
    dispatch(fetchGetHits);
  }, []);
  useEffect(() => {
    dispatch(fetchCategories);
    if (categoryid == 1) {
      dispatch(fetchGetAll);
    } else {
      dispatch(loadOne(categoryid));
    }
  }, []);

  return (
    <MainWrapper>
      <Banner />
      <Content title="Хиты продаж!" styleName="top-sales" />
      <Content title="Каталог" styleName="catalog" />
    </MainWrapper>
  );
}
