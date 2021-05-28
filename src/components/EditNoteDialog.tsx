import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React, { FC, FormEvent, useState, useEffect } from "react";
import { MarkdownEditor } from "./MarkdownEditor";
const useStyles = makeStyles((theme) => ({
  field: {
    marginBottom: 20,
    display: "block",
  },
  submitButton: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

interface EditNoteDialogProps {
  note: INote;
  editDialog: boolean;
  closeEditDialog: () => void;
  handleUpdateNote: (note: INote) => void;
}

export const EditNoteDialog: FC<EditNoteDialogProps> = ({
  note,
  editDialog,
  closeEditDialog,
  handleUpdateNote,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState<CategoryType>("todo");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDetails(note.details);
      setCategory(note.category);
    } else {
      closeEditDialog();
    }
  }, [note, closeEditDialog]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      handleUpdateNote({ id: note.id, title, details, category });
    }
  };

  return (
    <Dialog
      open={editDialog}
      onClose={closeEditDialog}
      aria-labelledby="form-dialog-title"
      fullScreen={fullScreen}
    >
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Edit Note</DialogTitle>
        <DialogContent>
          <TextField
            className={classes.field}
            onChange={(e) => setTitle(e.target.value)}
            label="Note Title"
            defaultValue={title}
            variant="outlined"
            fullWidth
            required
            error={titleError}
          />
          <MarkdownEditor
            value={details}
            onChangeHandler={(value) => setDetails(value)}
            placeholder="Details *"
            error={detailsError}
          />
          <FormControl>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
              row
              value={category}
              onChange={(e) => setCategory(e.target.value as CategoryType)}
            >
              <FormControlLabel
                value="personal"
                control={<Radio color="primary" />}
                label="Personal"
              />
              <FormControlLabel
                value="todo"
                control={<Radio color="primary" />}
                label="Todo"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio color="primary" />}
                label="Reminder"
              />
              <FormControlLabel
                value="work"
                control={<Radio color="primary" />}
                label="Work"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditDialog} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Update
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
