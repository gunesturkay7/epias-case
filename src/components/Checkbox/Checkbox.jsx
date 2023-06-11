import "./CheckBox.scss";

const CheckBox = ({ label, value, checked, onChange, name }) => {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" id={`${name}_${value}`} name={name} value={value} checked={checked} onChange={onChange} />
      <label htmlFor={`${name}_${value}`}>{label}</label>
    </div>
  );
};

export default CheckBox;
