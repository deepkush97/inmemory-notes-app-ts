import { CssBaseline } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { FC, useState } from "react";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export const Layout: FC = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar openSideBar={() => setOpen(true)} open={open} />
      <SideBar closeSideBar={() => setOpen(false)} open={open} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
