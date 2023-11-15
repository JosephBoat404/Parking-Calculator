import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import helpicon from "../Icons/helpicon.svg";
import "./My_Utilities.js";
import Closebtn from "../Icons/closebtn.svg";

function SpendResult({
  totalHours,
  totalMoneyToPay,
  totalCostForSemester,
  Worth,
  PermitAmount,
  savingsAmount,
  ExplainModal,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container rounded -sm p-3 ps-0 pe-0 mb-4 bg-primary-subtle cc border">
      <table className="table table-dark table-hover ct">
        <tbody>
          <tr>
            <th className="text-center ct adjfont">Weekly Hours</th>
            <td className="text-center ct">
              <label>{totalHours}hr</label>
            </td>
          </tr>
          <tr>
            <th className="text-center ct adjfont">Weekly Expenses</th>
            <td className="text-center ct">
              <label>${totalMoneyToPay}</label>
            </td>
          </tr>
          <tr>
            <th className="text-center ct adjfont">Semester Expenses</th>
            <td className="text-center ct">
              <label>${totalCostForSemester}</label>
            </td>
          </tr>
          <tr>
            <th className="text-center ct adjfont">Savings</th>
            <td className="text-center ct">
              <label>${savingsAmount}</label>
            </td>
          </tr>
          <tr>
            <th className="text-center moneyUi ct">
              Get the <span className="AmountIndic">${PermitAmount}</span>{" "}
              Permit?
            </th>
            <td className="text-center ct">
              <label className="moneyUi">{Worth}</label>
              <button className="mybtn" onClick={handleShow}>
                <img
                src={helpicon}
                alt="help icon"
                className="helpbtn"
                title="Click to See Why"
              /></button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="p-2">
                  <Modal.Title>Help</Modal.Title>
                  <button
                    type="button"
                    className="btn m-0 p-1 closebtn btn-outline-light"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                  >
                    <img src={Closebtn} alt="Close button" />
                  </button>
                </Modal.Header>
                <Modal.Body>{ExplainModal}</Modal.Body>
              </Modal>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SpendResult;
