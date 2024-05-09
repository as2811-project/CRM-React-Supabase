import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import "../theme.css";

export const Calendar = () => {
  // State for current date and selected date
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to get the days of the current month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  // Function to handle date selection
  const handleDateClick = (date) => {
    setSelectedDate(date);
    // You can perform additional actions here when a date is selected
  };

  // Get the days of the current month
  const daysInMonth = getDaysInMonth(currentDate);

  return (
    <div className="calendar bg-neutral-900">
      <div className="month-header ">
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
            )
          }
        >
          <FaArrowLeft className="hover:text-lime-500" />
        </button>
        <h2>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
            )
          }
        >
          <FaArrowRight className="hover:text-lime-500" />
        </button>
      </div>
      <div className="days-grid text-neutral-900">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`day ${day ? "active" : ""} ${
              selectedDate &&
              day &&
              day.toDateString() === selectedDate.toDateString()
                ? "selected"
                : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day ? day.getDate() : ""}
          </div>
        ))}
      </div>
    </div>
  );
};
