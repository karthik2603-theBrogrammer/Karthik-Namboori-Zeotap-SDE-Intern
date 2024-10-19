import { useState } from 'react';
import axios from 'axios';

function CreateRuleComponent({ fetchRules }) {
  const [ruleText, setRuleText] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5555/rule', {
        rule_text: ruleText,
      });
      setMessage(`Success: ${response.data.message}`);
      setRuleText(''); // Clear the input field
      fetchRules(); // Refresh rules after adding a new one
    } catch (error) {
      console.error('Error creating rule:', error);
      setMessage(`Error: ${error.response?.data?.error || 'Failed to create rule'}`);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl">Create New Rule</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          value={ruleText}
          onChange={(e) => setRuleText(e.target.value)}
          placeholder="Enter rule text"
          className="p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Add Rule
        </button>
      </form>

      {message && (
        <p className={`mt-2 ${message.startsWith('Success') ? 'text-green-500' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}

export default CreateRuleComponent;
