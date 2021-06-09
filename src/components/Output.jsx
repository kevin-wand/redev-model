import React from "react";

export default function Output(props) {
  const { formData } = props;
  console.log(formData);

  let time = formData.holdPeriod;

  let yearArray = [];
  for (let j = 0; j <= time; j++) {
    yearArray.push(j);
  }

  let revArray = [];
  // loop over the time
  // if rev array is empty, then push annual revenue (initial revenue)
  // else for each year, push the previous year annual revenue * (1 + revenue growth rate)
  // need to track previous year revenue, can do this by accessing last index position of the rev array during loop

  for (let j = 0; j <= time; j++) {
    if (!revArray.length) {
      revArray.push(parseInt(formData.annualRevenue));
    } else {
      revArray.push(
        parseInt(revArray[j - 1] * (1 + parseFloat(formData.revenueGrowthRate)))
      );
    }
  }
  console.log(revArray);

  let yearStyles = (columnPosition) => {
    let styles = {
      gridRow: 1,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  let revStyles = (columnPosition) => {
    let styles = {
      gridRow: 2,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  return (
    <div className="output-container">
      {yearArray.map((e, index) => {
        return <p style={yearStyles(index)}>Yr {index}</p>;
      })}
      <p className="additionalCapital">Additional Capital:</p>
      <p className="initialInvestment">Initial Investment:</p>
      <p className="annualRevenue">Annual Revenue: </p>
      {revArray.map((e, index) => {
        return <p style={revStyles(index)}>{e}</p>;
      })}
      <p className="annualExpense">Annual Expense: </p>
      <p className="closingCost">Closing Cost: </p>
      <p className="revenueGrowthRate">Revenue Growth Rate:</p>
      <p className="expenseGrowthRate">Expense Growth Rate:</p>
      <p className="holdPeriod">Hold Period: </p>
    </div>
  );
}
// let data = {
//   year: 0,
//   rev: formData.annualRevenue,
//   exp: formData.annualExpense,
//   buy: formData.initialInvestment,
//   saleFees: formData.closingCost,
//   revG: formData.revenueGrowthRate,
//   expG: formData.expenseGrowthRate,
//   noi: 0,
//   salePrice: 0,
// };

// // console.log(data);
// // console.log(time);
//   data.year = data.year + 1;
//   data.noi = data.rev - data.exp;
//   data.rev = data.rev * (1 + parseInt(data.revG));
//   data.exp = data.exp * (1 + parseInt(data.expG));

// }
// console.log(yearArray);
// create a function
// take className
// dynamically place years in specific columns

// for (let i in formData) {
//   if (formData[i] === null) {

//   }
// }
// console.log(i + " " + formData[i]);
// <h2>Project Name: {formData.projectName}</h2>
// let arr = [];
// formData look through each item object
// mapping through objects / for in
// create rows
