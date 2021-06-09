import React from "react";
import { useParams, useHistory } from "react-router";
import { useEffect } from "react";
import { createProject, editProject } from "../api";

export default function EditForm(props) {
  const { editForm, setEditForm, fetchProject, type } = props;

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (type === "newForm") {
      setEditForm && setEditForm({});
      history.push("/new");
    } else {
      fetchProject && fetchProject(id);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "filledForm") {
      await editProject(id, editForm);
    } else await createProject(editForm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className="newForm" onChange={handleChange} onSubmit={handleSubmit}>
        <label htmlFor="projName">Project Name: </label>
        <input
          id="projName"
          type="text"
          name="projectName"
          value={editForm.projectName}
        />
        <br />
        <label htmlFor="initialInvestment">Initial Investment: </label>
        <input
          id="initialInvestment"
          type="number"
          name="initialInvestment"
          value={editForm.initialInvestment}
        />
        <br />
        <label htmlFor="addCapital">Additional Capital: </label>
        <input
          id="addCapital"
          type="number"
          name="additionalCapital"
          value={editForm.additionalCapital}
        />
        <br />
        <label htmlFor="holdPeriod">Hold Period: </label>
        <input
          id="holdPeriod"
          type="number"
          name="holdPeriod"
          value={editForm.holdPeriod}
        />
        <br />
        <label htmlFor="annualRev">Annual Revenue: </label>
        <input
          id="annualRev"
          type="number"
          name="annualRevenue"
          value={editForm.annualRevenue}
        />
        <br />
        <label htmlFor="annualExp">Annual Expense: </label>
        <input
          id="annualExp"
          type="number"
          name="annualExpense"
          value={editForm.annualExpense}
        />
        <br />
        <label htmlFor="closingCost">Closing Cost: </label>
        <input
          id="closingCost"
          type="number"
          name="closingCost"
          value={editForm.closingCost}
        />
        <br />
        <label htmlFor="growthRev">Revenue Growth Rate: </label>
        <input
          id="growthRev"
          type="number"
          name="revenueGrowthRate"
          value={editForm.revenueGrowthRate}
        />
        <br />
        <label htmlFor="growthExp">Expense Growth Rate: </label>
        <input
          id="growthExp"
          type="number"
          name="expenseGrowthRate"
          value={editForm.expenseGrowthRate}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
