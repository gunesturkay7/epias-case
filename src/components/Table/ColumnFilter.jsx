/* Dependencies */
import { useState } from "react";

const ColumnFilter = ({ column, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} placeholder={`Filter ${column}`} />;
};

export default ColumnFilter;
