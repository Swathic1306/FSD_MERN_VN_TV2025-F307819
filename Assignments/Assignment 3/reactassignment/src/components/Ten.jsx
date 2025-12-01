import React, { useEffect, useState } from "react";

const Ten = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")               
      .then((res) => res.json())     
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex flex-wrap gap-3">
      {products.map((p, i) => (
        <div className="card" style={{ width: "18rem" }} key={i}>
          <img src={p.images[0]} className="card-img-top" alt={p.title} />
          <div className="card-body">
            <h5 className="card-title">{p.title}</h5>
            <p className="card-text"><b>Description:</b> {p.description}</p>
             <p className="card-text"><b>Category:</b> {p.category}</p>
              <p className="card-text" ><b>${p.price}</b></p>
               <p className="card-text" style={{color:"red"}}>Stock Left -{p.stock}</p>
            <a href={p.meta} className="btn btn-primary">
              More Info
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ten;
