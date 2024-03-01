import List from '../components/List';
import { useState } from 'react';
import { Task } from '../types';
import Input from '../components/Input';
const Todo = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState<Task[]>([
    {
      id: 1,
      description: 'wash car',
      completed: false,
    },
    { id: 2, description: 'clean garage', completed: false },
  ]);

  const submitItem = (description: string) => {
    console.log('list', list);
    const newObj = {
      id: Math.floor(Math.random() * 10000),
      description: description,
      completed: false,
    };
    const newList = [...list];
    newList.push(newObj);
    setList(newList);
    //    console.log('description: ', description);
  };

  return (
    <div className="container">
      <Input submitItem={submitItem} />

      <List list={list} />
    </div>
  );
};
export default Todo;
