/* Styles */
import "./IconButton.scss";

const IconButton = ({ variant, size, outlined, icon, ...props }) => {
  let buttonClass = "icon-button";

  if (variant) {
    buttonClass += ` ${variant}`;
  }

  if (size) {
    buttonClass += ` ${size}`;
  }

  if (outlined) {
    buttonClass += " outlined";
  }

  return (
    <button className={buttonClass} {...props}>
      {icon}
    </button>
  );
};

export default IconButton;
