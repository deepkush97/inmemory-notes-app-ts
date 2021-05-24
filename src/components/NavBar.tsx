import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  date: {
    marginLeft: "auto",
  },
});

export const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      elevation={0}
      color="primary"
    >
      <Toolbar>
        <Typography className={classes.date}>
          Today is the {format(new Date(), "do MMMM Y")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
