import { makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import Masonry from "react-masonry-css";
import { DeleteConfirmationDialog } from "../components/DeleteConfirmationDialog";
import { NoteCard } from "../components/NoteCard";
import { NotesContext } from "../context/global";

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
  };
});

export const View = () => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deletingNoteId, setDeletingNoteId] = useState(0);

  const { notes, deleteNote } = useContext(NotesContext) as NotesContextType;
  const classes = useStyle();
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const openDeleteConfirmation = (id: number) => {
    setDeleteConfirmation(true);
    setDeletingNoteId(id);
  };
  const handleConfirmDelete = () => {
    setDeleteConfirmation(false);
    deleteNote(deletingNoteId);
    setDeletingNoteId(0);
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpoints}
        className={classes.notesGrid}
        columnClassName={classes.notesColumnGrid}
      >
        {notes.map((note) => (
          <div key={note.id} className={classes.divSpaced}>
            <NoteCard
              note={note}
              handleDelete={() => openDeleteConfirmation(note.id)}
            />
          </div>
        ))}
      </Masonry>
      <DeleteConfirmationDialog
        deleteConfirmation={deleteConfirmation}
        closeDeleteConfirmation={() => setDeleteConfirmation(false)}
        handleConfirmDelete={handleConfirmDelete}
      />
    </>
  );
};
