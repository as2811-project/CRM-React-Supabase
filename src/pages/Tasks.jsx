import React, { useState } from "react";
import { Sidebar } from "../layouts/SideLayout";
//import { Calendar } from "../components/Calendar";
import { FaTrash } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft, FaCheck } from "react-icons/fa6";
import { MdAddTask } from "react-icons/md";

import "../theme.css";

export const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };
  // Function to handle date selection
  const handleDateClick = (date) => {
    const adjustedDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    setSelectedDate(adjustedDate);
    let formattedDate = adjustedDate.toISOString().split("T")[0];
    fetchTasksForDate(formattedDate);
  };

  // Get the days of the current month
  const daysInMonth = getDaysInMonth(currentDate);
  const fetchTasksForDate = (date) => {
    // Check if date is selected
    if (!date) return;

    fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: sessionStorage.getItem("user_id").replace(/['"]+/g, ""),
        date: date,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setTasks(response);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };
  return (
    <div>
      <Sidebar />
      <div className="products-content-title">
        <div className="calendar bg-neutral-900">
          <div className="month-header ">
            <button
              onClick={() =>
                setCurrentDate(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() - 1,
                    1 - currentDate.getTimezoneOffset() * 60000
                  )
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
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1,
                    1 - currentDate.getTimezoneOffset() * 60000
                  )
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
        <div className="mx-auto mt-5">
          <h1 className="text-2xl font-light text-white">Tasks</h1>
          <p className="mb-3 text-white">Select a date above to view tasks</p>
          <button className="bg-lime-500 hover:bg-lime-600 text-white text-sm font-bold mb-5 px-3 py-1.5 rounded-full text-center inline-flex items-center">
            <MdAddTask />
            Add Task
          </button>
          <div className="flex flex-col">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-neutral-900 text-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg hover:text-lime-500 font-semibold cursor-pointer">
                    {task.task_title}
                  </h2>
                  <p className="text-white">
                    Related Contact: {task.Contacts.first_name}{" "}
                    {task.Contacts.last_name}
                  </p>
                  <p className="text-white">
                    Task Owner: {task.users.Username}
                  </p>
                  <p className="text-white">Due Date: {task.due_date}</p>
                </div>
                <div className="flex items-center">
                  <button className="hover:bg-lime-500 text-white p-3 rounded-full mr-2">
                    <FaCheck />
                  </button>
                  <button className="hover:bg-red-500 text-white p-3 rounded-full">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
