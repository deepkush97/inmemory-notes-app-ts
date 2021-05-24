import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { NoteCard } from "../components/NoteCard";
import { NotesContext } from "../context/global";
export const View = () => {
  const { notes } = useContext(NotesContext) as NotesContextType;

  return (
    <Grid container spacing={3}>
      {notes.map((note) => (
        <Grid key={note.id} item xs={12} sm={6} md={4} lg={3}>
          <NoteCard note={note} />
        </Grid>
      ))}
    </Grid>
  );
};
