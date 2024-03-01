import { Task } from '../types';
import ListItem from './ListItem';

interface ListProps {
  list: Task[];
  markItemDone: (itemNumber: number) => void;
  removeItem: (itemNumber: number) => void;
}

const List: React.FC<ListProps> = ({ list, markItemDone, removeItem }) => {
  const renderList = () => {
    return list.map((item) => {
      return (
        <div key={item.id}>
          <ListItem
            item={item}
            markItemDone={markItemDone}
            removeItem={removeItem}
          />
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
};
export default List;
