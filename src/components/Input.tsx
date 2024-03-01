import { Task } from '../types';
import { useState } from 'react';

interface InputProps {
  submitItem: () => void;
}

const Input: React.FC<Task[]> = ({ submitItem }: InputProps) => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    submitItem(input);
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputContainer">
        <input
          value={input}
          className="addInput"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
    </form>
  );
};
export default Input;
