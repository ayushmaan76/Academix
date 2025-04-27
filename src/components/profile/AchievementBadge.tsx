import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AchievementProps {
  achievement: {
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
    date: string;
    color: string;
  };
}

const AchievementBadge: React.FC<AchievementProps> = ({ achievement }) => {
  const { name, description, icon: Icon, date, color } = achievement;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-all">
      <div className={`p-3 rounded-full inline-flex ${color} text-white mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      
      <h3 className="text-lg font-medium text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      
      <div className="text-xs text-gray-500">
        Earned {date}
      </div>
    </div>
  );
};

export default AchievementBadge;