import React, { useState } from 'react';
import { Search, RefreshCw, ThumbsUp, ThumbsDown, Copy } from 'lucide-react';

const QuestionAnswering = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [recentQuestions] = useState([
    "What is the difference between mitosis and meiosis?",
    "How does the Pythagorean theorem work?",
    "Explain the causes of the French Revolution",
    "What is the structure of a sonnet?"
  ]);

  const askQuestion = (q: string = question) => {
    if (!q) return;
    
    setQuestion(q);
    setLoading(true);
    
    // Mock API call
    setTimeout(() => {
      setAnswer(
        "This is a simulated answer to demonstrate the question-answering functionality. " +
        "In a real application, this would be generated by an AI model based on your specific question. " +
        "The answer would provide accurate information, possibly with citations and related concepts, " +
        "to help you understand the topic thoroughly. For complex academic questions, " +
        "it might also include diagrams, formulas, or step-by-step explanations when appropriate."
      );
      setLoading(false);
    }, 1500);
  };

  const resetForm = () => {
    setQuestion('');
    setAnswer('');
  };

  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-900 mb-4">AI Question Answering</h2>
      <p className="text-gray-600 mb-6">
        Ask any academic question and get a comprehensive answer instantly.
      </p>

      <div className="mb-6">
        <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
          Your question:
        </label>
        <div className="relative">
          <input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="E.g., What is the law of conservation of energy?"
            className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            onClick={() => askQuestion()}
            disabled={loading || !question}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full ${
              loading || !question
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {recentQuestions.length > 0 && !answer && (
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Suggested questions:</h3>
          <div className="flex flex-wrap gap-2">
            {recentQuestions.map((q, index) => (
              <button
                key={index}
                onClick={() => askQuestion(q)}
                className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading ? (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-center justify-center">
          <div className="text-center">
            <svg className="animate-spin h-8 w-8 text-indigo-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-600">Generating answer...</p>
          </div>
        </div>
      ) : answer ? (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-medium text-gray-900">Answer</h3>
            <div className="flex space-x-2">
              <button className="p-1.5 rounded-full text-gray-500 hover:text-indigo-600 hover:bg-gray-100">
                <Copy className="h-4 w-4" />
              </button>
              <button className="p-1.5 rounded-full text-gray-500 hover:text-green-600 hover:bg-gray-100">
                <ThumbsUp className="h-4 w-4" />
              </button>
              <button className="p-1.5 rounded-full text-gray-500 hover:text-red-600 hover:bg-gray-100">
                <ThumbsDown className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="prose max-w-none text-gray-700">
            <p>{answer}</p>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between">
            <button
              onClick={resetForm}
              className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
            >
              <RefreshCw className="mr-1 h-4 w-4" />
              Ask another question
            </button>
            
            <div className="text-sm text-gray-500">
              Sources: <span className="text-indigo-600 hover:underline cursor-pointer">3 references</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default QuestionAnswering;