import React from "react";
import { useEffect, useState } from "react";
import { showPrevious, deleteProject } from "../api";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default function PrevResults() {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    const res = await showPrevious();
    setProjects(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProject(id);
    const project = projects.find((project) => (project.id = id));
    projects.splice(projects.indexOf(project), 1);
    setProjects([...projects]);
  };

  return (
    <div className="pr-container">
      <NavBar />

      <div className="pr-wrapper">
        <div className="pr-headers">
          <h4 className="pr-grid-1">Project Name</h4>
          <h4 className="pr-grid-2">Initial Investment</h4>
          <h4 className="pr-grid-3">Additional Capital</h4>
          <h4 className="pr-grid-4">Annual Revenue</h4>
          <h4 className="pr-grid-5">Annual Expense</h4>
          <h4 className="pr-grid-6">Closing Cost</h4>
          <h4 className="pr-grid-7">Revenue Growth</h4>
          <h4 className="pr-grid-8">Expense Growth</h4>
          <h4 className="pr-grid-9">Hold Period</h4>
          <h4 className="pr-grid-10">Cap Rate</h4>
          <h4 className="pr-grid-11">Edit Results</h4>
          <h4 className="pr-grid-12">Delete Results</h4>
        </div>
        {projects &&
          projects.map((project) => {
            return (
              <div key={project.id} className="prev-res">
                <p className="pr-grid-1">{project.fields.projectName}</p>
                <p className="pr-grid-2">
                  ${parseInt(project.fields.initialInvestment).toLocaleString()}
                </p>
                <p className="pr-grid-3">
                  ${parseInt(project.fields.additionalCapital).toLocaleString()}
                </p>
                <p className="pr-grid-4">
                  ${parseInt(project.fields.annualRevenue).toLocaleString()}
                </p>
                <p className="pr-grid-5">
                  ${parseInt(project.fields.annualExpense).toLocaleString()}
                </p>
                <p className="pr-grid-6">{project.fields.closingCost}%</p>
                <p className="pr-grid-7">{project.fields.revenueGrowthRate}%</p>
                <p className="pr-grid-8">{project.fields.expenseGrowthRate}%</p>
                <p className="pr-grid-9">{project.fields.holdPeriod}</p>
                <p className="pr-grid-10">{project.fields.capRate}%</p>
                <Link to={`/edit/pr/${project.id}`} className="pr-grid-11">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="pr-grid-12"
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
