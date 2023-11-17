import Accordion from "react-bootstrap/Accordion";

function AccordionNav() {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span className="animate-character">Parking Calculator</span>
        </Accordion.Header>
        <Accordion.Body>
          Welcome to our Parking Cost Calculator! Estimate your semester parking
          costs by entering your daily parking hours. The app will compare these costs with a
          parking permit to find the most economical option. Customize fees and
          gain insights to make the best choice. Start saving on parking now.
          Happy calculating!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionNav;
