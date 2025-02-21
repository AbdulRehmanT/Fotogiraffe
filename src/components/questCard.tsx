"use client";

import { X, Plus } from "lucide-react";

import { useState } from "react";

interface QuestCardProps {
  number: string;
  question: string;
  answer: string;
}

const QuestCard: React.FC<QuestCardProps> = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-50 px-4 py-6 overflow-hidden border-b border-gray-200 rounded-t-lg">
      <div className="p-6 flex items-start gap-12 cursor-pointer">
        <span className="text-4xl md:text-4xl font-bold text-black">
          {number}
        </span>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-medium text-3xl pr-8">{question}</h3>
            {isOpen ? (
              <button
                onClick={toggleAnswer}
                className="mt-1 w-12 h-12 flex items-center justify-center bg-black text-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={toggleAnswer}
                className="mt-1 w-12 h-12 flex items-center justify-center bg-white rounded-full"
              >
                <Plus className="w-5 h-5" />
              </button>
            )}
          </div>
          {isOpen && (
            <div className="overflow-hidden">
              <p className="mt-4 text-[18px] text-gray-600">{answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
