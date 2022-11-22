import MethodRadios from "../components/MethodRadios";
import CreateSelfRegistered from "../components/CreateSelfRegistered";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "../DateExtention";
import FamilyModeForm from "../components/FamilyModeForm";

function getBody(method, date, time, groupNames) {
  const timeParts = time.split(":");
  date.setHours(timeParts[0]);
  date.setMinutes(timeParts[1]);
  if (method === "self")
    return (
      <CreateSelfRegistered
        drawDate={date.toSqlDate()}
        groupNames={Array.from(groupNames)}
      />
    );
  else return <p>Coming Soon</p>;
}

const addDays = function (date, days) {
  var newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export default function CreateGame() {
  let [method, setMethod] = useState("self");
  const today = () => {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  };

  const startDate = addDays(today(), method === "self");
  const [selectedDate, setSelectedDate] = useState(startDate);
  const [selectedTime, setTime] = useState("12:00");

  const [groupNames, setGroupNames] = new useState(new Set());

  return (
    <div>
      <h1>Create Draw</h1>
      <MethodRadios method={method} setMethod={setMethod} />
      <FamilyModeForm names={groupNames} setNames={setGroupNames} />
      <h3 id="drawDateHeading">Draw on:</h3>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        minDate={startDate}
        selected={selectedDate}
        onChange={(date) => {
          date.setHours(0, 0, 0, 0);
          setSelectedDate(date);
        }}
      />
      <label>at </label>
      <TimePicker
        minTime={
          selectedDate.getTime() != today().getTime()
            ? "00:00"
            : new Date().toLocaleTimeString("en-GB", {
                hour12: false,
                hour: "numeric",
                minute: "numeric",
              })
        }
        onChange={setTime}
        value={selectedTime}
      />
      {getBody(method, selectedDate, selectedTime, groupNames)}
    </div>
  );
}
