import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { MarkdownEditor } from "../components/MarkdownEditor";
import { NotesContext } from "../context/NotesContext";

const useStyles = makeStyles((theme) => ({
  field: {
    marginBottom: 20,
    display: "block",
  },
  submitButton: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  textEditor: {
    marginBottom: 20,
    fontSize: theme.typography.pxToRem(16),
  },
}));

export const Create = () => {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState<CategoryType>("todo");

  const { saveNote } = useContext(NotesContext) as NotesContextType;

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
      saveNote({ title, details, category });
      history.push("/");
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Card>
        <CardHeader title="Create a Note" />
        <CardContent>
          <TextField
            className={classes.field}
            onChange={(e) => setTitle(e.target.value)}
            label="Note Title"
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
          <FormControl className={classes.field}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
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
        </CardContent>

        <CardActions>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.submitButton}
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
