import React from 'react';
import { Users, ArrowRight, CheckCircle } from 'lucide-react';

interface GroupProps {
  group: {
    id: number;
    name: string;
    category: string;
    memberCount: number;
    description: string;
    image: string;
    isJoined: boolean;
  };
}

const CommunityGroup: React.FC<GroupProps> = ({ group }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
      <div 
        className="h-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${group.image})` }}
      >
        <div className="h-full bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">
            {group.category}
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-1" />
            <span>{group.memberCount}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 mb-2">{group.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{group.description}</p>
        
        {group.isJoined ? (
          <button className="w-full flex items-center justify-center px-4 py-2 border border-indigo-500 rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100 text-sm font-medium transition-colors">
            <CheckCircle className="h-4 w-4 mr-2" />
            Joined
          </button>
        ) : (
          <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
            Join Group
          </button>
        )}
        
        <button className="w-full flex items-center justify-center mt-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors">
          View Details
          <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CommunityGroup;