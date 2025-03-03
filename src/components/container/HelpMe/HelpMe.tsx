import React, { useState } from "react";
// import { Question, Answer } from "../../types";
// import HelpMePage from "../HelpMePage/HelpMePage";
// import { submitAnswers } from "../../services/helpAuth";
import HelpMePage from "../../pages/HelpMe/HelpMePage";
import { sendAnswers } from "../../../services/HelpMe/HelpMeAuth";
import { Navigate, useNavigate } from "react-router-dom";

interface QuestionType {
  question: string;
  options: string[];
  type: "select" | "text";
}

const HelpMe: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSelected, setIsSelected] = useState<string | null>(null);

  const navigate = useNavigate();

  const quesArray: QuestionType[] = [
    {
      question: "How often do you invest?",
      options: ["Daily", "Weekly", "Monthly", "Yearly", "Never"],
      type: "select",
    },
    {
      question: "What's your monthly savings?",
      options: [
        "less than 50,000 Rs",
        "50,000-1,00,000 Rs",
        "1,00,000-2,00,000 Rs",
        "above 2,00,000 Rs",
      ],
      type: "select",
    },
    {
      question: "How much do you want to invest per month?",
      options: [
        "5,000-10,000 Rs",
        "10,000-20,000 Rs",
        "20,000-50,000 Rs",
        "above 50,000 Rs",
      ],
      type: "select",
    },
    {
      question: "How long do you plan to keep your money invested?",
      options: ["1 Year", "5 Year", "10 Year", "More than 10 Year"],
      type: "select",
    },
    {
      question: "Where do you want to invest",
      options: ["Fixed-Deposit", "Gold", "Mutual Funds"],
      type: "select",
    },
    {
      question: "How much risk are you comfortable with?",
      options: ["Low", "Medium", "High"],
      type: "select",
    },
  ];

  const handleAnswer = (answer: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
    setIsSelected(answer);
  };

  const handleNext = () => {
    if (currentQuestion < quesArray.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsSelected(null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    console.log(answers);
    const response = await sendAnswers(answers);

    // apply validation based on response  or

    navigate("/helpmeans");

    console.log(response);
  };

  return (
    <HelpMePage
      question={quesArray[currentQuestion]}
      onAnswer={handleAnswer}
      onNext={handleNext}
      onPrevious={handlePrevious}
      onSubmit={handleSubmit}
      currentQuestion={currentQuestion}
      totalQuestions={quesArray.length}
      isSelected={isSelected}
    />
  );
};

export default HelpMe;
