type CategoryType = "todo" | "reminder" | "personal" | "work";

interface ICreateNote {
  title: string;
  category: CategoryType;
  details: string;
}

interface INote extends ICreateNote {
  id: number;
}

type NotesContextType = {
  notes: INote[];
  saveNote: (todo: ICreateNote) => void;
  deleteNote: (id: number) => void;
};
