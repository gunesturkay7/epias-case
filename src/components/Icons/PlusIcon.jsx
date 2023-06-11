const PlusIcon = ({ height = "100", color = "black" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={height} height={height} id="plus">
      <path
        fill={color}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 1v14M1 8h14"
      ></path>
    </svg>
  );
};

export default PlusIcon;
