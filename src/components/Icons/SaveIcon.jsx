const SaveIcon = ({ height = "15px", color = "white" }) => {
  return (
    <svg width={height} height={height} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M380.44 32H64C55.5131 32 47.3737 35.3714 41.3726 41.3726C35.3714 47.3737 32 55.5131 32 64V448C32 456.487 35.3714 464.626 41.3726 470.627C47.3737 476.629 55.5131 480 64 480H448C456.48 479.976 464.605 476.597 470.601 470.601C476.597 464.605 479.976 456.48 480 448V131.56L380.44 32ZM112 176V112H304V176H112ZM335.91 355.76C335.182 371.246 329.97 386.186 320.908 398.765C311.846 411.343 299.324 421.018 284.866 426.612C270.408 432.206 254.635 433.479 239.467 430.275C224.299 427.072 210.388 419.53 199.426 408.567C188.465 397.604 180.925 383.693 177.723 368.524C174.521 353.356 175.796 337.583 181.392 323.126C186.988 308.668 196.664 296.148 209.243 287.087C221.823 278.027 236.764 272.816 252.25 272.09C263.368 271.601 274.465 273.43 284.838 277.462C295.21 281.493 304.63 287.639 312.498 295.509C320.367 303.378 326.512 312.799 330.542 323.172C334.573 333.544 336.401 344.642 335.91 355.76Z"
        fill={color}
      />
    </svg>
  );
};

export default SaveIcon;
