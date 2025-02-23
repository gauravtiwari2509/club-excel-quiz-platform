export default function LeaderboardTable() {
  return (
    <div className="p-8 bg-bg2 w-full rounded-xl">
      <table className="w-full">
        <thead>
          <tr className="bg-white/10">
            <th className="text-left  text-xl p-4">Rank</th>
            <th className="text-left  text-xl p-4">Name</th>
            <th className="text-left  text-xl p-4">Score</th>
            <th className="text-right text-xl p-4">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left  text-lg p-2">1</td>
            <td className="text-left  text-lg p-2">Madela Jones</td>
            <td className="text-left  text-lg p-2">20</td>
            <td className="text-right text-lg p-2">20:30:52</td>
          </tr>
          <tr className="bg-white/10">
            <td className="text-left  text-lg p-2">2</td>
            <td className="text-left  text-lg p-2">Madela Jones</td>
            <td className="text-left  text-lg p-2">20</td>
            <td className="text-right text-lg p-2">20:30:52</td>
          </tr>
          <tr>
            <td className="text-left  text-lg p-2">3</td>
            <td className="text-left  text-lg p-2">Madela Jones</td>
            <td className="text-left  text-lg p-2">20</td>
            <td className="text-right text-lg` p-2">20:30:52</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}