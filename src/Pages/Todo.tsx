import List from '../components/List';
import { useState } from 'react';
import { Task } from '../types';
import Input from '../components/Input';

const Todo = () => {
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
  };

  const markItemDone = (itemNumber: number) => {
    console.log('mark item done, ', itemNumber);
    const newList = [...list];
    const index = newList.findIndex((obj) => obj.id === itemNumber);
    if (index !== null && index !== undefined) {
      newList[index].completed = true;
    }
    setList(newList);
  };

  const removeItem = (itemNumber: number) => {
    const newList = [...list];
    const index = newList.findIndex((obj) => obj.id === itemNumber);
    newList.splice(index, 1);
    console.log(index);
    setList(newList);
  };

  return (
    <div className="container">
      <Input submitItem={submitItem} />
      <List list={list} markItemDone={markItemDone} removeItem={removeItem} />
    </div>
  );
};
export default Todo;
//Add
//columns todo and in progress
//draggable
//
