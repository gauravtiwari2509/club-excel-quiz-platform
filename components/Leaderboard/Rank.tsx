import Image from "next/image";

export default function Rank() {
  return (
    <div className="p-8 bg-bg2 w-full rounded-xl">
      <div>
        <Image width={100} height={100} src={"/badge.svg"} alt="badge" className="w-[80px]" />
      </div>
      <div className="flex flex-col gap-2 mt-1">
        <span className="text-xl font-semibold">#1 Madela Jones</span>
        <p className="flex flex-col text-gray-500">
          <span className="text-sm font-semibold">#1 Madela Jones</span>
          <span className="text-sm font-semibold">#1 Madela Jones</span>
        </p>
      </div>
    </div>
  )
}