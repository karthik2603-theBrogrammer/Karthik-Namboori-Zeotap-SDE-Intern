import { useState } from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { toast } from 'sonner';
import axios from 'axios';

function CreateRuleComponent({ fetchRules }) {
    const [ruleText, setRuleText] = useState('');
    const [loading, setLoading] = useState(false); // Track loading state

    const handleSampleClick = (sample) => {
        setRuleText(sample); // Set the selected sample as input value
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading indicator
        try {
            const response = await axios.post('http://localhost:5555/rule', {
                rule_text: ruleText,
            });
            toast.success(`Success: ${response.data.message}`);
            setRuleText(''); // Clear input field
            fetchRules(); // Refresh the list of rules
        } catch (error) {
            toast.error(
                `Error: ${error.response?.data?.error || 'Failed to create rule'}`
            );
        } finally {
            setLoading(false); // Stop loading indicator
        }
    };

    const sampleRules = [
        "((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)",
        "((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)",
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            <h2 className="text-2xl">Create New Rule</h2>
            <p className="text-center text-gray-600">
                Enter a new rule below and click <strong>Add Rule</strong> to create it.
            </p>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-4 w-full md:w-1/2"
            >
                <Input
                    type="text"
                    label="Rule Text"
                    placeholder="Enter rule text..."
                    value={ruleText}
                    onChange={(e) => setRuleText(e.target.value)}
                    required
                />

                <Button
                    type="submit"
                    isLoading={loading} // Show loading state
                    disabled={!ruleText || loading} // Disable when loading or empty input
                    className="mt-4 px-4 py-2 w-[100%] cursor-pointer"
                    variant="flat"
                    color="primary"
                >
                    Add Rule
                </Button>
            </form>

            {/* Sample Rules Section */}
            <div className="mt-8 w-full md:w-1/2">
                <h3 className="text-lg font-semibold">Try a few sample rules:</h3>
                <ul className="list-disc list-inside mt-4 space-y-2">
                    {sampleRules.map((sample, index) => (
                        <Button
                            key={index}
                            className="mt-4 p-9 md:p-5  w-[100%] cursor-pointer text-wrap"
                            variant="flat"
                            color="primary"
                            onClick={() => handleSampleClick(sample)}
                        >
                            {sample}
                        </Button>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CreateRuleComponent;
