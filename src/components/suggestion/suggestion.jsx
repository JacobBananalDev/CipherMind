// src/components/SuggestionComponent.jsx
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const Suggestion = () => {
  const codeSuggestion = useSelector((state) => state.code.codeSuggestion);

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="p-4 mt-4"
    >
     <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <h3 className="font-bold">AI Code Suggestion:</h3>
        <pre className="mt-2 text-sm text-gray-700">{codeSuggestion}</pre>
      </div>
    </motion.div>
  );
};

export default Suggestion;
