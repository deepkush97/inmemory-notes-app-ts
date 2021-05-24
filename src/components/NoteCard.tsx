import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Theme,
  Typography,
  CardActions,
  Collapse,
  createStyles,
} from "@material-ui/core";
import { blue, green, pink, red, yellow } from "@material-ui/core/colors";
import { DeleteOutlined, ExpandMore } from "@material-ui/icons";
import clsx from "clsx";
import React, { FC, useContext } from "react";
import { NotesContext } from "../context/global";

interface NoteCardProps {
  note: INote;
}
const useStyles = makeStyles<Theme, { category: CategoryType }>(
  (theme: Theme) =>
    createStyles({
      expand: {
        transform: "rotate(0deg)",
        margin: "auto",
        transition: theme.transitions.create("transform", {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: "rotate(180deg)",
      },
      content: {
        minHeight: theme.spacing(2),
      },
      deleteBtn: {
        color: red[600],
      },
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
    })
);

export const NoteCard: FC<NoteCardProps> = ({ note }) => {
  const classes = useStyles(note);
  const { deleteNote } = useContext(NotesContext) as NotesContextType;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            className={classes.deleteBtn}
            onClick={() => deleteNote(note.id)}
          >
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" color="textSecondary" component="p">
          {note.details.length > 30
            ? `${note.details.substr(0, 30)}...`
            : note.details}
        </Typography>
      </CardContent>
      {note.details.length > 30 && (
        <>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{note.details}</Typography>
            </CardContent>
          </Collapse>
        </>
      )}
    </Card>
  );
};
