import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div 
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title Section */}
        <motion.section 
          className="text-center"
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 text-blue-800">About Academix</h1>
          <p className="text-gray-500 text-lg">Team AlphaByte - Aharnish Jha, Shreyansh Chaubey, Udhay Bhat, Ayushmaan</p>
        </motion.section>

        {/* Sections */}
        {sections.map((section, idx) => (
          <motion.section 
            key={idx}
            className="bg-white rounded-2xl shadow-2xl p-10 hover:shadow-3xl transition-shadow duration-300"
            initial={{ y: 50, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <h2 className={`text-3xl font-bold mb-6 ${section.color}`}>{section.title}</h2>
            {section.content}
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};

const sections = [
  {
    title: 'Problem Statement',
    color: 'text-red-600',
    content: (
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Rapid technological advancements have not bridged gaps in academic collaboration.</li>
        <li>Students and educators are dispersed across fragmented, non-academic platforms.</li>
        <li>Limited opportunities for cross-institutional sharing and project showcasing.</li>
        <li>Tier 2 and Tier 3 city students lack visibility and mentorship.</li>
        <li>Addressing fragmentation is critical for fostering innovation and research.</li>
      </ul>
    ),
  },
  {
    title: 'Our Solution',
    color: 'text-green-600',
    content: (
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Academix offers a centralized hybrid platform for academic collaboration.</li>
        <li>Students can upload projects, research papers, and innovations seamlessly.</li>
        <li>Educators mentor and guide discussions, enhancing learning depth.</li>
        <li>Communities based on interests like AI, Robotics, and Web Dev foster deeper bonds.</li>
        <li>Gamification through badges and real-time collaboration tools builds vibrant academic portfolios.</li>
      </ul>
    ),
  },
  {
    title: 'Tech Stack',
    color: 'text-blue-600',
    content: (
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Frontend: ReactJS for web, React Native or Flutter for mobile apps.</li>
        <li>Styling: Tailwind CSS and Material UI for responsive, intuitive designs.</li>
        <li>Backend: Node.js with Express.js for fast, scalable server-side development.</li>
        <li>Database: MongoDB and PostgreSQL ensuring flexible data management.</li>
        <li>Real-time Features: Socket.io for instant chat and notifications via Firebase.</li>
      </ul>
    ),
  },
  {
    title: 'Feasibility & Business Scope',
    color: 'text-purple-600',
    content: (
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Technical Feasibility: Leveraging stable, open-source, community-supported technologies.</li>
        <li>Operational Feasibility: MVP-first approach allows agile iterations based on user feedback.</li>
        <li>Financial Feasibility: Low initial costs through open-source tech and cloud solutions.</li>
        <li>Business Scope: Targeting the $313 billion Indian EdTech market and global opportunities.</li>
        <li>Scalability: Modular architecture enables phased rollout of new features.</li>
      </ul>
    ),
  },
  {
    title: 'Business Model',
    color: 'text-yellow-600',
    content: (
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Freemium access model ensuring wide adoption across student and educator groups.</li>
        <li>Premium features: Mentorship programs, analytics, enhanced project hosting.</li>
        <li>Institutional Licensing: Integration with university LMS systems.</li>
        <li>Revenue from hackathon hosting, AI-based skill assessments, and partnerships.</li>
        <li>Diversified and sustainable revenue streams built for scalability.</li>
      </ul>
    ),
  },
  {
    title: 'Conclusion',
    color: 'text-indigo-600',
    content: (
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Academix is redefining academic collaboration for the digital era.</li>
        <li>Breaks down geographical and institutional barriers, promoting global learning.</li>
        <li>Empowers students to build portfolios that lead to academic and career success.</li>
        <li>Strengthens peer learning and mentorship culture within educational ecosystems.</li>
        <li>A catalyst for innovation, collaboration, and the future of global education.</li>
      </ul>
    ),
  },
  {
    title: 'References',
    color: 'text-pink-600',
    content: (
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Statista - Indian EdTech Market Size Report.</li>
        <li>NASSCOM - Future of Work Insights.</li>
        <li>UNESCO – Digital Education Reports and Guidelines.</li>
        <li>GitHub Education Community Contributions.</li>
        <li>Stack Overflow Developer Ecosystem Surveys.</li>
      </ul>
    ),
  },
];

export default About;
