import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Sparkles className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-medium text-white">AlphaByte</span>
          </div>
          <p className="text-sm leading-6 max-w-2xl mx-auto">
            Built with passion and precision by Aharnish Jha, Ayushmaan, Udhay Bhat, and Shreyansh.
          </p>
          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AlphaByte. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
