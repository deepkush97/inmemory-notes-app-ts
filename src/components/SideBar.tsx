import {
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  AddCircleOutlineOutlined,
  ChevronLeft,
  SubjectOutlined,
  FlashOff,
  FlashOn,
  GitHub,
} from "@material-ui/icons";
import clsx from "clsx";
import React, { FC, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { GlobalThemeContext } from "../theme/GlobalTheme";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    title: {
      paddingLeft: theme.spacing(2),
    },
    active: {
      background: theme.palette.background.default,
    },
    bottomList: {
      marginTop: "auto",
    },
  };
});

interface SideBarProps {
  closeSideBar: () => void;
  open: boolean;
}
export const SideBar: FC<SideBarProps> = ({ closeSideBar, open }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { currentTheme, toggleTheme } = useContext(
    GlobalThemeContext
  ) as GlobalThemeContextType;
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="primary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: "/create",
    },
  ];
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          InMemory Notes
        </Typography>
        <IconButton onClick={closeSideBar}>
          <ChevronLeft />
        </IconButton>
      </div>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path ? classes.active : ""}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>

      <List className={classes.bottomList}>
        <ListItem button onClick={toggleTheme}>
          <ListItemIcon>
            {currentTheme === "light" ? (
              <FlashOff color="primary" />
            ) : (
              <FlashOn color="primary" />
            )}
          </ListItemIcon>
          <ListItemText
            primary={`Switch to ${currentTheme === "light" ? "Dark" : "Light"}`}
          />
        </ListItem>
        <ListItem button onClick={() => {}}>
          <Link
            href="https://github.com/deepkush97/inmemory-notes-app-ts"
            target="_blank"
            rel="noreferrer"
          >
            <ListItemIcon>
              <GitHub color="primary" />
            </ListItemIcon>
          </Link>
          <ListItemText primary="Github Repo" />
        </ListItem>
      </List>
    </Drawer>
  );
};
