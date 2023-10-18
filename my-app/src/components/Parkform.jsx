import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import Navbar from "./Navbar";
import DayInput from "./DayInput";
import SpendResult from "./SpendResult";
import Footer from "./Footer";

function Parkform() {
  // Initialize state for each day and additional hours
  const [days, setDays] = useState({
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    additionalHours: "",
  });
  
  
  const [worth, setWorth] = useState("Yes");

  // Calculate parking fee based on hours
  const calculateFee = (hours) => {
    if (hours <= 0.5) return 0;
    if (hours <= 1) return 2;
    if (hours <= 2) return 4;
    if (hours <= 6) return 8;
    if (hours <= 8) return 10;
    return 12;
  };

  // Calculate total money to pay
  const totalMoneyToPay = Object.values(days).reduce((total, hours) => total + calculateFee(hours), 0);
  
  // Calculate total cost for semester
  const PermitAmount=260;
  const numberOfWeeksInSemester = 16;
  const totalCostForSemester = totalMoneyToPay * numberOfWeeksInSemester;

  // Update worth based on total cost for semester
  useEffect(() => {
    setWorth(totalCostForSemester < PermitAmount ? "No" : "Yes");
  }, [totalCostForSemester]);

  
   // Handle the change of input value for each day
   const handleChange = (event) => {
     const { name, value } = event.target;
     setDays(prevDays => ({ ...prevDays, [name]: value }));
   };

   // Calculate total hours
   const totalHours = Object.values(days).reduce((total, hours) => total + Number(hours), 0);

   return (
     <>
       <Navbar />

       <div className="container p-3 mb-1">
         <div className="row">
           <div className="col justify-content-center d-flex lc">Day</div>
           <div className="col justify-content-center d-flex lc">Money</div>
           <div className="col justify-content-center d-flex lc">Hours</div>
         </div>
       </div>

      {Object.keys(days).map((day) => (
        <motion.div
          key={day}
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <DayInput
            label={day.charAt(0).toUpperCase() + day.slice(1)}
            hours={days[day]}
            onChange={handleChange}
            name={day}
            fee={calculateFee(days[day])}
          />
        </motion.div>
      ))}


       <SpendResult
         Worth={worth}
         totalHours={totalHours}
         totalMoneyToPay={totalMoneyToPay}
         totalCostForSemester={totalCostForSemester}
         PermitAmount={PermitAmount}
       />

       <Footer />

     </>
   );
}

export default Parkform;