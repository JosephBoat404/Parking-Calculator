import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from 'react';

function AccordionNav() {
  const [activeKey, setActiveKey] = useState('0');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveKey(null);
    }, 15000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)} flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span>{windowWidth <= 576 ? "Use Desktop to Access Full Page" : "Parking Calculator"}</span>
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
