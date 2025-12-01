import React from 'react';

const One = () => {
  const arr = [
    {
      Name: "Swathi C",
      Department: "B.Tech Information Technology",
      Year: "Final year"
    }
  ];

  return (
    <div>
      {arr.map((a, i) => {
        return (
          <div key={i} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{a.Name}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{a.Department}</h6>
              <p className="card-text">{a.Year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default One;
