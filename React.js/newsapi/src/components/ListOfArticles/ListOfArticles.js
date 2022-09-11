import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListOfArticles.css";
import { Card, Pagination } from "@mantine/core";
import Demo from "../Card/Card";
import Btn from "../Button/Button";
import HomePage from "../HomePage/HomePage";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Tesla from "../Tesla.js/Tesla";
import Techcrunch from "../Techcrunch/Techcrunch";

const BASE_URL = "https://newsapi.org/v2/everything";
const APi_KEY = "8c00977ab1c744f9a1e7a0e006e3f3fa";
const postPerPage = 9;

export default function ListOfArticles() {
  const [articles, setArticles] = useState([]);
  const [post, setPost] = useState({
    author: "",
    title: "",
  });
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("bitcoin");

  function getData(ctg) {
    try {
      axios
        .get(
          `${BASE_URL}?q=${ctg}&pageSize=${postPerPage}&page=${page}&apiKey=${APi_KEY}`
        )
        .then((res) => {
          console.log(res.data.articles);
          console.log("pokrenuta axios");
          setArticles(res.data.articles);

          console.log("category", category);
        });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData(category);
  }, [page, category]);
  return (
    <div>
      <div className="nav-buttons">
        <NavLink label="Home" to="/">
          <Btn
            func={() => {
              setCategory("bitcoin");
              setPage(1);
            }}
            name="Bitcoin"
          />
        </NavLink>
        <NavLink label="tesla" to="/tesla">
          <Btn
            func={() => {
              setCategory("tesla");
              setPage(1);
            }}
            name="Tesla"
          />
        </NavLink>
        <NavLink label="TechCrunch" to="/techcrunch">
          <Btn
            func={() => {
              setCategory("techcrunch");
              setPage(1);
            }}
            name="Techcrunch"
          />
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<HomePage bitocin={articles} />} />
        <Route path="tesla" element={<Tesla tesla={articles} />} />
        <Route
          path="techcrunch"
          element={<Techcrunch techcrunch={articles} />}
        />
      </Routes>
      {/* <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        {page}
      </button> */}
      {/* <div className="nav-buttons">
        <Btn
          func={() => {
            setCategory("bitcoin");
            setPage(1);
          }}
          name="Bitcoin"
        />
        <Btn
          func={() => {
            setCategory("tesla");
            setPage(1);
          }}
          name="Tesla"
        />
        <Btn
          func={() => {
            setCategory("techcrunch");
            setPage(1);
          }}
          name="Techcrunch"
        />
      </div> */}
      {
        // <ul className="list-main">
        //   {articles.map((el, i) => (
        //     <li key={i}>
        //       {/* <h3>author:{el.author} </h3>
        //       <p>title:{el.title}</p>
        //       <img src={el.urlToImage} /> */}
        //       {/* <Demo img={el.urlToImage} title={el.title} desc={el.author} /> */}
        //     </li>
        //   ))}
        // </ul>
      }
      <div className="pagination">
        <Pagination page={page} onChange={setPage} total={10} />
      </div>
    </div>
  );
}
