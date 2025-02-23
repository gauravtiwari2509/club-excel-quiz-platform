import { TimeIcon } from "../assets/icon";
import QuizStatus from "./QuizStatus";

export default function QuizCardNew() {
  return (
    <div className="p-8 bg-bg2 rounded-xl flex flex-col gap-8 min-w-[300px]">

      <div className="flex justify-between items-center">
        <QuizStatus status="ONGOING" />
        <span className="flex gap-4">
          <div className="flex gap-2 text-lg">
            Q 20
          </div>
          <div className="flex gap-2 text-lg">
            <TimeIcon size={24} />
            60m
          </div>
        </span>
      </div>

      <div className="">
        <h1 className="text-xl sm:text-2xl font-bold">Web Development Trivia</h1>
        <p className="text-lg text-gray-500">A quiz on HTML, CSS, and JavaScript basics for web developers.</p>

        <div className="flex gap-2 text-primary mt-4 cursor-pointer">
          <span className="text-sm underline"> html </span>
          <span className="text-sm underline"> html </span>
          <span className="text-sm underline"> html </span>
          <span className="text-sm underline"> html </span>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-lg bg-primary hover:opacity-75 capitalize">
            View Analytics
          </button>
          <button className="px-6 py-2 rounded-lg bg-[#008979] hover:opacity-75 capitalize font-semibold">
            Rgiseter
          </button>
        </div>
      </div>
    </div>
  )
}