/* Styles */
import "./TableCheckBox.scss";

const TableCheckBox = ({ column, visibleColumns, handleColumnToggle }) => {
  const isChecked = !!visibleColumns.find((c) => c.key === column.key);

  const handleChange = () => {
    handleColumnToggle(column.key);
  };

  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <label>{column.title}</label>
    </div>
  );
};

export default TableCheckBox;
