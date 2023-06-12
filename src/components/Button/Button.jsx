/* Styles */
import "./Button.scss";

const Button = ({ variant, children, disabled, loading, icon, ...props }) => {
  let buttonClass = "button";

  if (variant) {
    buttonClass += ` ${variant}`;
  }

  if (loading) {
    buttonClass += " loading";
    disabled = true;
  }

  return (
    <button className={buttonClass} disabled={disabled} {...props}>
      <span>
        {icon && <>{icon}</>}
        {children}
      </span>
    </button>
  );
};

export default Button;
