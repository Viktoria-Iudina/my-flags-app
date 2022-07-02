import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";

const Countries = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <h1 className="countries">Countries</h1>
    </div>
  );
};

export default Countries;
