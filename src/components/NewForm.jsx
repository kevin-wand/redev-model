// import React from "react";
// import { useHistory } from "react-router";
// import { useEffect, useState } from "react";
// import { createProject } from "../api";
// // import { Link } from "react-router-dom";

// const defaultObject = {
//   projectName: "",
//   initialInvestment: "",
//   additionalCapital: "",
//   annualRevenue: "",
//   annualExpense: "",
//   closingCost: "",
//   revenueGrowthRate: "",
//   expenseGrowthRate: "",
//   holdPeriod: "",
// };

// export default function NewForm(props) {
//   const { editForm, setEditForm } = props;

//   // const history = useHistory();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm((prevInput) => ({
//       ...prevInput,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const res = await createProject(editForm);
//   //   console.log(res);
//   // };
//   // history.push("/{route to push to}");
//   // console.log(input);
//   return (
//     <div>
//       <form className="newForm" onChange={handleChange} onSubmit={handleSubmit}>
//         <label htmlFor="projName">Project Name: </label>
//         <input
//           id="projName"
//           type="text"
//           name="projectName"
//           placeholder="Project Name"
//         />
//         <br />
//         <label htmlFor="initialInvestment">Initial Investment: </label>
//         <input
//           id="initialInvestment"
//           type="text"
//           name="initialInvestment"
//           placeholder="Initial Investment"
//         />
//         <br />
//         <label htmlFor="addCapital">Additional Capital: </label>
//         <input
//           id="addCapital"
//           type="text"
//           name="additionalCapital"
//           placeholder="Additional Capital"
//         />
//         <br />
//         <label htmlFor="holdPeriod">Hold Period: </label>
//         <input
//           id="holdPeriod"
//           type="number"
//           name="holdPeriod"
//           placeholder="Hold Period"
//         />
//         <br />
//         <label htmlFor="annualRev">Annual Revenue: </label>
//         <input
//           id="annualRev"
//           type="text"
//           name="annualRevenue"
//           placeholder="Annual Revenue"
//         />
//         <br />
//         <label htmlFor="annualExp">Annual Expense: </label>
//         <input
//           id="annualExp"
//           type="text"
//           name="annualExpense"
//           placeholder="Annual Expense"
//         />
//         <br />
//         <label htmlFor="closingCost">Closing Cost: </label>
//         <input
//           id="closingCost"
//           type="text"
//           name="closingCost"
//           placeholder="Closing Cost"
//         />
//         <br />
//         <label htmlFor="growthRev">Revenue Growth Rate: </label>
//         <input
//           id="growthRev"
//           type="text"
//           name="revenueGrowthRate"
//           placeholder="Revenue Growth Rate"
//         />
//         <br />
//         <label htmlFor="growthExp">Expense Growth Rate: </label>
//         <input
//           id="growthExp"
//           type="text"
//           name="expenseGrowthRate"
//           placeholder="Expense Growth Rate"
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
