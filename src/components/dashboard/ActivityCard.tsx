import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
  color: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, description, time, icon: Icon, color }) => {
  return (
    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className={`p-3 rounded-full mr-4 ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
};

export default ActivityCard;