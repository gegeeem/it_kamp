import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMovie from "../../components/CardMovie/CardMovie";
import { Navigate, useNavigate } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import {
  Container,
  Card,
  Row,
  Text,
  Col,
  Spacer,
  Button,
} from "@nextui-org/react";
import starWars from "./starWars.json";
import paginationFunc from "../../PaginationFunction/paginationFunc";
import PaginationForItems from "../../components/Pagination/PaginationForItems";
import { Pagination } from "@mantine/core";
import Footer from "../../components/Footer/Footer";

const API_KEY = "k_ndf92doz";
const BASE_URL = "https://imdb-api.com/en/API/AdvancedSearch";

export default function Series() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [keyword, setKeyWord] = useState("");
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const step = 6;
  const numberOfPages = Math.ceil(starWars.results.length / step);

  const getData = async (url, key, keyword) => {
    const results = await axios.get(
      `${url}/${key}/?title=${keyword}&title_type=tv_series&count=18`
    );
    console.log(results);
    setData(results.data.results);
    console.log("pozvana fja");
  };
  console.log(starWars);
  //   useEffect(() => {
  //     getData(BASE_URL, API_KEY, keyword);
  //   }, [keyword]);
  return (
    <>
      <Container
        display="flex"
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Row
          display="flex"
          justify="center"
          align="flex-end"
          // style={{ alignItems: "baseline" }}
        >
          <SearchBar
            funcOnChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button
            size="lg"
            aria-label="search"
            auto
            onClick={() => {
              setKeyWord(text);
              setText("");
            }}
          >
            Search
          </Button>
        </Row>
        <Text h2 color="primary">
          Results for: "{keyword}"
        </Text>
      </Container>

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
        {paginationFunc(starWars.results, step, page)?.map((el) => (
          // <div>{el.title}</div>
          <CardMovie
            key={el.id}
            img={el.image}
            title={el.title}
            desc={el.description}
            func={() =>
              navigate(`/series/${el.id}`, {
                state: {
                  imgUrl: el.image,
                },
              })
            }
          />
        ))}
      </Container>
      <Container justify="center" display="flex">
        <Pagination
          page={page}
          total={numberOfPages}
          onChange={setPage}
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
        />
      </Container>
      <Footer />
    </>
  );
}
