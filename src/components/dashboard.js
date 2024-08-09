import React, { useState, useEffect } from 'react';
import { Sun, Moon, User, LogOut, Bell, Plus, Eye, Edit, Trash2 } from 'lucide-react';
import '../index.css';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMachines, setShowMachines] = useState(false);
  const [urgentPrompts, setUrgentPrompts] = useState([
    { id: 1, message: "Urgent Notification 1" },
    { id: 2, message: "Urgent Notification 2" },
    { id: 3, message: "Urgent Notification 3" },
  ]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAddMachine = () => {
    alert('Add new machine functionality here!');
  };

  const handleShowMachines = () => {
    setShowMachines(!showMachines);
  };

  const handleAcknowledge = (id) => {
    setUrgentPrompts(urgentPrompts.filter(prompt => prompt.id !== id));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        {/* Header */}
        <header className="bg-green-600 dark:bg-green-800 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Welcome, [Name]!</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-green-700 transition-colors duration-200"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-green-700 transition-colors duration-200">
                  <User className="h-5 w-5" />
                </button>
                {/* Dropdown menu can be implemented here */}
              </div>
            </div>
          </div>
        </header>

        {/* Main Layout */}
        <div className="container mx-auto mt-8 flex flex-col md:flex-row gap-8 px-4">
          {/* Left Sidebar */}
          <aside className="w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Urgent Prompts</h2>
            {urgentPrompts.map((prompt) => (
              <div key={prompt.id} className="mb-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <Bell className="h-4 w-4 mr-2" />
                  <span className="font-semibold">Urgent!</span>
                </div>
                <p className="mb-2">{prompt.message}</p>
                <button
                  onClick={() => handleAcknowledge(prompt.id)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors duration-200"
                >
                  Acknowledge
                </button>
              </div>
            ))}
          </aside>

          {/* Main Content Area */}
          <main className="w-full md:w-3/4">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap gap-4 mb-6">
                <button
                  onClick={handleAddMachine}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center transition-colors duration-200"
                >
                  <Plus className="mr-2 h-4 w-4" /> Add New Machine
                </button>
                <button
                  onClick={handleShowMachines}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center transition-colors duration-200"
                >
                  <Eye className="mr-2 h-4 w-4" /> {showMachines ? 'Hide' : 'Display'} Machines
                </button>
              </div>

              {showMachines && (
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Machines</h2>
                  <ul className="space-y-4">
                    {[1, 2, 3].map((machine) => (
                      <li key={machine} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md shadow">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium">Machine {machine}</h3>
                          <div className="flex space-x-2">
                            <button className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors duration-200">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition-colors duration-200">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors duration-200">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-2 text-sm">
                          <p>Status: Online</p>
                          <p>Last Maintenance: 2024-08-01</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;