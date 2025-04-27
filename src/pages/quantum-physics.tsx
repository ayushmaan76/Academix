import React from 'react';
import { Link } from 'react-router-dom';

const QuantumPhysics: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Dashboard</Link>
      </div>

      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Quantum Physics Fundamentals</h1>
        <p className="text-xl text-gray-600">
          Explore the strange and fascinating world where particles exist in multiple places at once and reality behaves unlike anything we experience in daily life.
        </p>
      </div>

      <div className="mb-10">
        <img 
          src="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Quantum Physics" 
          className="w-full rounded-2xl shadow-xl"
        />
      </div>

      <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
        <p>
          Quantum physics, or quantum mechanics, is the fundamental theory that describes the behavior of particles on the smallest scales — atoms, photons, and subatomic particles. Unlike classical physics, quantum physics reveals a universe that is inherently probabilistic and non-deterministic.
        </p>

        <p>
          The revolutionary ideas of physicists like <strong>Albert Einstein</strong>, <strong>Niels Bohr</strong>, and <strong>Werner Heisenberg</strong> in the early 20th century changed our understanding of nature forever.
        </p>

        <p>
          Some <span className="font-semibold">key principles</span> you should know:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>Superposition:</strong> A particle can exist in multiple states at the same time until it is observed. Example: Schrödinger’s cat being both alive and dead.</li>
          <li><strong>Entanglement:</strong> Two particles can become connected such that the state of one instantly influences the other, even across vast distances.</li>
          <li><strong>Uncertainty Principle:</strong> Proposed by Heisenberg, it states you cannot simultaneously know both the position and momentum of a particle exactly.</li>
          <li><strong>Wave-Particle Duality:</strong> Light and matter exhibit properties of both particles and waves, depending on how they are observed.</li>
        </ul>

        <p>
          Quantum mechanics is not just theory — it powers technologies like <strong>lasers</strong>, <strong>MRI machines</strong>, <strong>quantum computing</strong>, and even the inner workings of your smartphone's semiconductors.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Real-World Applications</h2>
        <p>
          Without quantum theory, modern technology would look completely different. Some examples include:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Quantum Cryptography: Provides secure communication methods based on the laws of physics rather than human-made algorithms.</li>
          <li>Quantum Computing: Leverages quantum bits (qubits) to perform computations at speeds unimaginable for classical computers.</li>
          <li>Medical Imaging: MRI (Magnetic Resonance Imaging) uses principles of quantum mechanics to visualize internal organs.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8">Mind-Bending Thought Experiments</h2>
        <p>
          Quantum physics challenges our intuition. Famous examples include:
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li><strong>Schrödinger’s Cat:</strong> A cat in a box can be simultaneously dead and alive until observed.</li>
          <li><strong>Double-Slit Experiment:</strong> Particles act like waves when not observed, but like particles when measured — suggesting observation affects reality.</li>
        </ul>

        <p>
          Quantum physics not only teaches us about nature, but also challenges deep philosophical questions about the nature of reality itself.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">🎥 Watch: Quantum Physics Explained</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-96 rounded-xl shadow-md"
            src="https://www.youtube.com/embed/p7bzE1E5PMY"
            title="Quantum Physics Explained"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default QuantumPhysics;
