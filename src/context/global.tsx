import * as React from "react";

export const NotesContext = React.createContext<NotesContextType | null>(null);

export const NotesProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [notes, setNotes] = React.useState<INote[]>([
    {
      id: 1,
      title: "note 1",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolor consequatur maiores cumque, voluptates quia nesciunt, voluptatum molestiae deleniti vel ipsa, illo debitis expedita! Iure fugit quisquam necessitatibus architecto ratione!",
      category: "personal",
    },
    {
      id: 2,
      title: "note 2",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur praesentium reprehenderit corrupti quaerat, quos atque ut ab recusandae veritatis eius minima quia voluptate quod alias, quas, tempore temporibus voluptatibus exercitationem? Provident rem ullam perspiciatis veritatis repudiandae deserunt asperiores! Quae, temporibus molestias tenetur tempora non rerum dignissimos nobis, unde quibusdam accusantium quis minus omnis hic possimus nulla. Rem suscipit fugiat impedit.",
      category: "work",
    },
    {
      id: 3,
      title: "note 3",
      details:
        " adipisicing elit. Tenetur praesentium reprehenderit corrupti quaerat, quos atque ut ab recusandae veritatis eius minima quia voluptate quod alias, quas, tempore temporibus voluptatibus exercitationem?",
      category: "reminder",
    },
    {
      id: 4,
      title: "note 4",
      details:
        " consequatur maiores cumque, voluptates quia nesciunt, voluptatum molestiae deleniti vel ipsa, illo debitis expedita! Iure fugit quisquam necessitatibus architecto ",
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
