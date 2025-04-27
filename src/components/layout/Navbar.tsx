import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  BookOpen, 
  Users, 
  FolderKanban, 
  User, 
  Menu, 
  X,
  Bell,
  Trophy,
  Sun,
  Moon
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: BookOpen },
    { name: 'AI Tools', path: '/ai-tools', icon: Sparkles },
    { name: 'Projects', path: '/projects', icon: FolderKanban },
    { name: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { name: 'Community', path: '/community', icon: Users },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Render menu item (Link or external A tag)
  const renderNavItem = (item) => {
    const Icon = item.icon;
    const isActive = location.pathname === item.path;

    if (item.name === 'AI Tools') {
      return (
        <a
          key={item.name}
          href="https://academixxx.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all ${
            isActive
              ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50'
              : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800'
          }`}
        >
          <Icon className="h-5 w-5 mr-1.5" />
          <span>{item.name}</span>
        </a>
      );
    }

    return (
      <Link
        key={item.name}
        to={item.path}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all ${
          isActive
            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50'
            : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800'
        }`}
      >
        <Icon className="h-5 w-5 mr-1.5" />
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sparkles className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="ml-2 text-xl font-medium text-gray-900 dark:text-white">Academix</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-end flex-1 space-x-4">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => renderNavItem(item))}
            </div>
            
            <div className="flex items-center pl-4 space-x-2 border-l border-gray-200 dark:border-gray-700">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile Nav Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => renderNavItem(item))}

            <button 
              onClick={toggleTheme}
              className="flex w-full items-center px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {isDarkMode ? (
                <>
                  <Sun className="mr-3 h-6 w-6" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="mr-3 h-6 w-6" />
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
