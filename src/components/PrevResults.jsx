import React from "react";
import { useEffect, useState } from "react";
import { showPrevious, deleteProject } from "../api";
import { Link } from "react-router-dom";

export default function PrevResults() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await showPrevious();
      // console.log(res);
      setProject(res);
    };
    fetchData();
  }, []);

  const handleDelete = async (e) => {
    console.log(e.target.innerHTML);
    await deleteProject(e.target.innerHTML);
  };

  return (
    <div>
      {project &&
        project.map((input) => {
          return (
            <div key={input.id}>
              <h2>Project Name: {input.fields.projectName}</h2>
              <p>Initial Investment: {input.fields.initialInvestment}</p>
              <p>Additional Capital: {input.fields.additionalCapital}</p>
              <p>Annual Revenue: {input.fields.annualRevenue}</p>
              <p>Annual Expense: {input.fields.annualExpense}</p>
              <p>Closing Cost: {input.fields.closingCost}</p>
              <p>Revenue Growth Rate: {input.fields.revenueGrowthRate}</p>
              <p>Expense Growth Rate: {input.fields.expenseGrowthRate}</p>
              <p>Hold Period: {input.fields.holdPeriod}</p>
              <Link to={`/edit/pr/${input.id}`}>Edit</Link>
              <button onClick={handleDelete}>{input.id}</button>
            </div>
          );
        })}
    </div>
  );
}
