import { Card, makeStyles, useTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import MdEditor from "for-editor";
import React, { FC } from "react";

const useStyles = makeStyles((theme) => ({
  textEditor: {
    marginBottom: 20,
    fontSize: theme.typography.pxToRem(16),
  },
}));

interface MarkdownEditorProps {
  value: string;
  onChangeHandler: (value: string) => void;
  error: boolean;
  placeholder: string;
}

export const MarkdownEditor: FC<MarkdownEditorProps> = ({
  value,
  onChangeHandler,
  error,
  placeholder,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Card
      className={classes.textEditor}
      style={
        error
          ? {
              border: "1px solid #f44336",
              boxShadow: "none",
              color: red[400],
            }
          : { border: "none", boxShadow: "none" }
      }
    >
      <MdEditor
        fontSize={theme.typography.pxToRem(16)}
        height={theme.typography.pxToRem(300)}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        toolbar={{
          h1: true,
          h2: true,
          h3: true,
          h4: true,
          img: false,
          link: true,
          code: true,
          preview: false,
          expand: false,
          undo: true,
          redo: true,
          save: false,
          subfield: false,
        }}
      />
    </Card>
  );
};
