import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/fontawesome-free-solid";
import { Alert, Container, Nav, Navbar } from "react-bootstrap";
import ScheduleSelector from "react-schedule-selector";
import * as React from "react";

export default function App() {
  const [schedule, setSchedule] = React.useState([]);
  const startDate = new Date("2022-09-25T14:27:01.444Z");
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav defaultActiveKey="/">
            <Nav.Item as="li">
              <Nav.Link href="/">
                <FontAwesomeIcon icon={faCalendar} /> When2Meet App
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <br />

      <Alert variant="info"style={{margin: "auto"}} className="w-25 p-3">
        <h2>Enter your availability</h2>
        <div>
          <div className="text">
            <div className="box pink"></div>: Unavailable{" "}
          </div>
          <br />
          <div className="text">
            <div className="box green"></div>: Available
          </div>
        </div>
      </Alert>

      <br />

      <h3>Click and drag to toggle; your selections are saved automatically</h3>
      <Container className="w-50">
        <ScheduleSelector
          selection={schedule}
          startDate={startDate}
          // Allow selection from 5 days
          numDays={5}
          // Set available times from 9am-5pm
          minTime={9}
          maxTime={17}
          // Use 15 min intervals
          hourlyChunks={4}
          timeFormat={"h:mma"}
          dateFormat={"MM/D dddd"}
          // set selected, hovered (green), and unselected (pink) colors
          unselectedColor={"rgba(255,228,225)"}
          selectedColor={"rgba(34,139,34)"}
          hoveredColor={"rgba(0,128,0)"}
          onChange={setSchedule}
        />
      </Container>
    </div>
  );
}
