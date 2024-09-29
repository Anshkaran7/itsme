import React from 'react';

interface Props {
  title: string;
  position: string;
  date: string;
  tasks: string[];
}

export default function ExperienceCard({ title, position, date, tasks }: Props) {
  return (
    <div className="card flex flex-col justify-between rounded bg-neutral-900/70 dark:bg-white/70 shadow-md dark:shadow-md w-full p-4 sm:p-6 md:p-8 lg:p-10 dark:text-gray-700 text-white backdrop-blur before:rounded min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
      {/* Card Header */}
      <h4 className="mb-4 flex items-center text-lg sm:text-xl md:text-2xl font-semibold gap-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-folder"
        >
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
        </svg>
        <span>{title}</span>
      </h4>

      {/* Position and Date */}
      <div>
        <h5 className="text-md sm:text-lg md:text-xl">{position}</h5>
        <p className="mt-2 leading-6 text-neutral-400 dark:text-neutral-500 text-sm md:text-base">{date}</p>
      </div>

      {/* Tasks List */}
      <div className="mt-4 flex-grow flex flex-col gap-2 sm:gap-3">
        {tasks.map((task: string, index: number) => (
          <div className="flex items-center gap-x-2" key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2196F3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="text-xs sm:text-sm md:text-base text-white/80 dark:text-gray-700">{task}</p>
          </div>
        ))}
      </div>

      {/* Background Effects (Optional) */}
      <div className="shine -z-10"></div>
      <div className="background -z-10">
        <div className="tiles grid grid-cols-5 gap-2">
          {[...Array(10)].map((_, idx) => (
            <div key={idx} className={`tile tile-${idx + 1} bg-neutral-700/20`}></div>
          ))}
        </div>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
}
