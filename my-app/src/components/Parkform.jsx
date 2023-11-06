import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import DayInput from "./DayInput";
import SpendResult from "./SpendResult";
import Footer from "./Footer";
import FeeInput from "./FeeInput";
import Closebtn from "../Icons/closebtn.svg"

function Parkform() {
  // Initialize state for each day and additional hours
  const [showFeeInput, setShowFeeInput] = useState(false);
  const [PermitAmount, SetPermitAmount] = useState(260);
  const [numberOfWeeksInSemester, SetnumberOfWeeksInSemester] = useState(16);
  const [days, setDays] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    additionalHours: "",
  });
  document.addEventListener("wheel", function (event) {
    if (
      document.activeElement.type === "number" &&
      document.activeElement.classList.contains("noscroll")
    ) {
      document.activeElement.blur();
    }
  });
  const [max_Hour, Setmax_Hour] = useState(12);
  const [worth, setWorth] = useState("No");
  const [savings, setSavings] = useState(0);

  // Calculate parking fee based on hours
  const [fees, setFees] = useState([
    { maxHours: 0, fee: 0 },
    { maxHours: 1, fee: 2 },
    { maxHours: 2, fee: 4 },
    { maxHours: 6, fee: 8 },
    { maxHours: 8, fee: 10 },
  ]);

  const calculateFee = (hours) => {
    for (let i = 0; i < fees.length; i++) {
      if (hours <= fees[i].maxHours) {
        return fees[i].fee;
      }
    }

    return max_Hour; // default fee for hours > 8
  };

  // Calculate total money to pay
  const totalMoneyToPay = Object.values(days).reduce(
    (total, hours) => total + calculateFee(hours),
    0
  );

  // Calculate total cost for semester

  const totalCostForSemester = totalMoneyToPay * numberOfWeeksInSemester;
  let savingsAmount = 0;

  // Update worth based on total cost for semester
  useEffect(() => {
    setWorth(totalCostForSemester < PermitAmount ? "No" : "Yes");
    setSavings(
      totalCostForSemester === 0
        ? 0
        : (savingsAmount = Math.max(0, PermitAmount - totalCostForSemester))
    );
  }, [PermitAmount, totalCostForSemester]);

  // Handle the change of input value for each day
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDays((prevDays) => ({ ...prevDays, [name]: value }));
  };

  // Calculate total hours
  const totalHours = Object.values(days).reduce(
    (total, hours) => total + Number(hours),
    0
  );

  return (
    <>
      <Navbar onEditRateClick={() => setShowFeeInput(true)} />

      <div
        className="modal fade"
        id="feeInputModal"
        tabIndex="-1"
        aria-labelledby="feeInputModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border">
            <div className="modal-header p-2">
              <h5 className="modal-title " id="feeInputModalLabel">
                Edit Rate
              </h5>
              <button
                type="button"
                className="btn border m-0 p-1 closebtn"
                data-bs-dismiss="modal"
                aria-label="Close"
              > <img src={Closebtn} alt="" /></button>
            </div>
            <div>
              <FeeInput
                fees={fees}
                setFees={setFees}
                maxHour={max_Hour}
                setMaxHour={Setmax_Hour}
                PermitAmount={PermitAmount}
                SetPermitAmount={SetPermitAmount}
                numberOfWeeksInSemester={numberOfWeeksInSemester}
                SetnumberOfWeeksInSemester={SetnumberOfWeeksInSemester}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container p-3 mb-1">
        <div className="row">
          <div className="col justify-content-center d-flex lc">Day</div>
          <div className="col justify-content-center d-flex lc">Money</div>
          <div className="col justify-content-center d-flex lc">Hours</div>
        </div>
      </div>

      {Object.keys(days).map((day) => (
        <div key={day}>
          <DayInput
            label={day.charAt(0).toUpperCase() + day.slice(1)}
            hours={days[day]}
            onChange={handleChange}
            name={day}
            fee={calculateFee(days[day])}
          />
        </div>
      ))}

      <SpendResult
        Worth={worth}
        totalHours={totalHours}
        totalMoneyToPay={totalMoneyToPay}
        totalCostForSemester={totalCostForSemester}
        PermitAmount={PermitAmount}
        savingsAmount={savings}
      />

      <Footer />
    </>
  );
}

export default Parkform;
