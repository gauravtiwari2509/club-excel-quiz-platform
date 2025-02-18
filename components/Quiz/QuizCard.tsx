import React from "react";

const QuizCard = ({ quiz, onSelect }: any) => {
  return (
    <div
      className="w-full p-4 bg-gray-900 flex items-center justify-between rounded-lg shadow-lg cursor-pointer"
      onClick={() => onSelect(quiz)}
    >
      <h2 className="text-xl font-bold text-white">{quiz.name}</h2>

      <p className="text-gray-400  ">{quiz.duration}</p>

      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-800 rounded-lg text-white">
          Register
        </button>
        <button className="px-4 py-2 bg-green-700 rounded-lg text-white">
          Join Now
        </button>
        <button className="px-4 py-2 bg-green-700 rounded-lg text-white">
          Verify
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
