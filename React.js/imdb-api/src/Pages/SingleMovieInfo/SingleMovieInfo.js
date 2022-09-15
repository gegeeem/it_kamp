import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import "./CardMovies.css";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const BASE_URL = "https://imdb-api.com/en/API/FullCast";
const API_KEY = "k_pkwn34ei";

export default function CardMovie() {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState({});

  const getData = async (url, apiKey, id) => {
    const res = await axios.get(`${url}/${apiKey}/${id}`);
    setSingleMovie(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getData(BASE_URL, API_KEY, id);
  }, [id]);

  return <>{singleMovie.title}</>;
}
