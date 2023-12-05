import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from 'react';

function AccordionNav() {
  const [activeKey, setActiveKey] = useState('0');

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveKey(null); // Set to null to deactivate the accordion
    }, 6000); // Set to 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)} flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span>Parking Calculator</span>
        </Accordion.Header>
        <Accordion.Body className="text-center">
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
