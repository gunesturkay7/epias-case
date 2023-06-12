/* Dependencies */
import { Link } from "react-router-dom";
/* Components */
import Avatar from "../../Avatar/Avatar";
/* Styles */
import "./UserInfo.scss";

const UserInfo = () => {
  const currentUser = {
    id: 1,
    name: "Ayhan Y.",
  };
  return (
    <Link to="/profile" className="user-info">
      <Avatar alt={currentUser.name} size="small" variant="default" name={currentUser.name} />
      <span className="user-info__name"> Merhaba, {currentUser.name}</span>
    </Link>
  );
};

export default UserInfo;
