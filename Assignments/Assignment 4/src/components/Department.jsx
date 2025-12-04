import React from "react";
import department from "../data/department.json";
import DepartmentCard from "./DepartmentCard";

const Department = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Departments</h2>

      <div className="row">
        {department.map((dept) => (
          <DepartmentCard
            key={dept.id}
            id={dept.id}
            name={dept.name}
            desc={dept.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Department;
