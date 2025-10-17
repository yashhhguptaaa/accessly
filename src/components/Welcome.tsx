import React from "react";

interface WelcomeProps {
  name?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name = "Developer" }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Welcome to Accessly!</h2>
      <p className="text-blue-100">
        Hello {name}, your React + TypeScript + Tailwind CSS setup is ready! 🚀
      </p>
    </div>
  );
};

export default Welcome;
