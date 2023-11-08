import React from "react";
import helpicon from "../Icons/helpicon.svg";
import My_Utilities from "./My_Utilities.js";

function SpendResult({
  totalHours,
  totalMoneyToPay,
  totalCostForSemester,
  Worth,
  PermitAmount,
  savingsAmount
}) {
  return (
    <div className="container rounded -sm p-3 ps-0 pe-0 mb-4 bg-primary-subtle cc border">
      <table className="table table-dark table-hover ct">
        <tbody>
          <tr>
            <th className="text-center ct adjfont" >Weekly Hours</th>
            <td className="text-center ct" >
              <label>{totalHours}hr</label>
            </td>
          </tr>
          <tr>
            <th className="text-center ct adjfont" >Weekly Pay</th>
            <td className="text-center ct" >
              <label>${totalMoneyToPay}</label>
            </td>
          </tr>
          <tr>
            <th className="text-center ct adjfont" >Semester Pay</th>
            <td className="text-center ct" >
              <label>${totalCostForSemester}</label>
            </td>
          </tr>


          <tr>
            <th className="text-center ct adjfont" >Saving</th>
            <td className="text-center ct" >
              <label>${savingsAmount}</label>
            </td>
          </tr>

          <tr>
            <th className="text-center moneyUi ct" >Get the <span className="AmountIndic">${PermitAmount}</span> Permit?</th>
            <td className="text-center ct" >
              <label className="moneyUi ps-2">{Worth}</label><img src={helpicon} alt="help icon" className="ps-1 helpbtn" /> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SpendResult;
