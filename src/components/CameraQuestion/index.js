import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CameraQuestion = () => {
  const [model, setModel] = useState('');
  const [questions, setQuestions] = useState([
    { id: 1, question: 'Does the camera have any functional issues?', answer: null },
    { id: 2, question: 'Is the camera in good physical condition?', answer: null },
    { id: 3, question: 'Does the camera come with its original accessories?', answer: null },
  ]);
  const [price, setPrice] = useState(0);

  const history = useHistory();

  const handleAnswerChange = (questionId, answer) => {
    const updatedQuestions = questions.map((q) => (q.id === questionId ? { ...q, answer } : q));
    setQuestions(updatedQuestions);
    calculatePrice(updatedQuestions);
  };

  const calculatePrice = (questions) => {
    let newPrice = 100; // Initial base price
    questions.forEach((question) => {
      if (question.answer === 'yes') {
        newPrice += 50; // Price increment for each "yes" answer
      }
    });
    setPrice(newPrice);
  };

  const handleContinue = () => {
    // Handle form submission or navigation to the next page
    history.push('/final-select');
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Camera Questions</h1>
        <form className="space-y-4">
          {questions.map((question) => (
            <div key={question.id}>
              <p className="text-lg text-gray-700">{question.question}</p>
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name={`question-${question.id}`}
                    value="yes"
                    checked={question.answer === 'yes'}
                    onChange={() => handleAnswerChange(question.id, 'yes')}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500"
                    name={`question-${question.id}`}
                    value="no"
                    checked={question.answer === 'no'}
                    onChange={() => handleAnswerChange(question.id, 'no')}
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          ))}
        </form>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 mt-8"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
      <div className="flex-1 p-8 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Selected Model: {model}</h2>
          <img src="/camera-photo.jpg" alt="Camera" className="w-24 h-auto" />
        </div>
        <hr className="border-gray-300 mb-6" />
        <h3 className="text-lg font-bold mb-4">Selected Answers</h3>
        <ul>
          {questions.map((question) => (
            <li key={question.id} className="flex items-center mb-2">
              <span className="text-gray-600 mr-2">{question.question}:</span>
              <span className="text-blue-500">{question.answer || 'N/A'}</span>
            </li>
          ))}
        </ul>
        <hr className="border-gray-300 mt-6" />
        <div className="flex items-center justify-between mt-6">
          <h3 className="text-lg font-bold">Price: ${price}</h3>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleContinue}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default CameraQuestion;
