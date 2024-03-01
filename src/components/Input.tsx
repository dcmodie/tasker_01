import { Task } from '../types';
import { useState } from 'react';

interface InputProps {
  submitItem: (description: string) => void;
}

const Input: React.FC<InputProps> = ({ submitItem }) => {
  const [input, setInput] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    submitItem(input);
    setInput('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input value={input} className="addInput" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};
export default Input;
