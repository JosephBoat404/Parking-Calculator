// HelpPage.jsx

import React from "react";

function HelpPage() {
  return (
    <div className="container mt-5 text-white">
      <h1 className="mb-4">Help Center</h1>

      <section className="mb-4">
        <h2>Getting Started</h2>
        <p>
          Welcome to the Parking Fee Calculator! This tool helps you estimate your parking expenses for a semester and determine if purchasing a parking permit is worth it.
        </p>
        <p>
          Follow these steps to get started:
        </p>
        <ol>
          <li>Input the permit fee in the "Permit Amount" field.</li>
          <li>Set the maximum number of hours for each fee tier in the "Fee Input" section.</li>
          <li>Enter the number of weeks in the semester.</li>
          <li>For each day, input the hours you expect to spend on parking.</li>
          <li>Review the results at the bottom of the page.</li>
        </ol>
      </section>

      <section className="mb-4">
        <h2>Understanding the Results</h2>
        <p>
          The calculator will display the total money to pay based on the entered hours for each day. It also provides information on whether it's financially worth it to purchase a parking permit.
        </p>
        <p>
          Key Results:
        </p>
        <ul>
          <li><strong>Worth:</strong> Indicates whether it's financially worth it to purchase a permit.</li>
          <li><strong>Total Hours:</strong> Sum of hours entered for each day.</li>
          <li><strong>Total Money to Pay:</strong> Total parking fees for the semester.</li>
          <li><strong>Total Cost for Semester:</strong> Overall cost, considering the permit fee.</li>
          <li><strong>Savings Amount:</strong> Potential savings by purchasing a permit.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>Editing Input</h2>
        <p>
          To modify your inputs:
        </p>
        <ol>
          <li>Click the "Edit" button in the "Fee Input" section to adjust fee tiers.</li>
          <li>Update the values for the "Permit Amount" and "Number of Weeks in Semester."</li>
          <li>Change the hours for each day as needed.</li>
          <li>Review the updated results.</li>
        </ol>
      </section>

      <section className="mb-4">
        <h2>Additional Information</h2>
        <p>
          If you have any questions or need assistance, feel free to contact our support team at support@example.com.
        </p>
      </section>
    </div>
  );
}

export default HelpPage;
