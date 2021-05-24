import * as React from "react";

export const NotesContext = React.createContext<NotesContextType | null>(null);

export const NotesProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [notes, setNotes] = React.useState<INote[]>([
    {
      id: 1,
      title: "note 1",
      details: "this is a description",
      category: "personal",
    },
    {
      id: 2,
      title: "note 2",
      details: "this is a description",
      category: "work",
    },
    {
      id: 3,
      title: "note 3",
      details: "this is a description",
      category: "reminder",
    },
    {
      id: 4,
      title: "note 4",
      details: "this is a description",
      category: "todo",
    },
  ]);

  const saveNote = ({ category, details, title }: ICreateNote) => {
    const newNote: INote = {
      id: Math.random(),
      title,
      details,
      category,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <NotesContext.Provider value={{ notes, saveNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
