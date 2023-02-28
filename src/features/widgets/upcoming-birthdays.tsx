import React from "react";

type UpcomingBirthdaysProps = { onSeeAllclick?: () => void };

function UpcomingBirthdays({}: UpcomingBirthdaysProps) {
  return (
    <div>
      <header className="flex justify-between gap-2 rounded-lg bg-white p-4">
        <h1 className="font-semibold">Upcoming Birthdays</h1>
        <button className="text-sm font-semibold text-blue-400 transition-all duration-100 ease-linear hover:underline">
          See All
        </button>
      </header>
    </div>
  );
}

export default UpcomingBirthdays;
