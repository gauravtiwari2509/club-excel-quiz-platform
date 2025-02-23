export default function QuizStatus({ status }: { status: "UPCOMMING" | "ONGOING" | "COMPLETED" }) {
  if (status == "ONGOING") {
    return (
      <div className="bg-[#3E8000]/25 p-2 px-4 rounded-xl">
        <p className="text-sm text-[#198900] uppercase font-semibold">ONGOING</p>
      </div>
    )
  }

  if (status == "UPCOMMING") {
    return (
      <div className="bg-[#006D80]/25 p-2 px-4 rounded-xl">
        <p className="text-sm text-[#007089] uppercase">UPCOMMING</p>
      </div>
    )
  }

  if (status == "COMPLETED") {
    return (
      <div className="bg-[#805C00]/25 p-2 px-4 rounded-xl">
        <p className="text-sm text-[#895D00] uppercase">Completed</p>
      </div>
    )
  }
}