interface ListItemProps {
  item: { id: number; description: string; completed: boolean };
  markItemDone: (itemNumber: number) => void;
  removeItem: (itemNumber: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  item,
  markItemDone,
  removeItem,
}) => {
  const { description, id } = item;

  const testCallBack = (e: React.MouseEvent) => {
    console.log(e);
  };

  return (
    <div className="listItem">
      <span
        className={item.completed ? 'itemDescComplete' : 'itemDescIncomplete'}
      >
        {description}
      </span>
      <span>
        <button
          className="completeButton"
          onClick={() => {
            removeItem(id);
          }}
        >
          Remove
        </button>
        <button
          className="completeButton"
          onClick={() => {
            markItemDone(id);
          }}
        >
          {' '}
          Complete Item
        </button>
        <button className="completeButton" onClick={testCallBack}>
          Test Button!
        </button>
      </span>
    </div>
  );
};
export default ListItem;
