import Banner from "@/components/Banner";
import QuizCardNew from "@/components/Quiz/QuizCardNew";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="grid mx-4 md:mx-8 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-36">
        <QuizCardNew />
        <QuizCardNew />
        <QuizCardNew />
        <QuizCardNew />
        <QuizCardNew />
        <QuizCardNew />
      </div>
    </div>
  );
}
