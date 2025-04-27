import React from 'react';
import { MessageSquare, ArrowUp, ArrowDown, Share2 } from 'lucide-react';

interface PostProps {
  post: {
    id: number;
    title: string;
    category: string;
    author: string;
    authorAvatar: string;
    date: string;
    comments: number;
    upvotes: number;
    content: string;
    tags: string[];
  };
}

const CommunityPost: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:border-gray-300 transition-all">
      <div className="flex">
        <div className="mr-4 flex flex-col items-center">
          <button className="p-1 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">
            <ArrowUp className="h-5 w-5" />
          </button>
          <span className="text-sm font-medium text-gray-700 my-1">{post.upvotes}</span>
          <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md">
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded">
              {post.category}
            </span>
            <div className="flex items-center ml-auto space-x-2">
              <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 mb-2">{post.title}</h3>
          
          <p className="text-gray-600 text-sm mb-3">{post.content}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center">
              <img 
                src={post.authorAvatar} 
                alt={post.author} 
                className="h-8 w-8 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="text-xs font-medium text-gray-900">{post.author}</p>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{post.comments} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;