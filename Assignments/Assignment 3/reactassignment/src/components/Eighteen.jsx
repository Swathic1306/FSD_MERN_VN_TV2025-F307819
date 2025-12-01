import React, { useEffect, useState } from "react";
import axios from "axios";

function Eighteen() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0); 

  useEffect(() => {
    axios.get("https://dummyjson.com/users?limit=20")
      .then((res) => {
        setUsers(res.data.users);
      });
  }, []);

  const itemsPerPage = 5;
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;

  const nextPage = () => {
    if (end < users.length) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div>
      <h3>Users</h3>

      {users.slice(start, end).map((u) => (
        <p key={u.id}>{u.firstName} {u.lastName}</p>
      ))}

      <button onClick={prevPage} disabled={page === 0}>
        Prev
      </button>

      <button onClick={nextPage} disabled={end >= users.length}>
        Next
      </button>
    </div>
  );
}

export default Eighteen;
