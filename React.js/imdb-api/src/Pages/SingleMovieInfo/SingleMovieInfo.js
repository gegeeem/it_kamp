import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./SingleMovieInfo.css";
import UserInfo from "./UserInfo";
import { Grid, Text, Container, Image } from "@nextui-org/react";
import movieDetail from "./Movie.json";
import Footer from "../../components/Footer/Footer";

const BASE_URL = "https://imdb-api.com/en/API/FullCast";
const API_KEY = "k_pkwn34ei";

export default function SingleMovieInfo() {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const getData = async (url, apiKey, id) => {
    const res = await axios.get(`${url}/${apiKey}/${id}`);
    setSingleMovie(res.data);
    console.log("single movie data", res.data);
    console.log(location.state.imgUrl);
    console.log("setSingleMovie", singleMovie);
  };
  useEffect(() => {
    getData(BASE_URL, API_KEY, id);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {console.log("from console in return", singleMovie)}
      {/* <h2>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </h2> */}
      {/* <img src={location.state.imgUrl} />
      Title: {singleMovie?.title}
      Year: {singleMovie?.year}
      Directors:
      {singleMovie.directors.items?.map((el) => el.name)} */}
      <Grid.Container style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Grid xs={6}>
          <Image width={320} objectFit="contain" src={location.state.imgUrl} />
        </Grid>
        <Grid xs={6} style={{ display: "flex", flexDirection: "column" }}>
          <Text h2 color="primary">
            Title: {singleMovie.title}
          </Text>
          <Text h4>Year: {singleMovie.year}</Text>

          <Text h8>
            Directors:{" "}
            {Object.keys(singleMovie).length !== 0 ? (
              singleMovie.directors.items?.map((el) => (
                <span key={el.id}>{el.name}</span>
              ))
            ) : (
              <>Loading</>
            )}
          </Text>
        </Grid>
        <Grid
          xs={12}
          justify="center"
          style={{ borderBottom: "2px solid gray", marginBottom: "10px" }}
        >
          <Text h2>Actors</Text>
        </Grid>
        {singleMovie.actors?.slice(0, 10).map((el) => (
          // <div key={el.id}>
          //   <img
          //     style={{ objectFit: "cover" }}
          //     className="img-avatar"
          //     src={el.image}
          //   />
          //   Name: {el.name}
          //   <br></br>
          //   asCharacter: {el.asCharacter}
          // </div>
          <Grid xs={4} key={el.id}>
            <UserInfo
              key={el.id}
              imgSrc={el.image}
              name={el.name}
              asCharacter={el.asCharacter}
            />
          </Grid>
        ))}
      </Grid.Container>
      <Footer />
    </>
  );
}
