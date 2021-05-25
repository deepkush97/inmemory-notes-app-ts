import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import clsx from "clsx";
import { format } from "date-fns";
import { FC } from "react";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    navTitle: {
      transition: theme.transitions.create(["display"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginLeft: 4,
      marginRight: 30,
    },
    hide: {
      display: "none",
    },
    date: {
      marginRight: 24,
      marginLeft: "auto",
    },
  })
);

interface NavBarProps {
  openSideBar: () => void;
  open: boolean;
}

export const NavBar: FC<NavBarProps> = ({ open, openSideBar }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar disableGutters>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openSideBar}
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <Menu />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          className={clsx(classes.navTitle, {
            [classes.hide]: open,
          })}
        >
          InMemory Notes
        </Typography>
        <Typography className={classes.date}>
          {format(new Date(), "do MMMM Y")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
