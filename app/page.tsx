import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">My Simple MVP</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc pl-5">
              <li>Easy to use</li>
              <li>Modern design</li>
              <li>Fast and reliable</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;