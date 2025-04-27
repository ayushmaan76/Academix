import React, { useState } from 'react';
import { BookOpen, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

const QuizGenerator = () => {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [questionCount, setQuestionCount] = useState('5');
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState<null | {
    questions: {
      question: string;
      options: string[];
      answer: number;
      userAnswer?: number;
    }[];
  }>(null);
  const [currentStep, setCurrentStep] = useState('generate'); // generate, taking, results

  const generateQuiz = () => {
    if (!topic) return;
    
    setLoading(true);
    
    // Mock API call
    setTimeout(() => {
      const mockQuiz = {
        questions: [
          {
            question: "What is the primary function of mitochondria in a cell?",
            options: [
              "Protein synthesis",
              "Energy production",
              "Cell division",
              "Waste removal"
            ],
            answer: 1
          },
          {
            question: "Which of the following is NOT a fundamental force in physics?",
            options: [
              "Gravity",
              "Electromagnetic force",
              "Nuclear force",
              "Centrifugal force"
            ],
            answer: 3
          },
          {
            question: "Who wrote 'Pride and Prejudice'?",
            options: [
              "Jane Austen",
              "Charles Dickens",
              "Emily Brontë",
              "Virginia Woolf"
            ],
            answer: 0
          },
          {
            question: "What is the chemical symbol for gold?",
            options: [
              "Go",
              "Gd",
              "Au",
              "Ag"
            ],
            answer: 2
          },
          {
            question: "In which year did World War II end?",
            options: [
              "1943",
              "1944",
              "1945",
              "1946"
            ],
            answer: 2
          }
        ]
      };
      
      setQuiz(mockQuiz);
      setLoading(false);
      setCurrentStep('taking');
    }, 1500);
  };

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    if (!quiz) return;
    
    const updatedQuiz = {...quiz};
    updatedQuiz.questions[questionIndex].userAnswer = optionIndex;
    setQuiz(updatedQuiz);
  };

  const submitQuiz = () => {
    setCurrentStep('results');
  };

  const resetQuiz = () => {
    setTopic('');
    setDifficulty('medium');
    setQuestionCount('5');
    setQuiz(null);
    setCurrentStep('generate');
  };

  const getCorrectAnswers = () => {
    if (!quiz) return 0;
    return quiz.questions.filter(q => q.userAnswer === q.answer).length;
  };

  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-900 mb-4">AI Quiz Generator</h2>
      <p className="text-gray-600 mb-6">
        Generate customized quizzes on any academic topic to test your knowledge.
      </p>

      {currentStep === 'generate' && (
        <>
          <div className="mb-6">
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
              Topic:
            </label>
            <input
              id="topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="E.g., Cellular Biology, World War II, Shakespeare..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-2">
                Difficulty:
              </label>
              <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div>
              <label htmlFor="questionCount" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Questions:
              </label>
              <select
                id="questionCount"
                value={questionCount}
                onChange={(e) => setQuestionCount(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={generateQuiz}
              disabled={loading || !topic}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white ${
                loading || !topic
                  ? 'bg-indigo-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Generate Quiz
                </>
              )}
            </button>
          </div>
        </>
      )}

      {currentStep === 'taking' && quiz && (
        <>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {topic} Quiz
            </h3>
            <p className="text-sm text-gray-500">
              Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} • {quiz.questions.length} questions
            </p>
          </div>

          <div className="space-y-8 mb-6">
            {quiz.questions.map((question, questionIndex) => (
              <div key={questionIndex} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">
                  {questionIndex + 1}. {question.question}
                </h4>
                <div className="space-y-3">
                  {question.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                      className={`w-full text-left p-3 rounded-lg border ${
                        question.userAnswer === optionIndex
                          ? 'bg-indigo-50 border-indigo-300'
                          : 'border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{String.fromCharCode(65 + optionIndex)}.</span> {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={resetQuiz}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Start Over
            </button>
            <button
              onClick={submitQuiz}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Submit Quiz
            </button>
          </div>
        </>
      )}

      {currentStep === 'results' && quiz && (
        <>
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Quiz Results
            </h3>
            <p className="text-lg">
              You scored <span className="font-medium text-indigo-600">{getCorrectAnswers()}</span> out of <span className="font-medium">{quiz.questions.length}</span>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
              <div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                style={{ width: `${(getCorrectAnswers() / quiz.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-8 mb-6">
            {quiz.questions.map((question, questionIndex) => {
              const isCorrect = question.userAnswer === question.answer;

              return (
                <div 
                  key={questionIndex} 
                  className={`p-6 rounded-lg border ${
                    isCorrect 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`p-1 rounded-full mr-2 ${
                      isCorrect ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {isCorrect ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">
                        {questionIndex + 1}. {question.question}
                      </h4>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-2 rounded-md ${
                              optionIndex === question.answer
                                ? 'bg-green-100 border border-green-300'
                                : optionIndex === question.userAnswer && optionIndex !== question.answer
                                ? 'bg-red-100 border border-red-300'
                                : 'bg-white border border-gray-200'
                            }`}
                          >
                            <span className="font-medium">{String.fromCharCode(65 + optionIndex)}.</span> {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between">
            <button
              onClick={resetQuiz}
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Create New Quiz
            </button>
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Save Results
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizGenerator;