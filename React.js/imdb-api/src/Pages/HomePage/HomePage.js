import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";

const API_KEY = "k_ndf92doz";
const BASE_URL = "https://imdb-api.com/en/API/SearchMovie";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [keyword, setKeyWord] = useState("inception");

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
      <SearchBar
        funcOnChange={(e) => setText(e.target.value)}
        fncOnClc={() => {
          setKeyWord(text);
          setText("");
        }}
      />
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
          <div>{el.title}</div>
        ))}
      </div>
    </>
  );
}
