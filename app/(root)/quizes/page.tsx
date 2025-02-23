import MyQuizes from "@/components/Quiz/sections/MyQuizes";
import QuizContainer from "@/components/Quiz/QuizContainer";
import React from "react";

const page = () => {
  return (
    <div className="py-11 px-8 min-h-screen">
      {/* <QuizContainer /> */}
      <MyQuizes />
    </div>
  );
};

export default page;
