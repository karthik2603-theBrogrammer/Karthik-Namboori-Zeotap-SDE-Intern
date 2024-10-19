import { useState } from 'react';

function CombineRulesComponent({ rules, onCombineRules }) {
  const [selectedRuleIds, setSelectedRuleIds] = useState([]);
  const [useMostFreqOperatorHeuristic, setUseMostFreqOperatorHeuristic] = useState(false);
  const [customOperator, setCustomOperator] = useState('');

  const handleRuleSelection = (ruleId) => {
    setSelectedRuleIds((prevSelected) =>
      prevSelected.includes(ruleId)
        ? prevSelected.filter((id) => id !== ruleId)
        : [...prevSelected, ruleId]
    );
  };

  const handleSubmit = () => {
    if (selectedRuleIds.length >= 2) {
      onCombineRules(selectedRuleIds, useMostFreqOperatorHeuristic, customOperator);
    } else {
      alert('Please select at least two rules to combine.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl">Select Rules to Combine</h1>
      <div className="w-full">
        {rules && rules.length ? (
          rules.map((rule) => (
            <div
              key={rule.id}
              className={`flex items-center p-3 m-2 rounded cursor-pointer ${
                selectedRuleIds.includes(rule.id) ? 'bg-blue-300' : 'bg-gray-300'
              }`}
              onClick={() => handleRuleSelection(rule.id)}
            >
              <input
                type="checkbox"
                checked={selectedRuleIds.includes(rule.id)}
                onChange={() => handleRuleSelection(rule.id)}
              />
              <p className="ml-2">{rule.rule_text}</p>
            </div>
          ))
        ) : (
          <p>No rules available</p>
        )}
      </div>

      <div className="flex flex-col items-start mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={useMostFreqOperatorHeuristic}
            onChange={(e) => setUseMostFreqOperatorHeuristic(e.target.checked)}
          />
          <span className="ml-2">Use Most Frequent Operator Heuristic</span>
        </label>
        <label className="mt-2">
          Custom Operator:
          <input
            type="text"
            value={customOperator}
            onChange={(e) => setCustomOperator(e.target.value)}
            className="ml-2 p-1 border rounded"
          />
        </label>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleSubmit}
      >
        Combine Selected Rules
      </button>
    </div>
  );
}

export default CombineRulesComponent;
