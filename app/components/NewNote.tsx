import styles from "./NewNote.css";

function NewNote() {
  return (
    <form method="post" id="note-form">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" required></textarea>
      </p>
      <div className="form-actions">
        <button>add note</button>
      </div>
    </form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
