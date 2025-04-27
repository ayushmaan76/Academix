import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Dashboard from './pages/Dashboard';
import AITools from './pages/AITools';
import Projects from './pages/Projects';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import NotFound from './pages/NotFound';
import QuantumPhysics from './pages/quantum-physics';
import AdvancedCalculus from './pages/advanced-calculus';
import AdvancedMachineLearning from './pages/advanced-machine-learning';
import ModernWorldHistory from './pages/modern-world-history';
import AllCourses from './pages/AllCourses'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/all-courses" element={<AllCourses />} />

            {/* Learning Pages */}
            <Route path="/quantum-physics" element={<QuantumPhysics />} />
            <Route path="/advanced-calculus" element={<AdvancedCalculus />} />
            <Route path="/advanced-machine-learning" element={<AdvancedMachineLearning />} />
            <Route path="/modern-world-history" element={<ModernWorldHistory />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
