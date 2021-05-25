import Dexie from "dexie";

class NotesDB extends Dexie {
  notes: Dexie.Table<INote, string>;

  constructor(databaseName: string) {
    super(databaseName);
    this.version(1).stores({
      notes: "++id,title,details,category",
    });

    this.notes = this.table("notes");
  }
}

export const notesRepository = new NotesDB("todoDatabase");
