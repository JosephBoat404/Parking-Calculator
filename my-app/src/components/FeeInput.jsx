import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import Closebtn from "../Icons/closebtn.svg";
import TrashIcon from "../Icons/TrashIcon.svg";
import AddMoreInput from "../Icons/AddMoreInput.svg";

function FeeInput({
  fees,
  setFees,
  maxHour,
  setMaxHour,
  PermitAmount,
  SetPermitAmount,
  numberOfWeeksInSemester,
  SetnumberOfWeeksInSemester,
  showModal,
  handleCloseModal,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newFees = [...fees];
    if (
      (name === "maxHours" && (value === "" || (value <= 24 && !isNaN(value)))) ||
      (name === "fee" && (value === "" || !isNaN(value)))
    ) {
      newFees[index][name] = value === "" ? "" : parseFloat(value);
      setFees(newFees);
    }
    setIsSaved(false);
    showSavedMessage();
  };

  const handleBlur = (event, index) => {
    const { name, value } = event.target;
    const isDuplicate = fees.some(
      (fee, i) => i !== index && fee[name] === parseFloat(value)
    );
    if (isDuplicate) {
      alert("Duplicate number is not allowed.");
      const newFees = [...fees];
      newFees[index][name] = ""; // Reset the value
      setFees(newFees);
    }

  };
  const handleMaxHourChange = (event) => {
    const value = event.target.value;
    if (value === "" || !isNaN(value)) {
      setMaxHour(value === "" ? "" : Number(value));
    }
  };
  const handlePermitAmountChange = (event) => {
    const value = event.target.value;
    if (value === "" || !isNaN(value)) {
      SetPermitAmount(value === "" ? "" : Number(value));
    }
  };
  const handleWeeksChange = (event) => {
    const value = event.target.value;
    if (value === "" || !isNaN(value)) {
      SetnumberOfWeeksInSemester(value === "" ? "" : Number(value));
    }
  };
  const handleAddFee = () => {
    setFees([...fees, { maxHours: "", fee: "" }]);
  };

  const handleRemoveFee = () => {
    if (fees.length > 5) {
      const newFees = [...fees];
      newFees.pop();
      setFees(newFees);
    } else {
      alert("You cannot remove the existing form.");
    }
  };
  const showSavedMessage = () => {
    setIsSaved(true);
    // Automatically hide the "Saved..." message after 2000 milliseconds (2 seconds)
    setTimeout(hideSavedMessage, 2000);
  };
  const hideSavedMessage = () => {
    setIsSaved(false);
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header className="d-flex justify-content-between align-items-center p-2">
          <Modal.Title>Edit Rate</Modal.Title>

          <div>
          {isSaved && <span className="text-success btn btn-outline-light">Saved</span>}
            
            <button
              className="btn btn-outline-light addremove m-1"
              onClick={handleRemoveFee}
            >
              <img src={TrashIcon} alt="Remove" />
            </button>
            <button
              className="btn btn-outline-light addremove m-1"
              onClick={handleAddFee}
            >
              <img src={AddMoreInput} alt="Add" />
              
            </button>
            <button
              type="button"
              className="btn m-1 p-1 closebtn btn-outline-light"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            >
              <img src={Closebtn} alt="Close button" />
            </button>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col p-1 mb-1 bg-primary-subtle cc">
                <div className="row p-1">
                  <div className="col text-center">Duration</div>
                  <div className="col text-center">Fee</div>
                </div>

                {fees.map((fee, index) => (
                  <div className="row p-1" key={index}>
                    <div className="col">
                      <div className="input-group">
                        <input
                          type="number"
                          name="maxHours"
                          value={fee.maxHours}
                          onChange={(event) => handleChange(event, index)}
                          onBlur={(event) => handleBlur(event, index)}
                          className="form-control form-control-sm noscroll focus-ring focus-ring-light"
                          disabled={index === 0}
                          id={`inputGroupFile01_${index}`}
                        />
                        <label
                          className="dollarsign p-2 border"
                          htmlFor={`inputGroupFile01_${index}`}
                        >
                          Hour/s
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="input-group">
                        <label
                          className="dollarsign p-2 border"
                          htmlFor={`inputGroupFile01_${index}`}
                        >
                          $
                        </label>
                        <input
                          type="number"
                          name="fee"
                          value={fee.fee}
                          onChange={(event) => handleChange(event, index)}
                          className="form-control form-control-sm noscroll focus-ring focus-ring-dark"
                          onBlur={(event) => handleBlur(event, index)}
                          disabled={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mb-3"></div>
                <div className="row p-1">
                  <div className="col text-center d-flex justify-content-center align-items-center ">
                    Permit Amount
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <label
                        className="dollarsign p-2  border"
                        htmlFor="permdollar"
                      >
                        $
                      </label>
                      <input
                        type="number"
                        name="PermitAmount"
                        value={PermitAmount}
                        onChange={handlePermitAmountChange}
                        className="form-control form-control-sm noscroll"
                        id="permdollar"
                      />
                    </div>
                  </div>
                </div>

                <div className="row p-1">
                  <div className="col d-flex justify-content-center align-items-center">
                    Weeks
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <input
                        type="number"
                        name="numberOfWeeksInSemester"
                        value={numberOfWeeksInSemester}
                        onChange={handleWeeksChange}
                        className="form-control form-control-sm noscroll"
                        id="semesterword"
                      />
                      <label
                        className="dollarsign p-2 border"
                        htmlFor="semesterword"
                      >
                        Week/s
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row p-1">
                  <div className="col d-flex justify-content-center align-items-center ">
                    Max Amount
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <label
                        className="dollarsign p-2 border"
                        htmlFor="hoursign"
                      >
                        $
                      </label>
                      <input
                        type="number"
                        name="maxHour"
                        value={maxHour}
                        onChange={handleMaxHourChange}
                        className="form-control form-control-sm noscroll"
                        id="hoursign"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FeeInput;
