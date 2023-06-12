import "./ColumnSelector.scss";
const ColumnSelector = ({ columns, visibleColumns, setVisibleColumns }) => {
  const handleColumnToggle = (key) => {
    if (visibleColumns.find((column) => column.key === key)) {
      setVisibleColumns(visibleColumns.filter((column) => column.key !== key));
    } else {
      setVisibleColumns([...visibleColumns, columns.find((column) => column.key === key)]);
    }
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
