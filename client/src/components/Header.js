import React from "react";
import "./header.css";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Whats app</h1>
        <div className="avtar">
        <Avatar style={{background:"blue"}}></Avatar>
          <Avatar>H</Avatar>
        </div>
      </nav>
    </header>
  );
};

export default Header;
