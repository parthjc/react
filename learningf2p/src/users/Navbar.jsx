import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ProductContext } from "../product/ProductContext";

export const Navbar = () => {
  const { sharedData } = useContext(ProductContext);
  const cartStyle = {
    position: "relative",
    right: "0px",
    top: "0px",
    height: "50px",
    width: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "#fff", // Cart color
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#2ecc71", // Green color
  };

  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerState({ left: open });
    document.body.style.overflow = open ? 'hidden' : 'auto';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const links = [
    { name: "EMPLIST", path: "/emplist", icon: <EmojiPeopleIcon style={{ color: "#FF5733" }} /> },
    { name: "ABOUT EMP", path: "/aboutemp", icon: <MailIcon style={{ color: "#FFD700" }} /> },
    { name: "CONTACT EMP", path: "/contactemp", icon: <PhoneIcon style={{ color: "#36A2EB" }} /> },
    { name: "Apidemo1", path: "/apidemo1", icon: <ShowChartIcon style={{ color: "#FF6347" }} /> },
    { name: "Apidemo2", path: "/apidemo2", icon: <ShowChartIcon style={{ color: "#FF6347" }} /> },
    { name: "Apidemo3", path: "/apidemo3", icon: <ShowChartIcon style={{ color: "#FF6347" }} /> },
    { name: "ApidemoPost", path: "/apidemopost", icon: <SettingsIcon style={{ color: "#20B2AA" }} /> },
    { name: "ApiAddUser", path: "/apiadduser", icon: <PeopleAltIcon style={{ color: "#FF8C00" }} /> },
    { name: "ApiTokenDemo", path: "/apitokendemo", icon: <LockIcon style={{ color: "#8A2BE2" }} /> },
    { name: "Count", path: "/count", icon: <EqualizerIcon style={{ color: "#4CAF50" }} /> },
    { name: "WeatherApp", path: "/weatherapp", icon: <WbSunnyIcon style={{ color: "#FFD700" }} /> },
    { name: "Students", path: "/students", icon: <SchoolIcon style={{ color: "#4CAF50" }} /> },
    { name: "Products", path: "/products", icon: <LibraryBooksIcon style={{ color: "#9932CC" }} /> },
    { name: "Cart", path: "/cart", icon: <ShoppingCartIcon style={{ color: "#FF4500" }} /> },
    { name: "Login", path: "/login", icon: <AccountBalanceWalletIcon style={{ color: "#8B4513" }} /> },
    { name: "MuiDemo1", path: "/muidemo1", icon: <DashboardIcon style={{ color: "#008B8B" }} /> },
    { name: "MuiDemo2", path: "/muidemo2", icon: <DashboardIcon style={{ color: "#008B8B" }} /> },
    { name: "MuiTable", path: "/MuiTable", icon: <DashboardIcon style={{ color: "#008B8B" }} /> },
    { name: "MuiTable2", path: "/MuiTable2", icon: <DashboardIcon style={{ color: "#008B8B" }} /> },
    { name: "MaterialDashBoard", path: "/materialDashBoard", icon: <DashboardIcon style={{ color: "#008B8B" }} /> },
  ];

  return (
    <div>
      {/* Responsive Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#2ecc71", color: "#fff" }}>
        <Link className="navbar-brand" to="/emplist" style={{ color: "#fff" }}>
          EMPLOYEE LIST
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleDrawer(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {links.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className={`nav-link ${location.pathname === item.path ? "active-link" : ""}`}
                  to={item.path}
                  style={{ color: "#fff", backgroundColor: "#2ecc71" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Cart icon */}
          <Link style={cartStyle} className="nav-link" to="/cart">
            {sharedData?.length}
            <ShoppingCartIcon style={{ fontSize: "24px", marginLeft: "5px" }} />
          </Link>
        </div>
      </nav>

      {/* Drawer for Mobile Screens */}
      <Drawer
        anchor="left"
        open={drawerState.left}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250, backgroundColor: "#2ecc71", color: "#fff" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {links.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  className={location.pathname === item.path ? "active-link" : ""}
                >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};
