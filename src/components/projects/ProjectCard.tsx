import React from 'react';
import { Clock, Users, Heart } from 'lucide-react';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    category: string;
    description: string;
    thumbnail: string;
    author: string;
    authorAvatar: string;
    collaborators: number;
    date: string;
    likes: number;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.thumbnail})` }}
      />
      
      <div className="p-5">
        <div className="flex items-center mb-3">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">
            {project.category}
          </span>
          <div className="flex items-center ml-auto text-sm text-gray-500">
            <Heart className="h-4 w-4 mr-1" />
            <span>{project.likes}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{project.description}</p>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <img 
              src={project.authorAvatar} 
              alt={project.author} 
              className="h-8 w-8 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="text-xs font-medium text-gray-900">{project.author}</p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center text-xs text-gray-500">
            <Users className="h-3 w-3 mr-1" />
            <span>{project.collaborators} collaborators</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;