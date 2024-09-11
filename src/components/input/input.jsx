// src/components/InputComponent.jsx
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setCodeInput } from '../../store/codeSlice';

const Input = () => {
  const dispatch = useDispatch();
  const codeInput = useSelector((state) => state.code.codeInput);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4"
    >
      <textarea
        value={codeInput}
        onChange={(e) => dispatch(setCodeInput(e.target.value))}
        className="w-full h-40 p-2 border border-gray-300 rounded-md"
        placeholder="Type your code here..."
      />
    </motion.div>
  );
};

export default Input;
