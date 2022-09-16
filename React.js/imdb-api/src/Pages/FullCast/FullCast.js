import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMovie from "../../components/CardMovie/CardMovie";
import { Navigate, useNavigate } from "react-router-dom";

const API_KEY = "k_ndf92doz";
const BASE_URL = "https://imdb-api.com/en/API/SearchMovie";

export default function FullCast() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [keyword, setKeyWord] = useState("");

  const navigate = useNavigate();

  const getData = async (url, key, keyword) => {
    const results = await axios.get(`${url}/${key}/${keyword}`);
    console.log(results.data.results);
    setData(results.data.results);
    console.log("pozvana fja");
  };
  // useEffect(() => {
  //   getData(BASE_URL, API_KEY, keyword);
  // }, [keyword]);
  return (
    <>
      <h2>FullCast Page</h2>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
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
      </button>
      <div className="movies">
        {data?.map((el) => (
          // <div>{el.title}</div>
          <CardMovie
            key={el.id}
            img={el.image}
            title={el.title}
            desc={el.description}
            func={() => navigate(`/fullcast/${el.id}`)}
          />
        ))}
      </div>
    </>
  );
}
