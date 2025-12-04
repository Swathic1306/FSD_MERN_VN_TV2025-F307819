import React from 'react'
import departments from "../data/department.json"
import { Link } from "react-router-dom"

const DepartmentCard = () => {
  return (
    <div className="container mt-4">
      <div className="row">

        {departments.map((d) => (
          <div className="col-md-4 mb-4" key={d.id}>
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">{d.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {d.shortDescription}
                </h6>
                <p className="card-text">
                  {d.fullDescription.substring(0, 100)}...
                </p>

                <Link to={`/department/${d.id}`} className="card-link">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default DepartmentCard
