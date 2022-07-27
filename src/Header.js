import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
    return (
        <div className="header">
            {/* person icon */}
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            {/* tinder logo */}
            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png"
                alt="tinder-logo"
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header