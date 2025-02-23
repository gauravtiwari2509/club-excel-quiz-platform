import QuizCardNew from "../QuizCardNew";

export default function MyQuizes() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl sm:text-2xl font-bold">My Quizes</h1>
      <div className="w-full overflow-y-scroll">
        <div className="w-fit flex gap-4">
          <div className="sm:min-w-[500px]"><QuizCardNew /></div>
        </div>
      </div>
    </div>
  )
}