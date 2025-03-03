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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#0575E6] to-[#021B79] ">
      <div className="flex flex-col gap-15 justify-between max-w-lg w-full h-full p-6  ">
        <div className="flex justify-center items-center">
          <img
            src={BharatPeLogo}
            alt="BP Logo"
            //   className="mb-4 w-45 h-auto animate-pulse-scale sm:w-40 md:w-40"
            className=" mb-4 w-32 h-auto animate-pulse-scale sm:w-28 md:w-40"
          />
        </div>
        <div className="flex items-center justify-center text-2xl h-20  font-semibold text-white mb-4 rounded-3xl">
          {question.question}
        </div>

        <div className=" flex flex-col gap-4 mb-6">
          {question.options.map((option, index) => (
            <div
              key={index}
              onClick={() => onAnswer(option)}
              className={`p-4 bg-blue-300 text-center cursor-pointer rounded-lg border transition-transform duration-200 ease-in-out ${
                isSelected === option
                  ? "bg-lightBlue-200 border-blue-500"
                  : "bg-gray-100 hover:bg-lightBlue-100"
              } hover:scale-105 `}
            >
              {option}
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            disabled={currentQuestion === 0}
            className=" text-white text-xl p-2 rounded"
          >
            Previous
          </button>
          {currentQuestion === totalQuestions - 1 ? (
            <button
              onClick={onSubmit}
              className=" text-white p-2 text-xl rounded"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={onNext}
              disabled={!isSelected}
              className={` text-white p-2 text-xl rounded ${
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

// grid grid-cols-2
// bg-gradient-to-r from-[#59CDE9] to-[#0A2A88]
// bg-gradient-to-r from-[#0575E6] to-[#021B79]
