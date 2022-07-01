import React, { Fragment } from "react";

import useCalendar from "../../hooks/useCalendar";
import "./Calendar.css";

const Calendar = () => {
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();

  const dateClickHandler = (date) => {
    console.log(date);
  };

  return (
    <Fragment>
      <p className="text-center text-xl font-bold text-accent my-7">
        Selected Month:{" "}
        {`${
          monthNames[selectedDate.getMonth()]
        } - ${selectedDate.getFullYear()}`}
      </p>
      <table className="table calendar-style">
        <div>
          <thead>
            <tr>
              {daysShort.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(calendarRows).map((cols) => {
              return (
                <tr key={cols[0].date}>
                  {cols.map((col) =>
                    col.date === todayFormatted ? (
                      <td
                        key={col.date}
                        className={`${col.classes} today`}
                        onClick={() => dateClickHandler(col.date)}
                      >
                        {col.value}
                      </td>
                    ) : (
                      <td
                        key={col.date}
                        className={col.classes}
                        onClick={() => dateClickHandler(col.date)}
                      >
                        {col.value}
                      </td>
                    )
                  )}
                </tr>
              );
            })}
          </tbody>
        </div>
        <div>
          <button className="btn btn-primary mr-3" onClick={getPrevMonth}>
            Prev
          </button>
          <button className="btn btn-secondary" onClick={getNextMonth}>
            Next
          </button>
        </div>
      </table>
    </Fragment>
  );
};

export default Calendar;
