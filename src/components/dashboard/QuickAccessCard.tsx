import React, { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface QuickAccessCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  tasks?: Task[];
}

const QuickAccessCard: React.FC<QuickAccessCardProps> = ({
  title,
  description,
  icon: Icon,
  tasks: initialTasks = [],
}) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-gray-100 rounded-full">
          <Icon className="h-6 w-6 text-gray-600" />
        </div>
        <h2 className="ml-3 text-lg font-semibold text-gray-800">{title}</h2>
      </div>

      <p className="text-sm text-gray-500 mb-6">{description}</p>

      {/* Tasks List */}
      <ul className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center cursor-pointer group"
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? (
                <CheckCircle className="h-5 w-5 text-green-500 group-hover:text-green-600" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              )}
              <span className={`ml-3 text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                {task.title}
              </span>
            </li>
          ))
        ) : (
          <p className="text-sm text-gray-400">No upcoming events.</p>
        )}
      </ul>
    </div>
  );
};

export default QuickAccessCard;
