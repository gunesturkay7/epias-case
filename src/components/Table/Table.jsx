import { useSelector, useDispatch } from "react-redux";
import { setVisibleColumns, setFilters, setOptions, setInitialColumns } from "../../redux/tableSlice";
import ColumnSelector from "./ColumnSelector";
import "./Table.scss";
import Dropdown from "../Dropdown/Dropdown";
import IconButton from "../IconButton/IconButton";
import SettingsIcon from "../Icons/SettingsIcon";
import PlusIcon from "../Icons/PlusIcon";
import UploadIcon from "../Icons/UploadIcon";
import Select from "../Select/Select";
import { useEffect } from "react";

const Table = ({ data, columns, filterColumns, controller = true, header = true }) => {
  const dispatch = useDispatch();
  const visibleColumns = useSelector((state) => state.table.visibleColumns);
  const filters = useSelector((state) => state.table.filters);

  useEffect(() => {
    const newOptions = columns.map((column) => ({ value: column.key, label: column.title }));
    dispatch(setOptions(newOptions));
  }, [columns, dispatch]);

  useEffect(() => {
    // Set the initial columns to be all columns passed in through props
    dispatch(setInitialColumns(columns));
    // ... rest of your effect logic
  }, [columns, dispatch]);
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
            {filterColumns.map((columnKey) => (
              <div key={columnKey} style={{ marginRight: "10px" }}>
                <Select
                  options={uniqueColumnValues(columnKey)}
                  size="xs"
                  variant="primary"
                  onChange={(e) => dispatch(setFilters({ [columnKey]: e.target.value }))}
                  placeholder={`Select ${columnKey}`}
                />
              </div>
            ))}
          </div>
          <div className="table-controller-right">
            <IconButton icon={<UploadIcon height="15px" />} />
            <Dropdown trigger={<IconButton icon={<SettingsIcon height="15px" />} />}>
              <ColumnSelector
                columns={columns}
                visibleColumns={visibleColumns}
                setVisibleColumns={(cols) => dispatch(setVisibleColumns(cols))}
              />
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
