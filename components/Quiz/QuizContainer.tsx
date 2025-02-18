"use client";
import React, { useState } from "react";
import QuizCard from "./QuizCard";

import QuizDetails from "./QuizDetails";
const quizData = [
  {
    id: 1,
    name: "DSA Challenge",
    duration: "60 mins",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    date: "2025-02-20",
    registrationDeadline: "2025-02-19 11:59 PM",
    numberOfQuestions: 20,
    topics: ["Arrays", "Linked Lists", "Trees", "Sorting", "Searching"],
    description:
      "A data structures and algorithms quiz to test your problem-solving skills",
  },
  {
    id: 2,
    name: "Web Dev Trivia",
    duration: "45 mins",
    startTime: "2:00 PM",
    endTime: "2:45 PM",
    date: "2025-02-20",
    registrationDeadline: "2025-02-19 11:59 PM",
    numberOfQuestions: 15,
    topics: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    description:
      "A quiz on HTML, CSS, and JavaScript basics for web developers.",
  },
  {
    id: 3,
    name: "Blockchain Basics",
    duration: "50 mins",
    startTime: "5:00 PM",
    endTime: "5:50 PM",
    date: "2025-02-20",
    registrationDeadline: "2025-02-19 11:59 PM",
    numberOfQuestions: 18,
    topics: [
      "Blockchain Architecture",
      "Cryptography",
      "Smart Contracts",
      "Web3",
    ],
    description:
      "A quiz to test your knowledge of blockchain fundamentals and Web3 concepts.",
  },
  {
    id: 4,
    name: "AI & ML Mastery",
    duration: "75 mins",
    startTime: "7:00 PM",
    endTime: "8:15 PM",
    date: "2025-02-20",
    registrationDeadline: "2025-02-19 11:59 PM",
    numberOfQuestions: 25,
    topics: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Deep Learning",
    ],
    description:
      "Test your understanding of AI & ML with theoretical and coding questions.",
  },
  {
    id: 5,
    name: "Cybersecurity Quiz",
    duration: "40 mins",
    startTime: "9:00 PM",
    endTime: "9:40 PM",
    date: "2025-02-20",
    registrationDeadline: "2025-02-19 11:59 PM",
    numberOfQuestions: 12,
    topics: ["Network Security", "Malware", "Encryption", "Phishing Attacks"],
    description:
      "A quiz covering basic cybersecurity concepts, attacks, and defenses.",
  },
];

const QuizContainer = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  return (
    <div className="w-screen lg:h-[88vh] flex p-6 overflow-hidden">
      <div className="w-1/2 max-h-full py-4 px-2 flex flex-col   gap-2 overflow-scroll scrollbar-hide rounded-lg z-50">
        {quizData.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} onSelect={setSelectedQuiz} />
        ))}
        {quizData.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} onSelect={setSelectedQuiz} />
        ))}
        {quizData.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} onSelect={setSelectedQuiz} />
        ))}
      </div>

      <div className="w-1/2 p-4">
        {selectedQuiz ? (
          <QuizDetails quiz={selectedQuiz} />
        ) : (
          <p className="text-gray-400 text-center">
            Select a quiz to view details
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizContainer;
