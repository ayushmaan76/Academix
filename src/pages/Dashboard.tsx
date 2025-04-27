import React, { useState } from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Trophy, 
  Clock, 
  Calendar, 
  MessageSquare 
} from 'lucide-react'; 
import ActivityCard from '../components/dashboard/ActivityCard';
import RecommendationCard from '../components/dashboard/RecommendationCard';
import StatCard from '../components/dashboard/StatCard';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Assignment Due: Machine Learning', date: 'April 30, 2025', completed: false },
    { id: 2, title: 'Webinar: Quantum Computing', date: 'May 2, 2025', completed: false },
    { id: 3, title: 'Project Submission: History', date: 'May 5, 2025', completed: false },
    { id: 4, title: 'Group Discussion: AI Ethics', date: 'May 8, 2025', completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-medium text-gray-900">Welcome back, Shreyansh!</h1>
        <p className="text-gray-500 mt-1">Continue your learning journey.</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Learning Hours" 
          value="32.5" 
          change="+4.5" 
          icon={Clock} 
          color="bg-indigo-50 text-indigo-600" 
        />
        <StatCard 
          title="Completed Quizzes" 
          value="18" 
          change="+3" 
          icon={BookOpen} 
          color="bg-teal-50 text-teal-600" 
        />
        <StatCard 
          title="AI Summaries" 
          value="24" 
          change="+7" 
          icon={Sparkles} 
          color="bg-amber-50 text-amber-600" 
        />
        <StatCard 
          title="Achievement Points" 
          value="580" 
          change="+45" 
          icon={Trophy} 
          color="bg-rose-50 text-rose-600" 
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Learning Recommendations */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium text-gray-900">Continue Learning</h2>
            <Link to="/all-courses" className="flex items-center text-sm text-indigo-600 hover:text-indigo-500 transition-colors">
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RecommendationCard
              title="Advanced Machine Learning"
              category="Computer Science"
              progress={65}
              image="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
              path="/advanced-machine-learning"
            />
            <RecommendationCard
              title="Quantum Physics Fundamentals"
              category="Physics"
              progress={32}
              image="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg"
              path="/quantum-physics"
            />
            <RecommendationCard
              title="Modern World History"
              category="History"
              progress={78}
              image="https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg"
              path="/modern-world-history"
            />
            <RecommendationCard
              title="Advanced Calculus"
              category="Mathematics"
              progress={45}
              image="https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg"
              path="/advanced-calculus"
            />
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium text-gray-900">Recent Activity</h2>
              
            </div>

            <div className="space-y-4">
              <ActivityCard
                title="Quiz Completed"
                description="You scored 92% on Advanced Physics Quiz"
                time="1 hour ago"
                icon={BookOpen}
                color="bg-teal-50 text-teal-600"
              />
              <ActivityCard
                title="AI Summary Generated"
                description="Generated summary for 'Deep Learning Algorithms'"
                time="3 hours ago"
                icon={Sparkles}
                color="bg-indigo-50 text-indigo-600"
              />
              <ActivityCard
                title="Forum Question Answered"
                description="Your answer received 5 upvotes"
                time="Yesterday"
                icon={MessageSquare}
                color="bg-amber-50 text-amber-600"
              />
            </div>
          </div>
        </div>

        {/* Sidebar - Quick Access with To-Do */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow space-y-6">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="h-6 w-6 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Access & To-Do</h2>
          </div>

          {/* To-Do List */}
          <ul className="space-y-4">
            {tasks.map(task => (
              <li key={task.id} className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-5 w-5 mt-1 text-indigo-600 rounded focus:ring-indigo-500"
                />
                <div>
                  <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-400' : 'text-gray-800 dark:text-gray-200'}`}>
                    {task.title}
                  </p>
                  <p className="text-xs text-gray-500">{task.date}</p>
                </div>
              </li>
            ))}
          </ul>

         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
