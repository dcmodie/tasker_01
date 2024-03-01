import './App.css';
import List from './components/List';
import Todo from './Pages/Todo';
function App() {
  //tuple
  let role: [number, string];

  type printNameType = (name: string) => number;

  const printName = (name: string) => {
    console.log(name);
    return 5;
  };

  role = [4, ''];
  return (
    <>
      <Todo />
    </>
  );
}

export default App;
