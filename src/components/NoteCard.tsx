import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import { DeleteOutlined } from "@material-ui/icons";
import React, { FC, useContext } from "react";
import { NotesContext } from "../context/global";

interface NoteCardProps {
  note: INote;
}

const useStyles = makeStyles<Theme, { category: CategoryType }>({
  avatar: {
    backgroundColor: ({ category }) => {
      if (category === "work") {
        return yellow[700];
      }
      if (category === "personal") {
        return green[500];
      }
      if (category === "todo") {
        return pink[500];
      }
      return blue[500];
    },
  },
});

export const NoteCard: FC<NoteCardProps> = ({ note }) => {
  const classes = useStyles(note);
  const { deleteNote } = useContext(NotesContext) as NotesContextType;

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => deleteNote(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
