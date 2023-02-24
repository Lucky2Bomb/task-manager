import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";
interface Config {
  path: string;
  name: string;
  icon?: any;
}

export const headerConfig: Config[] = [
  { path: "/", name: "home", icon: <HomeIcon /> },
  { path: "/login", name: "login", icon: <LoginIcon /> },
  { path: "/settings", name: "settings", icon: <SettingsIcon /> },
];
