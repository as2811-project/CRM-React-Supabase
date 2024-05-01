export const TasksCard = () => {
  const tasks = [
    { id: 1, title: "Call Jane", description: "Discuss services with Jane" },
    { id: 2, title: "Task 2", description: "Description of Task 2" },
    { id: 3, title: "Task 3", description: "Description of Task 3" },
    // Add more tasks as needed
  ];
  return (
    <div className="mt-5 bg-neutral-800 p-5 rounded-lg hover:shadow-2xl border border-neutral-700">
      <h2 className="text-lg font-semibold mb-3 text-white">Tasks</h2>
      {/* Tasks content */}
      <ul className="flex-col">
        {tasks.map((task) => (
          <li key={task.id} className="mb-2 text-white">
            <input type="checkbox" id={`task-${task.id}`} />
            <label
              htmlFor={`task-${task.id}`}
              className="ml-2 text-lime-700 font-semibold text-white"
            >
              {task.title}
            </label>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
