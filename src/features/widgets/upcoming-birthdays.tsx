import Image from "next/image";
import { addDays, isTomorrow } from "date-fns";

type UpcomingBirthdaysProps = { onSeeAllclick?: () => void };

type BirthdayCardProps = {
  imageUrl: string;
  name: string;
  birthday: string;
};

function BirthdayCard({ imageUrl, name, birthday }: BirthdayCardProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-12 w-12 overflow-hidden rounded-full">
        <Image
          src={imageUrl}
          alt="Birthday Person Picture"
          className="object-cover object-center"
          fill
        />
      </div>
      <div className="h-max flex-1">
        <h1 className="font-semibold text-gray-800">{name}</h1>
        <span className="text-sm text-gray-400">{birthday}</span>
      </div>
    </div>
  );
}

function UpcomingBirthdays({}: UpcomingBirthdaysProps) {
  return (
    <div className="rounded-lg bg-white p-4">
      <header className="flex justify-between gap-2">
        <h1 className="font-semibold">Upcoming Birthdays</h1>
        <button className="text-sm font-semibold text-blue-400 transition-all duration-100 ease-linear hover:underline">
          See All
        </button>
      </header>
      <div className="mt-6 space-y-4">
        <BirthdayCard
          imageUrl="https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          name="Joshua Dela Cruz"
          birthday={isTomorrow(addDays(new Date(), 1)) ? "Tomorrow" : ""}
        />
        <BirthdayCard
          imageUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          name="Ezekiel Dela Cruz"
          birthday={isTomorrow(addDays(new Date(), 1)) ? "Tomorrow" : ""}
        />
        <BirthdayCard
          imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          name="Mang Domeng"
          birthday={isTomorrow(addDays(new Date(), 1)) ? "Tomorrow" : ""}
        />
      </div>
    </div>
  );
}

export default UpcomingBirthdays;
