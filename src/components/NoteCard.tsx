import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { blue, green, pink, red, yellow } from "@material-ui/core/colors";
import { DeleteOutlined, ExpandMore } from "@material-ui/icons";
import clsx from "clsx";
import { FC, useState } from "react";

interface NoteCardProps {
  note: INote;
  handleDelete: () => void;
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
        color: red[400],
      },
      avatar: {
        backgroundColor: ({ category }) => {
          if (category === "work") {
            return yellow[400];
          }
          if (category === "personal") {
            return green[300];
          }
          if (category === "todo") {
            return pink[300];
          }
          return blue[300];
        },
      },
    })
);

export const NoteCard: FC<NoteCardProps> = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
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
              onClick={() => handleDelete()}
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
                <Typography paragraph variant="body2">
                  {note.details}
                </Typography>
              </CardContent>
            </Collapse>
          </>
        )}
      </Card>
    </>
  );
};
