import React, { useState, useEffect } from 'react';
import { Search, MessageSquare, Users, BookOpen, Filter, Bell, ChevronDown, Plus } from 'lucide-react';
import CommunityPost from '../components/community/CommunityPost';
import CommunityGroup from '../components/community/CommunityGroup';

const TAB_ITEMS = [
  { id: 'discussions', label: 'Discussions', icon: MessageSquare },
  { id: 'groups', label: 'Study Groups', icon: Users },
  { id: 'resources', label: 'Resources', icon: BookOpen },
];

const INITIAL_DISCUSSIONS = [
  {
    id: 1,
    title: "Help with understanding quantum entanglement",
    category: "Physics",
    author: "Shreyansh",
    authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    date: "2 hours ago",
    comments: 8,
    upvotes: 13,
    content: "I'm struggling to conceptualize quantum entanglement. Can someone explain it in simpler terms, preferably with examples?",
    tags: ["quantum-physics", "entanglement", "quantum-mechanics"]
  },
  {
    id: 2,
    title: "Recursive algorithms in dynamic programming",
    category: "Computer Science",
    author: "Samantha Lee",
    authorAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    date: "Yesterday",
    comments: 15,
    upvotes: 24,
    content: "I've been working on optimizing some recursive algorithms using memoization, but I'm encountering stack overflow errors. Any suggestions on how to convert these to iterative approaches?",
    tags: ["algorithms", "dynamic-programming", "recursion"]
  },
  {
    id: 3,
    title: "Analyzing literary themes in 'The Great Gatsby'",
    category: "Literature",
    author: "Michael Chen",
    authorAvatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    date: "3 days ago",
    comments: 21,
    upvotes: 18,
    content: "I'm writing an essay on recurring themes in 'The Great Gatsby' and would appreciate perspectives on how the author portrays the American Dream throughout the novel.",
    tags: ["literature", "american-literature", "fitzgerald"]
  },
  {
    id: 4,
    title: "Solving systems of differential equations",
    category: "Mathematics",
    author: "Jamie Garcia",
    authorAvatar: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg",
    date: "1 week ago",
    comments: 6,
    upvotes: 9,
    content: "Can someone walk me through the process of solving coupled differential equations? I understand the basics but am struggling with more complex systems.",
    tags: ["differential-equations", "calculus", "math"]
  }
];

const GROUPS = [
  {
    id: 1,
    name: "Machine Learning Study Circle",
    category: "Computer Science",
    memberCount: 248,
    description: "A community of ML enthusiasts studying algorithms, neural networks, and practical applications together.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    isJoined: true
  },
  {
    id: 2,
    name: "Theoretical Physics Group",
    category: "Physics",
    memberCount: 176,
    description: "Discussing quantum mechanics, relativity, string theory and the mysteries of the universe.",
    image: "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg",
    isJoined: false
  },
  {
    id: 3,
    name: "Organic Chemistry Lab Partners",
    category: "Chemistry",
    memberCount: 142,
    description: "Collaborate on lab experiments, discuss reaction mechanisms, and help each other with assignments.",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
    isJoined: false
  },
  {
    id: 4,
    name: "World Literature Club",
    category: "Literature",
    memberCount: 310,
    description: "Exploring great works of literature from around the world through analysis and discussion.",
    image: "https://images.pexels.com/photos/159866/books-book-pages-story-literature-159866.jpeg",
    isJoined: true
  },
  {
    id: 5,
    name: "Calculus Problem Solvers",
    category: "Mathematics",
    memberCount: 217,
    description: "Tackling challenging calculus problems and helping each other master complex concepts.",
    image: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg",
    isJoined: false
  },
  {
    id: 6,
    name: "Web Development Mentorship",
    category: "Computer Science",
    memberCount: 289,
    description: "Learn modern web development with guidance from experienced mentors.",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    isJoined: true
  }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [searchQuery, setSearchQuery] = useState('');
  const [discussions, setDiscussions] = useState(() => {
    const stored = localStorage.getItem('discussions');
    return stored ? JSON.parse(stored) : INITIAL_DISCUSSIONS;
  });

  useEffect(() => {
    localStorage.setItem('discussions', JSON.stringify(discussions));
  }, [discussions]);

  const handleNewPost = () => {
    const title = prompt('Enter post title');
    if (!title) return;

    const content = prompt('Enter post content');
    if (!content) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      category: "General",
      author: "You",
      authorAvatar: "https://via.placeholder.com/150",
      date: "Just now",
      comments: 0,
      upvotes: 0,
      tags: []
    };

    setDiscussions(prev => [newPost, ...prev]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-medium text-gray-900">Community</h1>
          <p className="text-gray-500 mt-1">Connect, collaborate, and learn together</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </button>
          <button 
            onClick={handleNewPost}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </button>
        </div>
      </div>

      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search in community..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-8">
          {TAB_ITEMS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 flex items-center text-sm font-medium hover:text-indigo-600 border-b-2 ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500'
                }`}
              >
                <Icon className="mr-2 h-5 w-5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {activeTab === 'discussions' && (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-gray-900">Recent Discussions</h2>
            <button className="flex items-center text-sm text-gray-700 bg-white px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="mr-1.5 h-4 w-4" />
              Sort: <span className="font-medium ml-1">Latest</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className="space-y-6">
            {discussions
              .filter((post) =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.content.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((post) => (
                <CommunityPost key={post.id} post={post} />
            ))}
          </div>
        </>
      )}

      {activeTab === 'groups' && (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-gray-900">Study Groups</h2>
            <button className="flex items-center text-sm text-gray-700 bg-white px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="mr-1.5 h-4 w-4" />
              Sort: <span className="font-medium ml-1">Popular</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GROUPS.map((group) => (
              <CommunityGroup key={group.id} group={group} />
            ))}
          </div>
        </>
      )}

      {activeTab === 'resources' && (
        <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-200 text-center">
          <BookOpen className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-gray-900 mb-2">Resource Sharing Coming Soon</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            We're working on a feature to let you share and discover academic resources, lecture notes, study guides, and more.
          </p>
          <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
            Get notified when it's ready
          </button>
        </div>
      )}
    </div>
  );
};

export default Community;
