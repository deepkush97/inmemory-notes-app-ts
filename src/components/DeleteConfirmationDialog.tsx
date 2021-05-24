import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { FC } from "react";
interface DeleteConfirmationDialogProps {
  deleteConfirmation: boolean;
  closeDeleteConfirmation: () => void;
  handleConfirmDelete: () => void;
}

const useStyles = makeStyles({
  deleteBtn: {
    color: red[600],
  },
});

export const DeleteConfirmationDialog: FC<DeleteConfirmationDialogProps> = ({
  deleteConfirmation,
  closeDeleteConfirmation,
  handleConfirmDelete,
}) => {
  const classes = useStyles();
  return (
    <Dialog open={deleteConfirmation} onClose={closeDeleteConfirmation}>
      <DialogTitle>{"Delete confirmation"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure want to delete this note?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDeleteConfirmation} color="default" autoFocus>
          Cancel
        </Button>
        <Button onClick={handleConfirmDelete} className={classes.deleteBtn}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
