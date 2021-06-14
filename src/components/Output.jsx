import React from "react";

export default function Output(props) {
  const { formData } = props;
  let time = formData.holdPeriod;

  // =======================================================
  // ================= OUTPUT CALCULATION ==================
  // =======================================================

  let yearArray = [];
  for (let j = -1; j <= time; j++) {
    yearArray.push(j);
  }

  let revArray = [];
  for (let j = 0; j <= time; j++) {
    if (!revArray.length) {
      revArray.push(parseInt(formData.annualRevenue));
    } else {
      revArray.push(
        parseInt(
          revArray[j - 1] * (1 + parseFloat(formData.revenueGrowthRate / 100))
        )
      );
    }
  }

  let expArray = [];
  for (let j = 0; j <= time; j++) {
    if (!expArray.length) {
      expArray.push(parseInt(formData.annualExpense));
    } else {
      expArray.push(
        parseInt(
          expArray[j - 1] * (1 + parseFloat(formData.expenseGrowthRate / 100))
        )
      );
    }
  }

  let noiArray = [];
  for (let j = 0; j <= time; j++) {
    if (!noiArray.length) {
      noiArray.push(
        parseInt(formData.annualRevenue) - parseInt(formData.annualExpense)
      );
    } else {
      noiArray.push(
        parseInt(
          revArray[j - 1] * (1 + parseFloat(formData.revenueGrowthRate / 100))
        ) -
          parseInt(
            expArray[j - 1] * (1 + parseFloat(formData.expenseGrowthRate / 100))
          )
      );
    }
  }

  let addCapArray = [];
  for (let j = 0; j < time; j++) {
    if (!addCapArray.length) {
      addCapArray.push(parseInt(-formData.additionalCapital));
    } else {
      addCapArray.push(parseInt(addCapArray[j - 1]));
    }
  }

  let saleArray = [];
  for (let j = 0; j <= time; j++) {
    if (!saleArray.length) {
      saleArray.push("");
    } else if (j < time) {
      saleArray.push("");
    } else {
      saleArray.push(
        parseInt(noiArray[j] / parseFloat(formData.capRate / 100))
      );
    }
  }

  let feeArray = [];
  for (let j = 0; j <= time; j++) {
    if (j < time) {
      feeArray.push("");
    } else {
      feeArray.push(saleArray[j] * parseFloat(formData.closingCost / 100));
    }
  }

  let cashArray = isNaN(formData.initialInvestment)
    ? [0]
    : [-parseInt(formData.initialInvestment)];
  for (let j = 0; j <= time; j++) {
    if (j === 0) {
      cashArray.push(
        parseInt(formData.annualRevenue) -
          parseInt(formData.annualExpense) -
          parseInt(formData.additionalCapital)
      );
    } else if (j > 0 && j + 1 < time) {
      cashArray.push(
        parseInt(
          revArray[j - 1] * (1 + parseFloat(formData.revenueGrowthRate / 100))
        ) -
          parseInt(
            expArray[j - 1] * (1 + parseFloat(formData.expenseGrowthRate / 100))
          ) +
          parseInt(addCapArray[j - 1])
      );
    } else if (j < time) {
      cashArray.push(
        parseInt(
          revArray[j - 1] * (1 + parseFloat(formData.revenueGrowthRate / 100))
        ) -
          parseInt(
            expArray[j - 1] * (1 + parseFloat(formData.expenseGrowthRate / 100))
          ) +
          parseInt(addCapArray[j - 1]) +
          parseInt(noiArray[j + 1] / parseFloat(formData.capRate / 100)) -
          parseInt(noiArray[j + 1] / parseFloat(formData.capRate / 100)) *
            parseFloat(formData.closingCost / 100)
      );
    }
  }

  const reducer = (a, b) => a + b;
  let profit = cashArray.reduce(reducer).toFixed(0);
  let roi = parseFloat(1 + profit / formData.initialInvestment).toFixed(2);

  profit = isNaN(profit) ? "" : isNaN(parseInt(profit)) ? "n/a" : profit;
  roi = isNaN(roi) ? "n/a" : roi + "x";

  // =======================================================
  // ============= COLUMN POSITION FOR OUTPUT ==============
  // =======================================================

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
      gridColumn: columnPosition + 3,
    };
    return styles;
  };

  let expStyles = (columnPosition) => {
    let styles = {
      gridRow: 3,
      gridColumn: columnPosition + 3,
    };
    return styles;
  };

  let noiStyles = (columnPosition) => {
    let styles = {
      gridRow: 4,
      gridColumn: columnPosition + 3,
    };
    return styles;
  };

  let initInvestStyles = (columnPosition) => {
    let styles = {
      gridRow: 7,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  let addCapStyles = (columnPosition) => {
    let styles = {
      gridRow: 8,
      gridColumn: columnPosition + 3,
    };
    return styles;
  };

  let saleStyles = (columnPosition) => {
    let styles = {
      gridRow: 9,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  let feeStyles = (columnPosition) => {
    let styles = {
      gridRow: 10,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  let cashStyles = (columnPosition) => {
    let styles = {
      gridRow: 11,
      gridColumn: columnPosition + 2,
    };
    return styles;
  };

  return (
    <div className="output-profit-wrapper">
      <div className="output-container">
        {yearArray.map((e, index) => {
          return (
            <p style={yearStyles(index)} key={index}>
              <strong>
                {parseInt(index) === parseInt(time) + 1
                  ? "Valuation"
                  : "Yr " + index}
              </strong>
            </p>
          );
        })}
        <p className="annualRevenue">
          <strong>Annual Revenue</strong>
        </p>
        {revArray.map((e, index) => {
          return (
            <p className="output-numbers" style={revStyles(index)} key={index}>
              ${parseInt(e).toLocaleString()}
            </p>
          );
        })}
        <p className="annualExpense">
          <strong>Annual Expense</strong>
        </p>
        {expArray.map((e, index) => {
          return (
            <p className="output-numbers" style={expStyles(index)} key={index}>
              ${parseInt(e).toLocaleString()}
            </p>
          );
        })}
        <p className="annualNoi">
          <strong>Net Operating Income</strong>
        </p>
        {noiArray.map((e, index) => {
          return (
            <p className="output-numbers" style={noiStyles(index)} key={index}>
              ${parseInt(e).toLocaleString()}
            </p>
          );
        })}
        <p className="initialInvestment">
          <strong>Initial Investment</strong>
        </p>
        <p className="output-numbers" style={initInvestStyles()}>
          ${parseInt(formData.initialInvestment).toLocaleString()}
        </p>
        <p className="additionalCapital">
          <strong>Additional Capital</strong>
        </p>
        {addCapArray.map((e, index) => {
          return (
            <p
              className="output-numbers"
              style={addCapStyles(index)}
              key={index}
            >
              ${parseInt(e).toLocaleString()}
            </p>
          );
        })}
        <p className="salePrice">
          <strong>Sale Price</strong>
        </p>
        {saleArray.map((e, index) => {
          return (
            <p className="output-numbers" style={saleStyles(index)} key={index}>
              {e === "" ? "" : `$${parseInt(e).toLocaleString()}`}
            </p>
          );
        })}
        <p className="closingCost">
          <strong>Closing Cost</strong>
        </p>
        {feeArray.map((e, index) => {
          return (
            <p className="output-numbers" style={feeStyles(index)} key={index}>
              {e === "" ? "" : `$${parseInt(e).toLocaleString()}`}
            </p>
          );
        })}
        <p className="cashFlow">
          <strong>Total Cash Flow</strong>
        </p>
        {cashArray &&
          cashArray.map((e, index) => {
            return (
              <p
                className="output-numbers"
                style={cashStyles(index)}
                key={index}
              >
                ${parseInt(e).toLocaleString()}
              </p>
            );
          })}
        <div className="row-colors"></div>
      </div>
      <div className="profit-container">
        <div className="profit-label">
          <strong>Investor Profit</strong>
        </div>
        <div className="profit-number">
          ${parseInt(profit).toLocaleString()}
        </div>
        <div className="roi-label">
          <strong>Return on Investment</strong>
        </div>
        <div className="roi-number">{roi}</div>
      </div>
    </div>
  );
}
