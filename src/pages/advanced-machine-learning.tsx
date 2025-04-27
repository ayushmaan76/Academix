import React from 'react';
import { Link } from 'react-router-dom';

const AdvancedMachineLearning: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back to Dashboard */}
      <div className="mb-8">
        <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Dashboard</Link>
      </div>

      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Advanced Machine Learning</h1>
        <p className="text-xl text-gray-600">Deep dive into neural networks, reinforcement learning, and generative models.</p>
      </div>

      {/* Image */}
      <div className="mb-10 flex justify-center">
        <img
          src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Advanced Machine Learning"
          className="w-1/2 h-64 object-cover rounded-2xl shadow-xl"
        />
      </div>

      {/* Content */}
      <div className="space-y-10 text-gray-800 text-lg leading-relaxed px-2 sm:px-6">
        <p>
          Advanced Machine Learning involves cutting-edge techniques like deep neural networks, reinforcement learning, and generative adversarial networks (GANs). These methods are the foundation of modern artificial intelligence (AI), enabling systems to perform tasks that once required human intelligence.
        </p>
        <p>
          At its core, machine learning (ML) is about creating algorithms that allow computers to learn from data, make predictions, and improve over time without explicit programming. From supervised learning (where labeled data is used) to unsupervised learning (where models find hidden patterns), the range of algorithms in ML is vast.
        </p>
        <p>
          Some of the key methods include deep learning, which uses artificial neural networks to model complex patterns, reinforcement learning, where agents learn optimal actions through rewards, and unsupervised methods like clustering and dimensionality reduction.
        </p>
        
        <h2 className="text-3xl font-bold text-gray-900">Key Techniques in Advanced Machine Learning</h2>
        <ul className="list-disc list-inside space-y-3 pl-5">
          <li><strong>Deep Learning:</strong> A subset of machine learning that uses neural networks with many layers to analyze various forms of data, including text, images, and sound.</li>
          <li><strong>Reinforcement Learning (RL):</strong> This method involves training agents to make decisions by rewarding them for correct actions, crucial for real-world AI applications like robotics.</li>
          <li><strong>Generative Adversarial Networks (GANs):</strong> A pair of neural networks working in opposition to generate realistic data, such as images, from random noise.</li>
          <li><strong>Natural Language Processing (NLP):</strong> A branch of machine learning that focuses on enabling computers to understand, interpret, and generate human language.</li>
          <li><strong>Support Vector Machines (SVM):</strong> A supervised learning model that is widely used for classification tasks, particularly in high-dimensional spaces.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900">Applications of Advanced Machine Learning</h2>
        <ul className="list-disc list-inside space-y-3 pl-5">
          <li>Medical diagnosis using deep learning to identify diseases from medical images.</li>
          <li>Recommendation systems, like those used by Netflix or Amazon, powered by collaborative filtering and deep neural networks.</li>
          <li>Autonomous driving, where reinforcement learning enables vehicles to navigate through complex environments.</li>
          <li>Finance and algorithmic trading, where machine learning models predict stock movements and automate trading decisions.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900">Challenges in Machine Learning</h2>
        <p>
          Despite the impressive capabilities of machine learning algorithms, several challenges persist:
        </p>
        <ul className="list-disc list-inside space-y-3 pl-5">
          <li><strong>Overfitting:</strong> When models perform well on training data but fail to generalize to new, unseen data.</li>
          <li><strong>Bias in AI:</strong> Machine learning systems can inherit biases from training data, leading to unfair or unethical outcomes.</li>
          <li><strong>Data Privacy:</strong> Ensuring that machine learning models do not inadvertently expose sensitive personal information.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900">The Future of Machine Learning</h2>
        <p>
          The future of machine learning lies in solving more complex problems through continuous improvements in algorithms, data quality, and computational power. Areas like explainable AI (XAI) are becoming increasingly important, ensuring transparency in decisions made by AI systems. Furthermore, with advancements in quantum computing, machine learning models could reach unprecedented levels of efficiency.
        </p>
      </div>

      {/* VIDEO SECTION (bigger) */}
      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">🎥 Watch: Deep Learning Foundations</h2>
        <div className="w-full rounded-xl shadow-md overflow-hidden">
          <iframe
            className="w-full h-[500px] sm:h-[600px] rounded-xl"
            src="https://www.youtube.com/embed/O5nskjZ_GoI"
            title="Deep Learning Foundations"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default AdvancedMachineLearning;
