import React, { FC, useEffect, useState } from "react";
import { v4 } from "uuid";
import { notesRepository } from "./NotesDB";

const defaultStore: NotesContextType = {
  notes: [],
  saveNote: async (newNote: ICreateNote) => new Promise(() => {}),
  deleteNote: async (id: string) => new Promise(() => {}),
};

export const NotesContext = React.createContext(defaultStore);

export const NotesProvider: FC = ({ children }): React.ReactElement => {
  const [notes, setNotes] = useState<INote[]>([]);

  async function syncWithDb() {
    const latestNotes = await notesRepository.notes.toArray();
    setNotes(latestNotes);
  }

  useEffect(() => {
    notesRepository.open().catch((error: Error) => {
      console.error(`Open failed: ${error.message}`);
    });
    syncWithDb();
    return () => {
      notesRepository.close();
    };
  }, []);

  const store: NotesContextType = {
    notes,
    saveNote: async (newNote: ICreateNote) => {
      await notesRepository.notes.add({ ...newNote, id: v4() });
      syncWithDb();
    },
    deleteNote: async (id: string) => {
      notesRepository.notes.delete(String(id));
      syncWithDb();
    },
  };

  return (
    <NotesContext.Provider value={store}>{children}</NotesContext.Provider>
  );
};
