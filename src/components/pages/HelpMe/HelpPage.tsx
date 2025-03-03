import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HelpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://your-backend-api.com/submit-answers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit answers");
      }

      const data = await response.json();

      navigate("/result", { state: data });
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Help Form</h1>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="space-y-4">
          <div>
            <label className="block">Question 1:</label>
            <input
              type="text"
              name="question1"
              value={formData.question1}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block">Question 2:</label>
            <input
              type="text"
              name="question2"
              value={formData.question2}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block">Question 3:</label>
            <input
              type="text"
              name="question3"
              value={formData.question3}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block">Question 4:</label>
            <input
              type="text"
              name="question4"
              value={formData.question4}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block">Question 5:</label>
            <input
              type="text"
              name="question5"
              value={formData.question5}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block">Question 6:</label>
            <input
              type="text"
              name="question6"
              value={formData.question6}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default HelpPage;
