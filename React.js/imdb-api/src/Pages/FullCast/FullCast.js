import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMovie from "../../components/CardMovie/CardMovie";
import { Navigate, useNavigate } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import wars from "./war.json";
import paginationFunc from "../../PaginationFunction/paginationFunc";

const API_KEY = "k_ndf92doz";
const BASE_URL = "https://imdb-api.com/en/API/AdvancedSearch";

export default function FullCast() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [keyword, setKeyWord] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const getData = async (url, key, keyword) => {
    const results = await axios.get(
      `${url}/${key}/?title=${keyword}&title_type=tv_movies&count=18`
    );
    console.log(results);
    setData(results.data.results);
    console.log("pozvana fja");
  };
  console.log(wars);
  // useEffect(() => {
  //   getData(BASE_URL, API_KEY, keyword);
  // }, [keyword]);
  return (
    <>
      <h2>FullCast Page</h2>
      <SearchBar
        funcOnChange={(e) => {
          setText(e.target.value);
        }}
        fncOnClc={() => {
          setKeyWord(text);
          setText("");
        }}
      />
      {/* <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
          console.log("sa onchange", keyword);
        }}
        placeholder="keyword..."
        value={text}
      ></input>
      <button
        onClick={() => {
          setKeyWord(text);
          setText("");
          console.log(keyword);
        }}
      >
        Search
      </button> */}
      <Container display="flex" wrap="wrap" justify="space-around">
        {/* {data?.map((el) => (
          // <div>{el.title}</div>
          <CardMovie
            key={el.id}
            img={el.image}
            title={el.title}
            desc={el.description}
            func={() => navigate(`/fullcast/${el.id}`)}
          />
        ))} */}
        {/* {wars.results?.map((el) => (
          // <div>{el.title}</div>
          <CardMovie
            key={el.id}
            img={el.image}
            title={el.title}
            desc={el.description}
            func={() => navigate(`/fullcast/${el.id}`)}
          />
        ))} */}
        {/* {wars.results?.map((el) => (
          // <div>{el.title}</div>
          <CardMovie
            key={el.id}
            img={el.image}
            title={el.title}
            desc={el.description}
            func={() => navigate(`/fullcast/${el.id}`)}
          />
        ))} */}
      </Container>
    </>
  );
}
