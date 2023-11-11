import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import DayInput from "./DayInput";
import SpendResult from "./SpendResult";
import Footer from "./Footer";
import FeeInput from "./FeeInput";

function Parkform() {
  const [explainM, setExplainM] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [PermitAmount, SetPermitAmount] = useState(260);
  const [max_Hour, Setmax_Hour] = useState(12);
  const [worth, setWorth] = useState("No");
  const [savings, setSavings] = useState(0);
  const [numberOfWeeksInSemester, SetnumberOfWeeksInSemester] = useState(16);
  const [days, setDays] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    additionalHours: "",
  });
  
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
    if (totalCostForSemester < PermitAmount) {
      setWorth("No");
      setExplainM(`After calculating, it appears that you will spend $${totalCostForSemester} on parking over a ${numberOfWeeksInSemester} week/s period, which is less than the $${PermitAmount} permit fee. This means you will save $${savings} in total.`);
    } else {
      setWorth("Yes");
      setExplainM(`After calculating, it appears that you will spend $${totalCostForSemester} on parking over a ${numberOfWeeksInSemester} week/s period, which is higher than the $${PermitAmount} permit fee.To avoid any additional expenses, obtain the permit.`);
    }
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
      <Navbar handleShowModal={handleShowModal} />

      <FeeInput
        fees={fees}
        setFees={setFees}
        maxHour={max_Hour}
        setMaxHour={Setmax_Hour}
        PermitAmount={PermitAmount}
        SetPermitAmount={SetPermitAmount}
        numberOfWeeksInSemester={numberOfWeeksInSemester}
        SetnumberOfWeeksInSemester={SetnumberOfWeeksInSemester}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      />

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
        ExplainModal={explainM}
      />

      <Footer />
    </>
  );
}

export default Parkform;
