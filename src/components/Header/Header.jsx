import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "./Logo";
import UserInfo from "./UserInfo/UserInfo";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import SplitIcon from "../Icons/SplitIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import SaveIcon from "../Icons/SaveIcon";

const Header = () => {
  const sizes = useSelector((state) => state.sizes); // Select the sizes from the Redux store
  const [icon, setIcon] = useState(
    <div
      style={{
        background: "#28a745",
        padding: "4px",
        borderRaius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SettingsIcon height="30px" />
    </div>
  ); // Initial icon
  const isFirstRender = useRef(true); // To check if it's the first render

  useEffect(() => {
    // Skip the first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Change the icon to faSpinner for 2 seconds
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
    const timeoutId = setTimeout(() => {
      setIcon(<SplitIcon height="30px" color="white" />); // Change back to the initial icon
    }, 500);

    // Cleanup
    return () => clearTimeout(timeoutId);
  }, [sizes]); // Depend on sizes state
  return (
    <>
      <div className="logo">
        <Link to="/a">
          <Logo width="50px" height="auto" />
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
