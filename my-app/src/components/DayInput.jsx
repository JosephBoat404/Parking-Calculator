import React, { useState, useEffect } from "react";

function DayInput({ label, hours, onChange, name, fee }) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startPeriod, setStartPeriod] = useState("AM");
  const [endPeriod, setEndPeriod] = useState("AM");

  const calculateHours = () => {
    let start = parseInt(startTime);
    let end = parseInt(endTime);

    if (startPeriod === "PM" && start !== 12) {
      start += 12;
    }
    if (endPeriod === "PM" && end !== 12) {
      end += 12;
    }
    if (startPeriod === "AM" && start === 12) {
      start = 0;
    }
    if (endPeriod === "AM" && end === 12) {
      end = 0;
    }

    let calculatedHours = end - start;

    if (calculatedHours < 0) {
      calculatedHours += 24;
    }

    onChange({ target: { name, value: calculatedHours.toString() } });
  };

  useEffect(() => {
    if (startTime !== "" && endTime !== "") {
      calculateHours();
    }
  }, [startTime, endTime, startPeriod, endPeriod]);

  const handleInputChange = (event) => {
    const inputString = event.target.value;
    if (parseInt(inputString, 10) > 24 || inputString.length > 2) {
      onChange({ target: { name, value: 24 } });
    } else {
      onChange(event);
    }
  };

  const toggleStartPeriod = () => {
    setStartPeriod(startPeriod === "AM" ? "PM" : "AM");
  };

  const toggleEndPeriod = () => {
    setEndPeriod(endPeriod === "AM" ? "PM" : "AM");
  };

  return (
    <div className="container cb rounded p-3 mb-4 fade-in">
      <div className="row">
        <div className="col justify-content-center d-flex align-items-center">
          <label htmlFor={name}>{label}</label>
        </div>
        <div className="col justify-content-center d-flex align-items-center">
          <div>${fee}</div>
        </div>
        <div className="col justify-content-center d-flex align-items-center">
          <form className="">
            <input
              className="noscroll hoursdisplay rounded"
              type="number"
              id={name}
              name={name}
              value={hours}
              onChange={handleInputChange}
              min="0"
              max="24"
              placeholder="0"
            />
          </form>
          <form className="rounded formChange align-items-center">
            <input
              className="nodefualt noscroll"
              type="number"
              id={`${name}-start-time`}
              name={`${name}-start-time`}
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              min="1"
              max="12"
              placeholder="0"
            />
            <button type="button" className="PMAM" onClick={toggleStartPeriod}>
              {startPeriod}
            </button>
          </form>
          <div className="d-flex align-items-center text-center m-1 IsTo">To</div>
          <form className="rounded formChange">
            <input
              className="nodefualt noscroll"
              type="number"
              id={`${name}-end-time`}
              name={`${name}-end-time`}
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              min="1"
              max="12"
              placeholder="0"
            />
            <button type="button" className="PMAM" onClick={toggleEndPeriod}>
              {endPeriod}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DayInput;
