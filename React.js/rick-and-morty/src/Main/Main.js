import React, { useState, useEffect } from "react";
import axios from "axios";
import Location from "../Location/Location";
import Resident from "../Residents/Residents";
import Residents from "../Residents/Residents";
import ListOfResidents from "../LisOfResidents/ListOfResidents";

const BASE_URL = "https://rickandmortyapi.com/api";

export default function Main() {
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPrevPage, setNextPrevPage] = useState({});
  const [ctg, setCtg] = useState("character");

  const [statusCharacter, setStatusCharacter] = useState("");

  function getData(category, path, status) {
    try {
      axios
        .get(`${BASE_URL}/${category}/?page=${path}&status=${status}`)
        .then((res) => {
          setCategory(res.data.results);
          setNextPrevPage({
            prev: res.data.info.prev,
            next: res.data.info.next,
          });

          console.log(nextPrevPage);
          console.log(category);
          console.log(`url ${BASE_URL}/${category}/?page=${path}`);
          console.log("ctg", ctg);
        });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData(ctg, page, statusCharacter);
  }, [page, ctg, statusCharacter]); //if page cnahge or category from selected list turn on useEffect
  return (
    <div>
      <button
        disabled={nextPrevPage.prev !== null ? false : true} //if prev page don t exist disable button
        onClick={() => {
          setPage((prev) => prev - 1);
        }}
      >
        prev
      </button>
      page {page}
      <button
        disabled={nextPrevPage.next !== null ? false : true} // if next page don t exist disable button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        next
      </button>
      <select
        value={ctg}
        onChange={(e) =>
          setCtg(() => {
            setPage(1); //reset to first page after change category
            return e.target.value; // catch value from option and add to ctg state
          })
        }
      >
        <option value="character">Character</option>
        <option value="location">Location</option>
        <option value="episode">Episode</option>
      </select>
      {ctg === "character" && (
        <select
          value={statusCharacter}
          onChange={(e) =>
            setStatusCharacter(() => {
              setPage(""); //reset to first page after change category
              return e.target.value; // catch value from option and add to ctg state
            })
          }
        >
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknow">Unknow</option>
        </select>
      )}
      {ctg === "character" ? (
        <ul>
          {category.map((actor) => (
            <li key={actor.id}>
              <h3>{actor.name}</h3>
              <p>{actor.gender}</p>
              <img src={actor.image} />
            </li>
          ))}
        </ul>
      ) : ctg === "location" ? (
        <div>
          {category.map((el, i) => (
            <ul>
              {/* <Location
                key={el + i}
                locationName={el.name}
                dimension={el.dimension}
                // residentArray={el.residents}
              /> */}
              {/* {el.residents.map((e) => (
                <p>e</p>
              ))} */}
              <ListOfResidents residentsArrayOfString={el.residents} />
            </ul>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
