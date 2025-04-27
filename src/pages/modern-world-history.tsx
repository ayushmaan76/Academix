import React from 'react';
import { Link } from 'react-router-dom';

const ModernWorldHistory: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Link to="/" className="text-blue-500 hover:underline">&larr; Back to Dashboard</Link>
      </div>

      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Modern World History</h1>
        <p className="text-xl text-gray-600">Exploring the key events, movements, and figures that shaped the modern world.</p>
      </div>

      <div className="mb-10">
        <img
          src="https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Modern World History"
          className="w-full rounded-2xl shadow-xl"
        />
      </div>

      <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
        <p>
          Modern World History is a vast and dynamic subject that spans centuries of transformation. It covers the events from the Renaissance to the present day, including significant political, economic, social, and cultural changes that have shaped our world.
        </p>
        <p>
          Key events include the Industrial Revolution, the World Wars, the Cold War, the rise of global capitalism, the decolonization of Africa and Asia, and the social movements of the 20th century.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">Key Events in Modern World History</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>The Renaissance:</strong> A period of cultural rebirth in Europe, where art, science, and philosophy flourished, laying the foundation for modern Western thought.</li>
          <li><strong>The French Revolution:</strong> A turning point in world history, inspiring revolutions and movements for liberty, equality, and fraternity.</li>
          <li><strong>The Industrial Revolution:</strong> A time of rapid industrialization that radically changed economies, societies, and daily life, introducing new technologies and reshaping labor.</li>
          <li><strong>World Wars:</strong> The two World Wars had a profound effect on global politics, leading to the creation of the United Nations and the rise of superpowers like the United States and the Soviet Union.</li>
          <li><strong>The Cold War:</strong> A period of political tension between the U.S. and the Soviet Union that divided the world ideologically and geopolitically.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">Important Movements and Ideologies</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Imperialism and Colonialism:</strong> European powers expanded their empires across the globe, leaving a legacy of cultural, economic, and political influence.</li>
          <li><strong>Socialism and Communism:</strong> These ideologies, which emphasized collective ownership and class struggle, have shaped many nations, especially during the 20th century.</li>
          <li><strong>Feminism and Civil Rights Movements:</strong> A series of movements advocating for equal rights, gender equality, and the end of racial segregation.</li>
          <li><strong>Globalization:</strong> The interconnectedness of nations through trade, technology, and communication, which has accelerated in recent decades.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900">The Modern World: Ongoing Challenges</h2>
        <p>
          The modern world is not without its challenges. Issues such as global warming, political instability, income inequality, and the rise of populism are reshaping global dynamics. Understanding these issues requires a deep dive into the complex historical roots that continue to affect us today.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>
        <p>
          The history of the modern world is not only about significant events but also about understanding the ideologies, movements, and figures that helped shape our current world. By studying modern world history, we gain insight into the forces that continue to impact politics, economics, and culture across the globe.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">🎥 Watch: History of the World in 7 Minutes</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-96 rounded-xl shadow-md"
            src="https://www.youtube.com/embed/V5jfHkpQ-IA"
            title="History of the World in 7 Minutes"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ModernWorldHistory;
