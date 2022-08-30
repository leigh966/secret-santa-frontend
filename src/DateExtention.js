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
