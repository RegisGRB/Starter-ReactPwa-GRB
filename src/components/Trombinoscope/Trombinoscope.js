import React from "react";
import axios from "axios";
const Trombinoscope = () => {
  const options = {
    url: "http://localhost/test.htm",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const Fetch = async () => {
    await axios.get(options).then((response) => {
      return response;
    });
  };

  return (
    <div>
      {Fetch.map((el) => <h1>{el.name}</h1>)}
    </div>
  );
};

export default Trombinoscope;
