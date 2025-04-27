import React from 'react';
import { Link } from 'react-router-dom';

const AdvancedCalculus: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Dashboard</Link>
      </div>

      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Advanced Calculus</h1>
        <p className="text-xl text-gray-600">Exploring the concepts of limits, derivatives, integrals, and differential equations.</p>
      </div>

      <div className="mb-10">
        <img
          src="https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Advanced Calculus"
          className="w-full rounded-2xl shadow-xl"
        />
      </div>

      <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
        <p>
          Advanced calculus is an extension of elementary calculus, dealing with concepts like multivariable functions, vector calculus, and differential equations. These concepts are essential for understanding complex systems in physics, engineering, economics, and other disciplines.
        </p>
        <p>
          In advanced calculus, we study how functions behave and change, including how they can be approximated or optimized using tools like derivatives and integrals. Additionally, it covers partial derivatives, double and triple integrals, and the application of calculus in real-world problems.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">Key Concepts in Advanced Calculus</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Multivariable Functions:</strong> Functions that depend on more than one variable, such as f(x, y), which can represent surfaces in three-dimensional space.</li>
          <li><strong>Partial Derivatives:</strong> Derivatives taken with respect to one variable while holding others constant. These are important for understanding the behavior of functions in multiple dimensions.</li>
          <li><strong>Line Integrals:</strong> Integrals that allow the calculation of quantities along a curve or path, important for physics and engineering applications.</li>
          <li><strong>Surface Integrals:</strong> Similar to line integrals, but applied to functions defined over a surface in space.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">Applications of Advanced Calculus</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Modeling fluid flow and heat conduction using partial differential equations.</li>
          <li>Optimizing functions in economics or engineering, such as cost or efficiency analysis.</li>
          <li>Analyzing electromagnetic fields in physics using vector calculus.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>
        <p>
          Advanced calculus provides the tools necessary for solving complex problems in higher-dimensional spaces. It is integral to fields like physics, engineering, and economics and remains a critical area of study for anyone pursuing careers in these disciplines.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">🎥 Watch: Understanding Multivariable Calculus</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-96 rounded-xl shadow-md"
            src="https://www.youtube.com/embed/fKh_U0FhQIk"
            title="Understanding Multivariable Calculus"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCalculus;
