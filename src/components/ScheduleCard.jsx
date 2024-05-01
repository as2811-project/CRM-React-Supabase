import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

export const Meetings = () => {
  const [meeting, setMeeting] = useState([]);
  var d = new Date().toLocaleTimeString();

  useEffect(() => {
    async function getMeeting() {
      const { data: meeting } = await supabase
        .from("Meetings")
        .select()
        .lt("time_from", d);

      setMeeting(meeting);
    }
    getMeeting();
  }, [d]);
  return (
    <div className="bg-neutral-800 p-4 rounded-md mt-5 border border-neutral-700">
      <p className="font-bold text-white mb-2">Upcoming Meeting</p>
      <span className="bg-lime-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
        In 15 minutes
      </span>
      {meeting.length > 0 ? (
        <div>
          <p className="mt-2 font-semibold text-white hover:text-lime-400">
            {meeting[0].meeting_title}
          </p>
          <div className="flex items-center justify-between text-sm text-neutral-400">
            <p>
              {meeting[0].time_from} → {meeting[0].time_to}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-neutral-400 mt-2">No upcoming meetings</p>
      )}
    </div>
  );
};
