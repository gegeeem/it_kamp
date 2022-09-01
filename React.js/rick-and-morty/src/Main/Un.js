import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://rickandmortyapi.com/api";

export default function Un() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  function getAuthors(page) {
    setLoading(true);
    try {
      axios.get(`${BASE_URL}/${page}`).then((res) => {
        setAuthors(res.data.results);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAuthors("character");
  }, [authors]);

  return (
    <div className="card-container">
      {!loading ? (
        <div>
          {authors.map((author) => (
            <div key={author._id}>
              <h4>{author.name}</h4>
              <h5>{author.status}</h5>
              <img src={author.image} />
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
