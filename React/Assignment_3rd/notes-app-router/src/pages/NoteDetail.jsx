import { useNavigate, useParams } from "react-router-dom";

function NoteDetail({ notes, deleteNote }) {

  // useParams(), is a hook that returns an object of key/value pairs of the dynamic params from the current URL 
  // that were matched by the <Route path>.
  const { id } = useParams();

  // useNavigate(), Used to navigate to another page
  const navigate = useNavigate();

 const noteId = Number(id);

const note = notes.find(
  (note) => note.id === noteId
);

  if (!note) {
    return <h2>Note not found</h2>;
  }

  // Delete by id and navigate to Notes page after deleting.

  const handleDelete = () => {

    deleteNote(note.id);
    navigate("/notes");
  };

  return (
    <div>

      <h2>{note.title}</h2>

      <p>{note.body}</p>

      <button onClick={handleDelete}>
        Delete Note
      </button>

    </div>
  );
}

export default NoteDetail;