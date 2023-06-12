/* Dependencies */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/* Components */
import UserInfo from "./UserInfo/UserInfo";
import Logo from "./Logo";
import SaveIcon from "../Icons/SaveIcon";
import SplitIcon from "../Icons/SplitIcon";

/* Styles */
import "./Header.scss";

const Header = () => {
  const isSavedSize = useSelector((state) => state.sizes.isSavedSize);
  const [icon, setIcon] = useState(<SplitIcon height="30px" color="white" />);

  useEffect(() => {
    let timeoutId1, timeoutId2;

    if (isSavedSize) {
      setIcon(
        <div
          style={{
            background: "#28a745",
            padding: "4px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SaveIcon height="30px" color="white" />
        </div>
      );

      timeoutId1 = setTimeout(() => {
        setIcon(<SplitIcon height="30px" color="white" />);
      }, 250);

      timeoutId2 = setTimeout(() => {
        setIcon(
          <div
            style={{
              background: "#28a745",
              padding: "4px",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SaveIcon height="30px" color="white" />
          </div>
        );
      }, 500);
    } else {
      setIcon(<SplitIcon height="30px" color="white" />);
    }

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, [isSavedSize]);

  return (
    <>
      <div className="logo">
        <Link to="/workspace">
          <Logo width="50px" height="100%" />
        </Link>
      </div>
      <div className="header-right">
        {icon}
        <UserInfo></UserInfo>
      </div>
    </>
  );
};

export default Header;
