import React from "react";

const QuizDetails = ({ quiz }: any) => {
  return (
    <div className="bg-gray-900 max-h-full p-6 rounded-lg shadow-lg text-gray-300 flex flex-col gap-3 overflow-y-scroll scrollbar-hide">
      <h2 className="text-2xl font-bold text-white">{quiz.name}</h2>
      <div className="text-gray-400">
        <span>{quiz.description}</span>
      </div>
      <div>
        <span className="font-bold">Duration:</span>{" "}
        <span>{quiz.duration}</span>
      </div>
      <div>
        <span className="font-bold">Time:</span>{" "}
        <span>
          {quiz.startTime} - {quiz.endTime}
        </span>
      </div>
      <div>
        <span className="font-bold">Date:</span> <span>{quiz.date}</span>
      </div>
      <div>
        <span className="font-bold">Registration Deadline:</span>{" "}
        <span>{quiz.registrationDeadline}</span>
      </div>
      <div>
        <span className="font-bold">Number of Questions:</span>{" "}
        <span>{quiz.numberOfQuestions}</span>
      </div>
      <div>
        <span className="font-bold">Topics:</span>{" "}
        <span>
          {quiz.topics && quiz.topics.length > 0
            ? quiz.topics.join(", ")
            : "No topics listed"}
        </span>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-800 rounded-lg text-white">
          Register
        </button>
        <button className="px-4 py-2 bg-green-700 rounded-lg text-white">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default QuizDetails;
