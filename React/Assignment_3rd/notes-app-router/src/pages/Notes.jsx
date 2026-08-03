import { Link } from "react-router-dom";

function Notes({ notes }) {

  // notes as props from App.jsx.
  return (
    <div>

 <h2>All Notes</h2>
      {notes.length === 0 && (
        <h3>No Notes Available</h3>
      )}

      {notes.map((note) => {

        return (
          <div key={note.id}  style={{
              border: "1px solid black", padding: "10px",  marginBottom: "10px",
            }} >

          
            <Link
              to={`/notes/${note.id}`}
              style={{  color: "black",
                fontWeight: "bold",
              }}
            >
              {note.title}
            </Link>

          </div>

        );

      })}

    </div>
  );
}

export default Notes;
