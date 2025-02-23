import { TimeIcon } from "../assets/icon";

export default function Time() {
  return (
    <div className="p-8 bg-bg2 w-full rounded-xl h-full">
      <div className="flex flex-col gap-8">
        <div className="flex gap-4 items-center">
          <TimeIcon size={50} />
          <h2 className="text-3xl">20:30:52</h2>
        </div>
        <p className="flex flex-col text-gray-500 gap-1">
          <span className="text-sm font-semibold">Start Time: 10: 15</span>
          <span className="text-sm font-semibold">End Time: 13: 00</span>
        </p>
      </div>
    </div>
  )
}