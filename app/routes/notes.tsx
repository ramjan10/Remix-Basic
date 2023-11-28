import { redirect } from "@remix-run/node";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import { getStoredNotes, storeNotes } from "../data/Notes";

export default function NotesPage() {
  return (
    <main>
      <NewNote />
    </main>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  //add validation
  const existingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updateNotes = existingNotes.concat(noteData);
  await storeNotes(updateNotes);
  return redirect("/notes");
}

export function links() {
  return [...newNoteLinks()];
}
