// HelpPage.jsx

import React from "react";

function HelpPage() {
  return (
    <div className="container mt-5 text-white fade-in">
      <h1 className="mb-4">Help Center</h1>

      <section className="mb-4">
        <h2>Getting Started</h2>
        <p>
          Welcome to the Parking Fee Calculator! This tool helps you estimate
          your parking expenses for a semester and determine if purchasing a
          parking permit is worth it.
        </p>
        <p>Follow these steps to get started:</p>
        <ol>
          <li>For each day, input the hours you expect to spend on parking or specify the start and end times for parking.</li>
          <li>Review the results at the bottom of the page.</li>
          <li>
            You can enter your desired parking rate, permit amount, and expected
            number of weeks you will be parking. Instructions are in the{" "}
            <a href="#EditRateSection">Editing Rate Section.</a>
          </li>
        </ol>
      </section>

      <section className="mb-4">
        <h2>Understanding the Results</h2>
        <p>
          The calculator will display the total money that you will spend on
          parking based on the entered hours for each day. It also provides
          information on whether it's financially worth it to purchase a parking
          permit.
        </p>
        <p>Key Results:</p>
        <ul>
          <li>
            <strong>Weekly Hours:</strong> Sum of hours entered for each day.
          </li>
          <li>
            <strong>Weekly Expenses:</strong> Total parking expenses per week.
          </li>
          <li>
            <strong>Semester Expenses:</strong> Total cost multiplied by number
            of week/s.
          </li>
          <li>
            <strong>Savings:</strong> Potential savings by purchasing a permit.
          </li>
          <li>
            <strong>Get the $260 Permit?:</strong> Indicates whether it's
            financially worth it to purchase a permit.
          </li>
        </ul>
      </section>

      <section className="mb-4" id="EditRateSection">
        <h2>Editing Rate</h2>
        <p>To modify your inputs:</p>
        <ol>
          <li>
            Click the "Edit Rate" button in the Navbar to adjust fee tiers.
            Below is a visualization example of how to adjust fee tiers.
          </li>
          <div style={{ maxWidth: "50%", float: "left" }} className="mt-4">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0 hour</td>
                  <td>FREE</td>
                </tr>
                <tr>
                  <td>1 hour</td>
                  <td>$2</td>
                </tr>
                <tr>
                  <td>1 - 2 hours</td>
                  <td>$4</td>
                </tr>
                <tr>
                  <td>2 - 6 hours</td>
                  <td>$8</td>
                </tr>
                <tr>
                  <td>6 - 8 hours</td>
                  <td>$10</td>
                </tr>
                <tr>
                  <td>Up to 24 hours/Max</td>
                  <td>$12</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ clear: "both" }}></div>
          <li>
            The "Add" and "Remove" buttons are used to add additional input for
            more customization.
          </li>
          <li>
            Update the values for the "Permit Amount" and "Number of Weeks in
            Semester."
          </li>
          <li>Change the hours for each day as needed.</li>
          <li>Review the updated results.</li>
          <li>All edits are saved automatically.</li>
        </ol>
      </section>

      <section className="mb-4">
        <h2>Additional Information</h2>
        <p>
          If you have any questions or need further assistance, don't hesitate
          to reach out to our support team. You can find our contact information
          on this site.
        </p>
      </section>
    </div>
  );
}

export default HelpPage;
