import { Task } from '../types';

const List: React.FC<Task[]> = ({ list }) => {
  const renderList = () => {
    return list.map((item) => {
      return <div key={item.id}>{item.description}</div>;
    });
  };

  return <div>{renderList()}</div>;
};
export default List;
