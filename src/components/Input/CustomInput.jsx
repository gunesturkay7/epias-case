/* Styles */
import "./CustomInput.scss";

const CustomInput = ({ variant, label, error, success, ...props }) => {
  let message = null;
  let inputWrapperClass = "input-wrapper";

  if (error) {
    message = <div className="message error">{error}</div>;
    inputWrapperClass += " error";
  } else if (success) {
    message = <div className="message success">{success}</div>;
    inputWrapperClass += " success";
  }

  return (
    <div className={inputWrapperClass}>
      {label && <label>{label}</label>}
      <input {...props} className={variant} />
      {message}
    </div>
  );
};

export default CustomInput;
