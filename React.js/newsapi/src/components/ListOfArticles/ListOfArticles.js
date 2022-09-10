import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListOfArticles.css";

const BASE_URL = "https://newsapi.org/v2/everything";
const APi_KEY = "8c00977ab1c744f9a1e7a0e006e3f3fa";

export default function ListOfArticles() {
  const [articles, setArticles] = useState([]);
  const [post, setPost] = useState({
    author: "",
    title: "",
  });

  function getData() {
    try {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=bitcoin&apiKey=8c00977ab1c744f9a1e7a0e006e3f3fa"
        )
        .then((res) => {
          console.log(res.data.articles);
          console.log("pokrenuta axios");
          setArticles(res.data.articles);
        });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {
        <ul>
          {articles.map((el, i) => (
            <li key={i}>
              <h3>author:{el.author} </h3>
              <p>title:{el.title}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
