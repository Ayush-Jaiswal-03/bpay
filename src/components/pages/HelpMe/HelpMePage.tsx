import React from "react";
import BharatPeLogo from "../../../assets/invest-bharatpe-logo.png";
interface Props {
  question: {
    question: string;
    options: string[];
    type: "select" | "text";
  };
  onAnswer: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  currentQuestion: number;
  totalQuestions: number;
  isSelected: string | null;
}
const HelpMePage: React.FC<Props> = ({
  question,
  onAnswer,
  onNext,
  onPrevious,
  onSubmit,
  currentQuestion,
  totalQuestions,
  isSelected,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#00A6E3] to-[#0076B9] relative">
      <div className="flex flex-col gap-6 justify-between max-w-lg w-full h-full p-6 sm:px-4 md:px-6">
        <div className="flex justify-center items-center">
          <img
            src={BharatPeLogo}
            alt="BP Logo"
            className="mb-4 w-32 h-auto sm:w-30 md:w-36 animate-pulse-scale"
          />
        </div>
        <div className="flex items-center justify-center text-2xl sm:text-xl md:text-2xl font-semibold text-white mb-4 rounded-3xl">
          {question.question}
        </div>
        <div className="flex flex-col gap-4 mb-6">
          {question.options.map((option, index) => (
            <div
              key={index}
              onClick={() => onAnswer(option)}
              className={`p-4 bg-blue-300 text-center cursor-pointer rounded-lg border transition-transform duration-200 ease-in-out ${
                isSelected === option
                  ? "bg-lightBlue-200 border-blue-500"
                  : "bg-gray-100 hover:bg-lightBlue-100"
              } hover:scale-105`}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="flex justify-between sm:flex-col sm:gap-4">
          <button
            onClick={onPrevious}
            disabled={currentQuestion === 0}
            className="text-white text-xl p-2 rounded bg-gray-500 hover:bg-blue-700 transition-all duration-300 mt-4 sm:mt-0  disabled:opacity-50"
          >
            Prev
          </button>
          {currentQuestion === totalQuestions - 1 ? (
            <button
              onClick={onSubmit}
              className="text-white p-2 text-xl rounded bg-green-600 hover:bg-green-700 transition-all duration-300 mt-4 sm:mt-0"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={onNext}
              disabled={!isSelected}
              className={`text-white p-2 text-xl rounded bg-blue-900 hover:bg-blue-700 transition-all duration-300 mt-4 sm:mt-0 ${
                !isSelected ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HelpMePage;
