import React, { useState, useEffect } from "react";

const CalculatorBrain = ({
  onTotalHoursChange,
  onTotalMoneyToPayChange,
  onTotalCostForSemesterChange,
}) => {
  const [monday, setMonday] = useState(0);
  const [tuesday, setTuesday] = useState(0);
  const [wednesday, setWednesday] = useState(0);
  const [thursday, setThursday] = useState(0);
  const [friday, setFriday] = useState(0);
  const [additionalHours, setAdditionalHours] = useState(0);

  const calculateFee = (hours) => {
    if (hours <= 0.5) {
        return 0; // FREE for the first 30 minutes
      } else if (hours <= 1) {
        return 2; // $2 for 31-60 minutes
      } else if (hours <= 2) {
        return 4; // $4 for 1-2 hours
      } else if (hours <= 6) {
        return 8; // $8 for 2-6 hours
      } else if (hours <= 8) {
        return 10; // $10 for 6-8 hours
      } else {
        return 12; // $12 for up to 24 hours
      }
  };

  const updateTotalValues = () => {
    const totalHours =
      Number(monday) +
      Number(tuesday) +
      Number(wednesday) +
      Number(thursday) +
      Number(friday) +
      Number(additionalHours);

    const totalMoneyToPay =
      calculateFee(monday) +
      calculateFee(tuesday) +
      calculateFee(wednesday) +
      calculateFee(thursday) +
      calculateFee(friday) +
      calculateFee(additionalHours);

    const numberOfWeeksInSemester = 16;
    const totalCostForSemester = totalMoneyToPay * numberOfWeeksInSemester;

    onTotalHoursChange(totalHours);
    onTotalMoneyToPayChange(totalMoneyToPay);
    onTotalCostForSemesterChange(totalCostForSemester);
  };

  useEffect(updateTotalValues, [
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    additionalHours,
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "monday":
        setMonday(value);
        break;
      case "tuesday":
        setTuesday(value);
        break;
      case "wednesday":
        setWednesday(value);
        break;
      case "thursday":
        setThursday(value);
        break;
      case "friday":
        setFriday(value);
        break;
      case "additionalHours":
        setAdditionalHours(value);
        break;
      default:
        break;
    }
  };

  return null;
};

export default CalculatorBrain;
