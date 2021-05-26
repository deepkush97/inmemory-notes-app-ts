import { makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import Masonry from "react-masonry-css";
import { DeleteConfirmationDialog } from "../components/DeleteConfirmationDialog";
import { EditNoteDialog } from "../components/EditNoteDialog";
import { NoNotesBanner } from "../components/NoNotesBanner";
import { NoteCard } from "../components/NoteCard";
import { NotesContext } from "../context/NotesContext";

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
  const [deletingNoteId, setDeletingNoteId] = useState("");
  const [editDialog, setEditDialog] = useState(false);
  const [editingNote, setEditingNote] = useState<INote | undefined>();

  const { notes, deleteNote, updateNote } = useContext(
    NotesContext
  ) as NotesContextType;
  const classes = useStyle();
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const openDeleteConfirmation = (id: string) => {
    setDeleteConfirmation(true);
    setDeletingNoteId(id);
  };
  const handleConfirmDelete = () => {
    setDeleteConfirmation(false);
    deleteNote(deletingNoteId);
    setDeletingNoteId("");
  };

  const openEditNote = (id: string) => {
    const currentNote = notes.find((note) => note.id === id);
    if (currentNote) {
      setEditDialog(true);
      setEditingNote(currentNote);
    }
  };
  const handleUpdateNote = (updatedNote: INote) => {
    setEditDialog(false);
    updateNote(updatedNote);
    setDeletingNoteId("");
  };
  const closeEditDialog = () => {
    setEditingNote(undefined);
    setEditDialog(false);
  };

  return (
    <>
      {notes.length > 0 ? (
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
                  handleEdit={(id: string) => openEditNote(id)}
                />
              </div>
            ))}
          </Masonry>
          <DeleteConfirmationDialog
            deleteConfirmation={deleteConfirmation}
            closeDeleteConfirmation={() => setDeleteConfirmation(false)}
            handleConfirmDelete={handleConfirmDelete}
          />
          <EditNoteDialog
            editDialog={editDialog}
            note={editingNote!}
            closeEditDialog={closeEditDialog}
            handleUpdateNote={handleUpdateNote}
          />
        </>
      ) : (
        <NoNotesBanner />
      )}
    </>
  );
};
