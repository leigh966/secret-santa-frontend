import MethodRadios from "../components/MethodRadios";
import CreateSelfRegistered from "../components/CreateSelfRegistered";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";

Date.prototype.toSqlDate = function () {
  var pad = function (num) {
    return ("00" + num).slice(-2);
  };
  let date = new Date(this);
  date =
    date.getUTCFullYear() +
    "-" +
    pad(date.getUTCMonth() + 1) +
    "-" +
    pad(date.getUTCDate()) +
    " " +
    pad(date.getUTCHours()) +
    ":" +
    pad(date.getUTCMinutes()) +
    ":" +
    pad(date.getUTCSeconds());

  console.log("Sql date: " + date);
  return date;
};

function getBody(method, date, time) {
  const timeParts = time.split(":");
  date.setHours(timeParts[0]);
  date.setMinutes(timeParts[1]);
  if (method === "self")
    return <CreateSelfRegistered drawDate={date.toSqlDate()} />;
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

  return (
    <div>
      <MethodRadios method={method} setMethod={setMethod} />
      <label>Draw on:</label>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        minDate={startDate}
        selected={selectedDate}
        onChange={(date) => {
          date.setHours(0, 0, 0, 0);
          setSelectedDate(date);
        }}
      />
      at
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
      {getBody(method, selectedDate, selectedTime)}
    </div>
  );
}
