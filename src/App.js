import "./styles.css";
import ScheduleSelector from "react-schedule-selector";
import * as React from "react";

export default function App() {
  const [schedule, setSchedule] = React.useState([]);
  const startDate = new Date("2022-09-25T14:27:01.444Z");
  return (
    <div className="App">
      <h2>Enter your availability</h2>
      <div>
      <div class = "text"><div class='box pink'></div>: Unavailable </div>
      </div>
      <br />
      <div>
      <div class = "text"><div class='box green'></div>: Available</div>
      </div>
      
      <h3>Click and drag to toggle; your selections are saved automatically</h3>
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
        timeFormat={'h:mma'}
        dateFormat={'MM/D dddd'}
        // set selected, hovered (green), and unselected (pink) colors
        unselectedColor={'rgba(255,228,225)'}
        selectedColor={'rgba(34,139,34)'}
        hoveredColor={'rgba(0,128,0)'}
        onChange={setSchedule}
      />
    </div>
  );
}
