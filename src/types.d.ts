type CategoryType = "todo" | "reminder" | "personal" | "work";

interface ICreateNote {
  title: string;
  category: CategoryType;
  details: string;
}

interface INote extends ICreateNote {
  id: string;
}

type NotesContextType = {
  notes: INote[];
  saveNote: (newNote: ICreateNote) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
};

type GlobalThemeContextType = {
  currentTheme: "dark" | "light";
  toggleTheme: () => void;
};
