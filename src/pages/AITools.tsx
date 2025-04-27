import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  MessageSquare, 
  History,
  ChevronDown
} from 'lucide-react';
import AIToolCard from '../components/ai-tools/AIToolCard';
import Summarizer from '../components/ai-tools/Summarizer';
import QuizGenerator from '../components/ai-tools/QuizGenerator';
import QuestionAnswering from '../components/ai-tools/QuestionAnswering';

type Tool = 'summarizer' | 'quiz' | 'qa';

const AITools = () => {
  const [activeTool, setActiveTool] = useState<Tool>('summarizer');
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-gray-900">AI Learning Tools</h1>
        <p className="text-gray-500 mt-1">
          Powerful AI tools to enhance your learning experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <AIToolCard
          title="AI Summarizer"
          description="Generate concise summaries from your study materials"
          icon={FileText}
          isActive={activeTool === 'summarizer'}
          onClick={() => setActiveTool('summarizer')}
          bgColor="bg-indigo-500"
        />
        <AIToolCard
          title="Quiz Generator"
          description="Create customized quizzes for effective revision"
          icon={BookOpen}
          isActive={activeTool === 'quiz'}
          onClick={() => setActiveTool('quiz')}
          bgColor="bg-teal-500"
        />
        <AIToolCard
          title="Question Answering"
          description="Get instant answers to your academic questions"
          icon={MessageSquare}
          isActive={activeTool === 'qa'}
          onClick={() => setActiveTool('qa')}
          bgColor="bg-amber-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
        {activeTool === 'summarizer' && <Summarizer />}
        {activeTool === 'quiz' && <QuizGenerator />}
        {activeTool === 'qa' && <QuestionAnswering />}
      </div>

      <div className="mt-8">
        <button 
          onClick={() => setShowHistory(!showHistory)}
          className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors mb-4"
        >
          <History className="mr-2 h-5 w-5" />
          <span className="font-medium">Recent Activity</span>
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showHistory ? 'transform rotate-180' : ''}`} />
        </button>

        {showHistory && (
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="space-y-4">
              <div className="pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-indigo-50 text-indigo-600 mr-3">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Summary: Introduction to Neural Networks</h4>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <button className="text-xs text-indigo-600 hover:text-indigo-500 transition-colors">
                    View
                  </button>
                </div>
              </div>

              <div className="pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-teal-50 text-teal-600 mr-3">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Quiz: Organic Chemistry Basics</h4>
                      <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                    </div>
                  </div>
                  <button className="text-xs text-indigo-600 hover:text-indigo-500 transition-colors">
                    View
                  </button>
                </div>
              </div>

              <div className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-amber-50 text-amber-600 mr-3">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Question: Solving Differential Equations</h4>
                      <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                    </div>
                  </div>
                  <button className="text-xs text-indigo-600 hover:text-indigo-500 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AITools;