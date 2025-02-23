export default function Score() {
  return (
    <div className="p-8 bg-bg2 w-full rounded-xl">
      <div className="flex flex-col gap-8">
        <div className="text-2xl font-semibold">Q 20</div>
        <p className="flex flex-col text-gray-500">
          <span className="text-sm font-semibold">Average Score: 10</span>
          <span className="text-sm font-semibold">Maximum Score: 20</span>
          <span className="text-sm font-semibold">Minumum Score: 5</span>
        </p>
      </div>
    </div>
  )
}