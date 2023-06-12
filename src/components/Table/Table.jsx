/* Dependencies */
import { useState, useEffect, useCallback } from "react";
/* Components */
import ColumnSelector from "./ColumnSelector";
import Dropdown from "../Dropdown/Dropdown";
import IconButton from "../IconButton/IconButton";
import SettingsIcon from "../Icons/SettingsIcon";
import PlusIcon from "../Icons/PlusIcon";
import UploadIcon from "../Icons/UploadIcon";
import Select from "../Select/Select";
/* Styles */
import "./Table.scss";

const Table = ({ data, columns, filterColumns, controller = true, header = true }) => {
  const [visibleColumns, setVisibleColumns] = useState(columns);
  const [filters, setFilters] = useState({});
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (filterColumns) {
      const newOptions = columns
        .filter((column) => filterColumns.includes(column.key))
        .map((column) => ({
          value: column.key,
          label: column.title,
        }));
      setOptions(newOptions);
    } else {
      const newOptions = columns.map((column) => ({
        value: column.key,
        label: column.title,
      }));
      setOptions(newOptions);
    }
  }, [columns, filterColumns]);

  const handleFilterChange = useCallback((columnKey, selectedValue) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [columnKey]: selectedValue,
    }));
  }, []);

  const filteredData = data.filter((item) =>
    Object.entries(filters).every(([key, value]) => (value ? item[key].toString() === value : true))
  );

  const uniqueColumnValues = (columnKey) => {
    const values = data.map((item) => item[columnKey]);
    return [...new Set(values)].map((value) => ({ value, label: value }));
  };

  return (
    <div className="table-wrapper">
      {controller && (
        <div className="table-controller">
          <div className="table-controller-left">
            {options.map((option) => (
              <div key={option.value} style={{ marginRight: "10px" }}>
                <Select
                  options={uniqueColumnValues(option.value)}
                  size="xs"
                  variant="primary"
                  onChange={(e) => handleFilterChange(option.value, e.target.value)}
                  placeholder={option.label + " Seçiniz"}
                />
              </div>
            ))}
          </div>
          <div className="table-controller-right">
            <IconButton icon={<UploadIcon height="15px" />} />
            <Dropdown trigger={<IconButton icon={<SettingsIcon height="15px" />} />}>
              <ColumnSelector columns={columns} visibleColumns={visibleColumns} setVisibleColumns={setVisibleColumns} />
            </Dropdown>
            <IconButton icon={<PlusIcon height="15px" />} />
          </div>
        </div>
      )}
      <div className="table-container">
        <table>
          {header && (
            <thead>
              <tr>
                {visibleColumns.map((column) => (
                  <th key={column.key}>{column.title}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                {visibleColumns.map((column) => (
                  <td key={column.key}>{item[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
