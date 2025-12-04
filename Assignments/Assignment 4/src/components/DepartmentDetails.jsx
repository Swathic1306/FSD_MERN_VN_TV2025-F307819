import React from "react";
import { useParams } from "react-router-dom";
import department from "../data/department.json";

const DepartmentDetails = () => {
  const { id } = useParams();
  const dept = department.find((d) => d.id === id);

  return (
    <div className="container my-5">
      <h2>{dept.name}</h2>
      <p>{dept.fullDescription}</p>

      <h4 className="mt-4">Courses Offered</h4>
      <ul>
        {dept.courses.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <h4 className="mt-4">Faculty Members</h4>
      <ul>
        {dept.faculty.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h4 className="mt-4">Labs & Facilities</h4>
      <ul>
        {dept.labs.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentDetails;
