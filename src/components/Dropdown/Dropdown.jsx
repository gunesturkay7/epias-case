import { useState, useRef, useEffect } from "react";
import "./Dropdown.scss";

const Dropdown = ({ trigger, children, alignment = "left" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  const handleClick = (event) => {
    // Check if clicked on trigger
    if (triggerRef.current && triggerRef.current.contains(event.target)) {
      setIsOpen(!isOpen);
    }
    // Check if clicked outside dropdown
    else if (!dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  const dropdownContentStyle = alignment === "right" ? { right: 0, left: "auto" } : {};

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-trigger" ref={triggerRef}>
        {trigger}
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`} style={dropdownContentStyle}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
