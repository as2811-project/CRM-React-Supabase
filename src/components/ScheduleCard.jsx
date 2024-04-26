export const Meetings = () => {
  const meetings = [
    { id: 1, title: "Meeting 1", time: "10:00 AM" },
    { id: 2, title: "Meeting 2", time: "2:00 PM" },
    { id: 3, title: "Meeting 3", time: "4:00 PM" },
    // Add more meetings as needed
  ];
  return (
    <div className="mt-5 bg-neutral-800 p-5 rounded-lg hover:shadow-2xl">
      <h2 className="text-lg font-semibold mb-3 text-white">
        Upcoming Schedule
      </h2>

      {/* Meetings content */}
      <ul className="flex-col">
        {meetings.map((meeting) => (
          <li key={meeting.id} className="mb-2 text-white">
            {meeting.title} - {meeting.time}
          </li>
        ))}
      </ul>
    </div>
  );
};
