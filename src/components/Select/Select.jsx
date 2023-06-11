import { useState, useRef, useEffect } from "react";
import "./Select.scss";

const Select = ({ label, options, size, variant, placeholder = "Yıl Seçiniz", ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectClass = `select ${size} ${variant} ${isOpen ? "open" : ""}`;

  return (
    <div className={`select-container ${size}`} ref={selectRef}>
      {label && <label className="select-label">{label}</label>}
      <div className="select-wrapper" onClick={toggleDropdown}>
        <select className={selectClass} defaultValue="" {...props} onClick={toggleDropdown}>
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={`arrow ${isOpen ? "open" : ""}`} />
      </div>
    </div>
  );
};

export default Select;
