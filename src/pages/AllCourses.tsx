// src/pages/AllCourses.tsx

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import RecommendationCard from '../components/dashboard/RecommendationCard';

const AllCourses: React.FC = () => {
  const courses = [
    {
      title: "Advanced Machine Learning",
      category: "Computer Science",
      progress: 65,
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      path: "/advanced-machine-learning",
    },
    {
      title: "Quantum Physics Fundamentals",
      category: "Physics",
      progress: 32,
      image: "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg",
      path: "/quantum-physics",
    },
    {
      title: "Modern World History",
      category: "History",
      progress: 78,
      image: "https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg",
      path: "/modern-world-history",
    },
    {
      title: "Advanced Calculus",
      category: "Mathematics",
      progress: 45,
      image: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg",
      path: "/advanced-calculus",
    },
    // You can add even more courses here
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      

      <h1 className="text-2xl font-semibold text-gray-900 mb-6">All Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <RecommendationCard
            key={index}
            title={course.title}
            category={course.category}
            progress={course.progress}
            image={course.image}
            path={course.path}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
