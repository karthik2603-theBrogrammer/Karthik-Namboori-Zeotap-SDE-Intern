import { useState, useEffect } from 'react';
import axios from 'axios';

import Flow from './components/Flow';
import HeroModalComponent from './components/HeroModalComponent';
import './App.css';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Sidebar initially closed
  const [rules, setRules] = useState(null)

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen); // Toggle sidebar

  // Fetch all rules from the backend API
  const fetchRules = async () => {
    try {
      const response = await axios.get('http://localhost:5555/all-rules');
      console.log(response)
      setRules(response.data.result); // Set rules in state
    } catch (error) {
      console.error('Error fetching rules:', error);
    }
  };

  // Call fetchRules when the component mounts
  useEffect(() => {
    fetchRules();
  }, []);
  return (
    <>
      <HeroModalComponent/>

      {/* Sidebar Drawer */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 w-[100%] md:w-[80%] backdrop-filter backdrop-blur-md bg-opacity-10 bg-gray-900 rounded-lg h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white `}
      >
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Engo
        </h5>
        <button
          type="button"
          onClick={toggleDrawer} // Close the drawer
          className="absolute top-2.5 end-2.5 text-gray-400 hover:bg-gray-200 hover:text-gray-900 p-1.5 rounded-lg"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 flex flex-col items-center justify-center gap-2">
          <h1 className='text-3xl'>Rule Engine Console</h1>
          <p className='text-sm'>Use this console to fetch select rules, render their Abstract Syntax Trees {"(AST's)"}, modify rules by adding/ removing sub expressions and so much more!</p>
        </div>

        <div className="py-4 flex flex-col items-center justify-center gap-2">
          <h1 className='text-3xl'>Available Rules</h1>
          <div className="">
            {
              rules != null ? (
                rules.map((rule, index) => (
                  <div key={index} className = "flex flex-row items-center justify-between text-black m-2 p-3 rounded-md bg-gray-300 cursor-pointer transition ease-in duration-100">
                    <p className='mx-3'>{index}</p>
                    <p className = "text-black">{rule?.rule_text}</p>
                  </div>
                  
                ))

              ) : (
                <p>No rule fetched!</p>
              ) 
            }
          </div>
          
        </div>
      </div>

      {/* Button to Open Sidebar */}
      <button
        className="absolute top-4 right-4 z-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={toggleDrawer}
      >
        Toggle Console!
      </button>

      <Flow />
    </>
  );
}

export default App;
