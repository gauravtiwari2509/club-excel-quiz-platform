import Attendance from "@/components/Leaderboard/Attendance";
import LeaderboardTable from "@/components/Leaderboard/LeaderboardTable";
import Rank from "@/components/Leaderboard/Rank";
import Score from "@/components/Leaderboard/Score";
import Time from "@/components/Leaderboard/Time";

export default async function LeaderBoard({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  return (
    <div className="min-h-screen sm:mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 p-4 sm:px-8 gap-8">
        <Rank />
        <Score />
        <div className="col-span-2 sm:col-span-1"><Time /></div>
      </div>
      <div className="grid sm:grid-cols-3 p-4 sm:px-8 gap-8">
        <div className="col-span-2"><LeaderboardTable /></div>
        <Attendance />
      </div>
    </div>
  )
}