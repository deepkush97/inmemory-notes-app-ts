import { makeStyles } from "@material-ui/core";
import { FC } from "react";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      minHeight: "92vh",
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    toolbar: theme.mixins.toolbar,
  };
});

export const Layout: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <SideBar />
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};
