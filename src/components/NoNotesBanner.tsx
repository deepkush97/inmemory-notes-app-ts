import React from "react";
import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const useStyle = makeStyles((theme) => {
  return {
    notesGrid: {
      display: "flex",
      marginLeft: -theme.spacing(2),
      width: "auto",
    },
    notesColumnGrid: {
      paddingLeft: theme.spacing(2),
      backgroundClip: "padding-box",
    },
    divSpaced: {
      marginBottom: theme.spacing(2),
    },
    noNotesContainer: {
      height: "94vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});
export const NoNotesBanner = () => {
  const classes = useStyle();

  const history = useHistory();
  return (
    <Container className={classes.noNotesContainer}>
      <Typography variant="h5" gutterBottom>
        There is no notes here.
      </Typography>
      <Button variant="outlined" onClick={() => history.push("/create")}>
        Create a new note
      </Button>
    </Container>
  );
};
