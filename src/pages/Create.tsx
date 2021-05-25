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
import { NotesContext } from "../context/NotesContext";

const useStyles = makeStyles({
  field: {
    marginBottom: 20,
    display: "block",
  },
});

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
          <TextField
            className={classes.field}
            onChange={(e) => setDetails(e.target.value)}
            label="Details"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
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
            endIcon={<KeyboardArrowRightIcon />}
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
