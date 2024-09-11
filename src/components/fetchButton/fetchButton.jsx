// src/components/FetchButton.jsx
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCodeSuggestion } from '../../api/aiService';
import { setCodeSuggestion } from '../../store/codeSlice';

const FetchButton = () => {
  const dispatch = useDispatch();
  const codeInput = useSelector((state) => state.code.codeInput);

  const handleFetch = async () => {
    const suggestion = await fetchCodeSuggestion(codeInput);
    dispatch(setCodeSuggestion(suggestion));
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleFetch}
      className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
    >
      Get AI Suggestion
    </motion.button>
  );
};

export default FetchButton;
