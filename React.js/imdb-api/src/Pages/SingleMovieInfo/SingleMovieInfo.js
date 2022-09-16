import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./SingleMovieInfo.css";

const BASE_URL = "https://imdb-api.com/en/API/FullCast";
const API_KEY = "k_pkwn34ei";

export default function CardMovie() {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState({});
  const navigate = useNavigate();

  const getData = async (url, apiKey, id) => {
    const res = await axios.get(`${url}/${apiKey}/${id}`);
    setSingleMovie(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getData(BASE_URL, API_KEY, id);
  }, [id]);

  return (
    <>
      <h2>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </h2>
      <h2>Title: {singleMovie.title}</h2> <img src={singleMovie.image} />
      {singleMovie.actors?.map((el) => (
        <div key={el.id}>
          <img className="img-avatar" src={el.image} />
          Name: {el.name}
          <br></br>
          asCharacter: {el.asCharacter}
        </div>
      ))}
    </>
  );
}
