import React, { useState } from 'react';
import { 
  Pencil, 
  BookOpen, 
  Trophy, 
  Users, 
  FolderKanban, 
  Sparkles, 
  LinkIcon, 
  Mail, 
  Map 
} from 'lucide-react';
import AchievementBadge from '../components/profile/AchievementBadge';

const TAB_ITEMS = [
  { id: 'activity', label: 'Activity', icon: BookOpen },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'connections', label: 'Connections', icon: Users },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
];

const ACHIEVEMENTS = [
  { 
    id: 1, 
    name: 'Quiz Master', 
    description: 'Completed 10 quizzes with a score of 90% or higher',
    icon: BookOpen, 
    date: '2 weeks ago',
    color: 'bg-indigo-500'
  },
  { 
    id: 2, 
    name: 'Community Contributor', 
    description: 'Helped 5 other students by answering their questions',
    icon: Users, 
    date: '1 month ago',
    color: 'bg-teal-500'
  },
  { 
    id: 3, 
    name: 'AI Explorer', 
    description: 'Generated 20 AI summaries for study materials',
    icon: Sparkles, 
    date: '3 weeks ago',
    color: 'bg-amber-500'
  },
  { 
    id: 4, 
    name: 'Project Innovator', 
    description: 'Created a project that received 25+ likes',
    icon: FolderKanban, 
    date: '2 months ago',
    color: 'bg-rose-500'
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState('achievements');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        
        {/* Profile Info */}
        <div className="px-6 py-6 md:px-8 relative">
          <div className="flex flex-col md:flex-row md:items-end">
            <div className="absolute -top-16 left-8 h-32 w-32 rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Profile" 
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="md:ml-36 mt-16 md:mt-0">
              <h1 className="text-2xl font-medium text-gray-900">Shreyansh</h1>
              <p className="text-gray-600">Computer Science Student</p>
            </div>
            
            <div className="flex md:ml-auto mt-4 md:mt-0">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Pencil className="mr-2 h-4 w-4" />
                Edit Profile
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="col-span-2">
              <h2 className="text-lg font-medium text-gray-900 mb-2">About</h2>
              <p className="text-gray-600">
                Computer Science student passionate about machine learning and software development. 
                Currently learning about natural language processing and building projects to apply AI in education.
              </p>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <Map className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">San Francisco, CA</span>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-600">Shreyansh.johnson@example.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <LinkIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">github.com/Shreyanshjohnson</a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <h3 className="text-xs font-medium text-indigo-900">Learning Hours</h3>
                  <p className="text-2xl font-medium text-indigo-600">32.5</p>
                </div>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <h3 className="text-xs font-medium text-teal-900">Achievements</h3>
                  <p className="text-2xl font-medium text-teal-600">12</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h3 className="text-xs font-medium text-amber-900">Projects</h3>
                  <p className="text-2xl font-medium text-amber-600">8</p>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <h3 className="text-xs font-medium text-rose-900">Points</h3>
                  <p className="text-2xl font-medium text-rose-600">580</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="border-t border-gray-200">
          <div className="px-6 md:px-8">
            <div className="flex overflow-x-auto py-3 space-x-8">
              {TAB_ITEMS.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center whitespace-nowrap py-2 text-sm font-medium border-b-2 ${
                      activeTab === tab.id
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="mr-2 h-5 w-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="mt-8">
        {activeTab === 'achievements' && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">Achievements</h2>
              <span className="text-sm text-gray-500">12 total</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ACHIEVEMENTS.map((achievement) => (
                <AchievementBadge key={achievement.id} achievement={achievement} />
              ))}
            </div>
            
            {/* Level Progress */}
            <div className="mt-10 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Achievement Progress</h3>
                <div className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Level 5
                </div>
              </div>
              
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-700">580 points</span>
                <span className="text-gray-500">1000 points to Level 6</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '58%' }}></div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <h4 className="text-xs text-gray-500 uppercase">Next Achievement</h4>
                  <p className="text-sm font-medium text-gray-900 mt-1">Research Pioneer</p>
                  <div className="flex items-center mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">75%</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <h4 className="text-xs text-gray-500 uppercase">Category Rank</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-xl font-medium text-gray-900">#24</span>
                    <span className="text-xs text-gray-500 ml-2">in Computer Science</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <h4 className="text-xs text-gray-500 uppercase">Weekly Progress</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-xl font-medium text-green-600">+45</span>
                    <span className="text-xs text-gray-500 ml-2">points this week</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <h4 className="text-xs text-gray-500 uppercase">Achievement Rate</h4>
                  <div className="flex items-center mt-1">
                    <span className="text-xl font-medium text-amber-600">3.2</span>
                    <span className="text-xs text-gray-500 ml-2">per month</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {(activeTab === 'activity' || activeTab === 'connections' || activeTab === 'projects') && (
          <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-200 text-center">
            <div className={`p-4 rounded-full mx-auto mb-4 inline-flex ${
              activeTab === 'activity' ? 'bg-indigo-100 text-indigo-600' : 
              activeTab === 'connections' ? 'bg-teal-100 text-teal-600' :
              'bg-amber-100 text-amber-600'
            }`}>
              {activeTab === 'activity' && <BookOpen className="h-8 w-8" />}
              {activeTab === 'connections' && <Users className="h-8 w-8" />}
              {activeTab === 'projects' && <FolderKanban className="h-8 w-8" />}
            </div>
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Coming Soon
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              We're working on bringing you a comprehensive view of your {activeTab}.
              Check back soon for updates!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;