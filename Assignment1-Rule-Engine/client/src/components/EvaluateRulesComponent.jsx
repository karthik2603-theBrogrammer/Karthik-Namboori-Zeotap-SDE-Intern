import { useState } from 'react';
import { Toaster, toast } from 'sonner'


const ATTRIBUTE_CATALOG = ['age', 'department', 'salary', 'experience'];

function EvaluateRulesComponent({ rules, onEvaluateRule, evaluationResult }) {
    const [selectedRuleId, setSelectedRuleId] = useState(null);
    const [dataForEvaluation, setDataForEvaluation] = useState({});

    // Helper function to ensure numbers are correctly parsed
    const parseValue = (attribute, value) => {
        if (['age', 'salary', 'experience'].includes(attribute)) {
            const parsedValue = parseFloat(value);
            return isNaN(parsedValue) ? '' : parsedValue; // Return empty string if not a valid number
        }
        return value; // Return as-is for non-numeric fields
    };

    const handleInputChange = (attribute, value) => {
        setDataForEvaluation((prevData) => ({
            ...prevData,
            [attribute]: parseValue(attribute, value),
        }));
    };

    const handleSubmit = () => {
        if (selectedRuleId) {
            onEvaluateRule(selectedRuleId, dataForEvaluation);
        } else {
            toast.warning('Please select a rule to evaluate.')
        }
    };

    return (
        <>
            

            <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-2xl">Evaluate Rule</h1>
                    <p className="">This feature allows you to check if an user is
                        of that cohort based on the rule you select.</p>
                </div>


                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-start mt-4 gap-3">
                        {ATTRIBUTE_CATALOG.map((attribute) => (
                            <label key={attribute} className="mt-2">
                                {attribute}:
                                <input
                                    type="text"
                                    value={dataForEvaluation[attribute] || ''}
                                    onChange={(e) => handleInputChange(attribute, e.target.value)}
                                    className="ml-2 p-1 border rounded"
                                />
                            </label>
                        ))}
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                        onClick={handleSubmit}
                    >
                        Evaluate Rule
                    </button>
                </div>
                <div className="w-full">
                    {rules && rules.length ? (
                        rules.map((rule) => (
                            <div
                                key={rule.id}
                                className={`flex items-center p-3 m-2 rounded cursor-pointer ${selectedRuleId === rule.id ? 'bg-blue-300' : 'bg-gray-300'
                                    }`}
                                onClick={() => setSelectedRuleId(rule.id)}
                            >
                                <p>{rule.rule_text}</p>
                            </div>
                        ))
                    ) : (
                        <p>No rules available</p>
                    )}
                </div>



                <button
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                    onClick={handleSubmit}
                >
                    Evaluate Rule
                </button>

                {/* Display evaluation result */}
                {evaluationResult !== null && (
                    <div className="mt-4">
                        <h2 className="text-xl">Evaluation Result:</h2>
                        <p>{evaluationResult.toString()}</p>
                    </div>
                )}

            </div>
        </>
    );
}

export default EvaluateRulesComponent;
