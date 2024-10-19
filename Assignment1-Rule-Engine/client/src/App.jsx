import { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'sonner';

import Flow from './components/Flow';
import HeroModalComponent from './components/HeroModalComponent';
import CombineRulesComponent from './components/CombineRulesComponent';
import EvaluateRulesComponent from './components/EvaluateRulesComponent';
import ModifyRuleComponent from './components/ModifyRuleComponent';
import CreateRuleComponent from './components/CreateRuleComponent';
import './App.css';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Sidebar initially closed
  const [rules, setRules] = useState(null);
  const [selectedSetting, setSelectedSetting] = useState('Select Rule'); // Track selected setting
  const [selectedRuleAst, setSelectedRuleAst] = useState(null); // For 'Select Rule'
  const [combinedAst, setCombinedAst] = useState(null); // For 'Combine Rules'
  const [evaluationResult, setEvaluationResult] = useState(null); // For 'Evaluate Rules'

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen); // Toggle sidebar

  // Fetch all rules from the backend API
  const fetchRules = async () => {
    try {
      const response = await axios.get('http://localhost:5555/all-rules');
      setRules(response.data.result); // Set rules in state
    } catch (error) {
      console.error('Error fetching rules:', error);
    }
  };

  // Call fetchRules when the component mounts
  useEffect(() => {
    fetchRules();
  }, []);

  // Handler for 'Select Rule'
  const handleSelectRule = (rule) => {
    setSelectedRuleAst(rule.ast_json);
    setCombinedAst(null); // Reset combined AST if any
    setEvaluationResult(null); // Reset evaluation result if any
    setIsDrawerOpen(false); // Close the drawer after selection
  };

  // Handler for 'Combine Rules'
  const handleCombineRules = async (selectedRuleIds, useMostFreqOperatorHeuristic, customOperator) => {
    try {
      const body = {
        rule_ids: selectedRuleIds,
        use_most_freq_operator_heuristic: useMostFreqOperatorHeuristic ? 1 : 0, // 1 = True, 0 = False
        custom_operator: customOperator,
        store_combined_rule: false,
      };
      const response = await axios.post('http://localhost:5555/rules/combine', body);
      setCombinedAst(response.data.combined_ast); // Store combined AST
      setSelectedRuleAst(null); // Reset selected rule AST if any
      setEvaluationResult(null); // Reset evaluation result if any
      setIsDrawerOpen(false); // Close the drawer after combining
    } catch (error) {
      console.error('Error combining rules:', error);
    }
  };

  // Handler for 'Evaluate Rules'
  const handleEvaluateRule = async (ruleId, evaluationData) => {
    try {
      const body = {
        rule_id: ruleId,
        data_for_evaluation: evaluationData,
      };
      const response = await axios.post('http://localhost:5555/rule/evaluate', body);
      setEvaluationResult(response.data.result); // Store evaluation result
      if(response.data.result == true){
        toast.success('True: Valid')
      }else{
        toast.error('False: Invalid User')
      }

    } catch (error) {
      console.error('Error evaluating rule:', error);
      toast.error(`Error: ${error?.message}`)
    }
  };

  return (
    <>
      <HeroModalComponent />

      {/* Sidebar Drawer */}
      <div
  id="drawer-navigation"
  className={`fixed top-0 left-0 z-40 w-[100%] md:w-[80%] h-screen p-4 overflow-y-auto transition-transform ${
    isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
  } bg-gray-400 bg-opacity-20 backdrop-blur-md backdrop-filter rounded-lg`}
>
        <h5 className="text-base font-semibold text-gray-500 uppercase">Engo</h5>
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
          <h1 className="text-3xl">Rule Engine Console</h1>
          <p className="text-sm">
            Use this console to fetch and select rules, render their ASTs, modify rules by adding/removing sub-expressions, and much more!
          </p>
        </div>

        {/* Settings Buttons */}
        <div className="flex gap-4 my-4">
          {['Create Rule', 'Select Rule', 'Combine Rules', 'Evaluate Rules', 'Modify Rule'].map((setting) => (
            <button
              key={setting}
              className={`px-4 py-2 rounded-lg ${
                selectedSetting === setting ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
              }`}
              onClick={() => setSelectedSetting(setting)}
            >
              {setting}
            </button>
          ))}
        </div>

        {/* Render Functionality Based on Selected Setting */}
        <div className="py-4">
          {selectedSetting === 'Select Rule' && (
            <>
              <h2 className="text-xl mb-4">Select a Rule</h2>
              {rules && rules.length ? (
                rules.map((rule) => (
                  <div
                    key={rule.id}
                    className="flex justify-between p-3 m-2 bg-gray-300 rounded cursor-pointer"
                    onClick={() => handleSelectRule(rule)}
                  >
                    <p>{rule.rule_text}</p>
                  </div>
                ))
              ) : (
                <p>No rules available</p>
              )}
            </>
          )}
          {
            selectedSetting == 'Create Rule' && (
              <CreateRuleComponent fetchRules = {fetchRules}/>
            )
          }

          {selectedSetting === 'Combine Rules' && (
            <CombineRulesComponent rules={rules} onCombineRules={handleCombineRules} />
          )}

          {selectedSetting === 'Evaluate Rules' && (
            <EvaluateRulesComponent rules={rules} onEvaluateRule={handleEvaluateRule} evaluationResult={evaluationResult} />
          )}

          {selectedSetting === 'Modify Rule' && (
            <ModifyRuleComponent rules={rules} />
          )}
        </div>
      </div>

      {/* Button to Open Sidebar */}
      <button
        className="absolute top-4 right-4 z-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={toggleDrawer}
      >
        Toggle Console!
      </button>

      {/* Pass the appropriate AST to Flow Component */}
      <Flow astJson={selectedRuleAst || combinedAst} evaluationResult={evaluationResult} />
      <Toaster richColors position="bottom-right" expand = {true} />
    </>
  );
}

export default App;
