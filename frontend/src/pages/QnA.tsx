// src/components/QuestionInput.tsx

import React, { useState } from "react";

const QuestionInput: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const maxLength = 160;

  return (
    <div className="flex flex-col p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <textarea
        className="resize-none h-24 p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Type your question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        maxLength={maxLength}
      />
      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-400">
          {question.length}/{maxLength}
        </span>
        <span className="text-gray-400">
          Question AI <span className="text-green-500">BETA</span>
        </span>
      </div>
      <div className="flex space-x-2 mt-2">
        <button className="bg-gray-700 py-1 px-3 rounded-md">Improve</button>
        <button className="bg-gray-700 py-1 px-3 rounded-md">Shorten</button>
        <button className="bg-gray-700 py-1 px-3 rounded-md">
          Professional
        </button>
        <button className="bg-gray-700 py-1 px-3 rounded-md">Casual</button>
      </div>
      <div className="flex items-center mt-4">
        <span className="material-icons text-gray-400">person</span>
        <input
          type="text"
          className="ml-2 p-2 bg-gray-800 rounded-md focus:outline-none"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="ml-auto bg-green-500 py-2 px-4 rounded-md">
          Send
        </button>
      </div>
    </div>
  );
};

export default QuestionInput;
