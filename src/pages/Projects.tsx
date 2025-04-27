import React, { useState, useEffect } from 'react';
import { Plus, Search } from 'lucide-react';
import ProjectCard from '../components/projects/ProjectCard';

const CATEGORIES = ['All', 'Computer Science', 'Mathematics', 'Physics', 'Engineering', 'Biology', 'Chemistry', 'Arts'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState([]);

  // Load projects from localStorage when the component mounts
  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    if (storedProjects) {
      setProjects(storedProjects);
    }
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }, [projects]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    category: 'All',
    thumbnail: '',
    collaborators: 1,
    github: ''
  });

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProject({
        ...newProject,
        thumbnail: imageUrl,
      });
    }
  };

  const handleNewProjectSubmit = (e) => {
    e.preventDefault();

    const newProjectData = {
      ...newProject,
      id: projects.length + 1,
      author: "New Contributor",
      authorAvatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      date: "Just now",
      likes: 0,
    };

    const updatedProjects = [...projects, newProjectData];
    setProjects(updatedProjects); // Update state
    setIsModalOpen(false);
    setNewProject({ title: '', description: '', category: 'All', thumbnail: '', collaborators: 1, github: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-medium text-gray-900">Projects</h1>
          <p className="text-gray-500 mt-1">Discover and share academic projects</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </button>
      </div>

      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-semibold mb-4">Upload New Project</h2>
            <form onSubmit={handleNewProjectSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Project Title"
                value={newProject.title}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <textarea
                name="description"
                placeholder="Project Description"
                value={newProject.description}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <select
                name="category"
                value={newProject.category}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                {CATEGORIES.filter(c => c !== 'All').map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="number"
                name="collaborators"
                placeholder="Collaborators"
                min="1"
                value={newProject.collaborators}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="url"
                name="github"
                placeholder="GitHub Repository URL"
                value={newProject.github}
                onChange={handleChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="file"
                name="thumbnail"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-gray-700"
              />
              {newProject.thumbnail && (
                <img
                  src={newProject.thumbnail}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-md mt-2"
                />
              )}
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md w-full"
              >
                Submit Project
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-500 hover:text-gray-700 w-full text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
