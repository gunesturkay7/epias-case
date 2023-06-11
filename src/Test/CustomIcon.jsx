import "./CustomIcon.scss";

const CustomIcon = ({ color, size }) => {
  return (
    <svg
      className="custom-icon"
      style={{ fill: color, width: size, height: size }}
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_3)" fill="currentColor">
        <path d="M0 571.433V800H800V571.433H0ZM171.433 742.867H57.1333V685.733H171.433V742.867Z" />
        <path d="M571.433 171.433H457.133V457.133H342.833V171.433H228.533L399.967 0L571.433 171.433Z" />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect width="800" height="800" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CustomIcon;
