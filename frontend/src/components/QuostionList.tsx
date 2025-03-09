import React, { useState } from "react";
import { FaCheckCircle, FaRegThumbsUp } from "react-icons/fa";

interface Question {
  id: number;
  text: string;
  user?: string;
  timeAgo: string;
  reply?: {
    text: string;
    timeAgo: string;
  };
}

const QuestionList: React.FC = () => {
  // Simulasi daftar pertanyaan
  const [questions, _setQuestions] = useState<Question[]>([
    {
      id: 1,
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      user: "Anonymous",
      timeAgo: "10 minutes ago",
      reply: {
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        timeAgo: "2 minutes ago",
      },
    },
  ]);

  return (
    <div className="mt-8 bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <div className="flex justify-between items-center border-b border-gray-700 pb-3">
        <h2 className="text-xl font-semibold">Popular</h2>
        <span className="text-gray-400">6 questions</span>
      </div>

      {questions.length === 0 ? (
        <p className="text-gray-500 mt-4">Belum ada pertanyaan.</p>
      ) : (
        <ul className="space-y-6 mt-4">
          {questions.map((q) => (
            <li key={q.id} className="bg-gray-800 p-4 rounded-lg shadow">
              {/* Header */}
              <div className="flex items-center space-x-2 text-gray-300">
                <span className="font-semibold">{q.user || "Anonymous"}</span>
                <span className="text-sm text-gray-500">{q.timeAgo}</span>
              </div>

              {/* Pertanyaan */}
              <p className="text-lg text-white mt-2">{q.text}</p>

              {/* Balasan dari Moderator */}
              {q.reply && (
                <div className="mt-3 p-3 bg-gray-700 rounded-md">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <span className="font-semibold">Moderator</span>
                    <FaCheckCircle className="text-blue-500" />
                    <span className="text-sm text-gray-400">
                      {q.reply.timeAgo}
                    </span>
                  </div>
                  <p className="text-gray-300 mt-1">{q.reply.text}</p>
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-end items-center mt-3 text-gray-400">
                <FaRegThumbsUp className="cursor-pointer" />
                <span className="ml-1">0</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuestionList;
