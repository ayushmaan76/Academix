import React from 'react';
import { Link } from 'react-router-dom';  // Correct import

interface RecommendationCardProps {
  title: string;
  category: string;
  progress: number;
  image: string;
  path: string;  // Add path prop for navigation
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ title, category, progress, image, path }) => {
  return (
    <Link to={path}> {/* Use 'to' prop instead of 'href' */}
      <div className="relative overflow-hidden rounded-xl shadow-sm group transition-all hover:shadow-md">
        <div 
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="text-xs text-indigo-200 mb-1">{category}</p>
          <h3 className="text-lg font-medium">{title}</h3>
          
          <div className="mt-2">
            <div className="w-full bg-gray-600 bg-opacity-50 rounded-full h-1.5">
              <div 
                className="bg-indigo-500 h-1.5 rounded-full" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs mt-1">{progress}% complete</p>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white rounded-full shadow-md text-indigo-600 hover:text-indigo-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default RecommendationCard;
