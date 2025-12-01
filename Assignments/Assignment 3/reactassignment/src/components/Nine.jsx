import React, { useEffect, useState } from "react";

const Nine = () => {
  const students = ["Swathi", "Theekshana", "Jai Deepan", "Sandhiya"];

  const [search, setSearch] = useState("");

  const filter = students.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <br />
      {filter.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

export default Nine;
