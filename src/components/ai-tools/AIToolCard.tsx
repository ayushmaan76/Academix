import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AIToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
  bgColor: string;
}

const AIToolCard: React.FC<AIToolCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  isActive, 
  onClick,
  bgColor
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-6 text-left rounded-xl transition-all ${
        isActive 
          ? `${bgColor} text-white shadow-lg` 
          : 'bg-white text-gray-700 shadow-sm border border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className={`p-3 rounded-full inline-flex ${
        isActive ? 'bg-white bg-opacity-20' : `${bgColor} text-white`
      }`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className={`text-lg font-medium mt-4 ${isActive ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`mt-2 text-sm ${isActive ? 'text-white text-opacity-90' : 'text-gray-500'}`}>
        {description}
      </p>
    </button>
  );
};

export default AIToolCard;