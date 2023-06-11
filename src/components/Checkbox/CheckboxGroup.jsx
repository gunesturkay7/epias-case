import "./CheckBox.scss";
import CheckBox from "./Checkbox";

const CheckBoxGroup = ({ options, name, selectedValues, onChange }) => {
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    let newSelectedValues;
    if (event.target.checked) {
      newSelectedValues = [...selectedValues, value];
    } else {
      newSelectedValues = selectedValues.filter((item) => item !== value);
    }
    onChange(newSelectedValues);
  };

  return (
    <div>
      {options.map((option) => (
        <CheckBox
          key={option.value}
          label={option.label}
          value={option.value}
          name={name}
          checked={selectedValues.includes(option.value)}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

export default CheckBoxGroup;
