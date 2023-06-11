import { useDispatch, useSelector } from "react-redux";
import { toggleColumnVisibility } from "../../redux/tableSlice"; // Adjust path as needed
import "./ColumnSelector.scss";

const ColumnSelector = ({ columns }) => {
  const dispatch = useDispatch();
  const visibleColumns = useSelector((state) => state.table.visibleColumns);

  const handleColumnToggle = (key) => {
    dispatch(toggleColumnVisibility(key));
  };

  return (
    <div className="column-selector">
      {columns.map((column) => (
        <label key={column.key}>
          <input
            type="checkbox"
            checked={!!visibleColumns.find((c) => c.key === column.key)}
            onChange={() => handleColumnToggle(column.key)}
          />
          {column.title}
        </label>
      ))}
    </div>
  );
};

export default ColumnSelector;
