import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center text-white px-6">
      <img
        src="/photo/Excel_Logo_Anim.gif"
        alt="Club Excel Logo"
        className="h-32 w-auto mb-6"
      />

      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        Welcome to <span className="text-[#4E31AA]">Club Excel Quiz</span>
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl mb-6">
        Compete, Learn, and Win! Join the most thrilling quiz competitions, test
        your knowledge, and climb the leaderboard.
      </p>
      <Link href={"/signup"} className="md:hidden">
        <button className="px-6 py-3 rounded-lg bg-[#4E31AA] hover:bg-blue-900 transition-all duration-300 font-semibold shadow-lg">
          join us
        </button>
      </Link>
    </div>
  );
};

export default Banner;
