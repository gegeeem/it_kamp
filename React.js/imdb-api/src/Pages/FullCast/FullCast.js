import axios from "axios";
import React, { useEffect, useState } from "react";
import CardMovie from "../../components/CardMovie/CardMovie";
import { Navigate, useNavigate } from "react-router-dom";

const API_KEY = "k_pkwn34ei";
const BASE_URL = "https://rickandmortyapi.com/api/episode";

export default function FullCast() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const getData = async (url, name) => {
    const results = await axios.get(`${url}/?name=${name}`);
    console.log(results.data.results);
    setData(results.data.results);
    console.log("pozvana fja");
  };
  useEffect(() => {
    getData(BASE_URL, name);
  }, [name]);
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
          setName(text);
          setText("");
          console.log(name);
        }}
      >
        Search
      </button>
      <div className="movies">
        {data.map((el) => (
          <div className="container">
            <CardMovie
              key={el.id}
              id={el.id}
              name={el.name}
              img={el.image}
              title={el.species}
              func={() => {
                navigate(`/fullcast/${el.id}`);
              }}
            />
          </div>

          //   <div key={el.id}>
          //     {" "}
          //     name: {el.name} status:{el.status}
          //   </div>
        ))}
      </div>
    </>
  );
}
