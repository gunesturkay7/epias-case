import "./Avatar.scss";

const Avatar = ({ src, alt, size = "medium", variant = "circle", name }) => {
  let avatarSize, avatarShape;

  switch (size) {
    case "small":
      avatarSize = "avatar--small";
      break;
    case "large":
      avatarSize = "avatar--large";
      break;
    default:
      avatarSize = "avatar--medium";
      break;
  }

  switch (variant) {
    case "rounded":
      avatarShape = "avatar--rounded";
      break;
    case "square":
      avatarShape = "avatar--square";
      break;
    case "default":
      avatarShape = "avatar--default";
      break;
    default:
      avatarShape = "avatar--circle";
      break;
  }

  const getInitials = (name) => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };

  return src ? (
    <img className={`avatar ${avatarSize} ${avatarShape}`} src={src} alt={alt} />
  ) : (
    <div className={`avatar ${avatarSize} ${avatarShape} avatar--initials`}>{getInitials(name)}</div>
  );
};

export default Avatar;
