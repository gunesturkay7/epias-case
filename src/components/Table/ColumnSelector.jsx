/* Styles */
import "./ColumnSelector.scss";

const ColumnSelector = ({ columns, visibleColumns, setVisibleColumns }) => {
  const handleColumnToggle = (key) => {
    setVisibleColumns((prevVisibleColumns) => {
      if (prevVisibleColumns.find((column) => column.key === key)) {
        return prevVisibleColumns.filter((column) => column.key !== key);
      } else {
        return columns.filter(
          (column) => prevVisibleColumns.find((prevColumn) => prevColumn.key === column.key) || column.key === key
        );
      }
    });
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
