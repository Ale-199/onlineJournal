import { Link } from "react-router-dom";
export default function UpdateJournal() {
  return (
    <div className="bg">
      <div className="container createJournal__container">
        <Link to="/dashboard">&larr; Go Back</Link>
        <form className="create__form">
          <h2>Edit your Journal</h2>
          <div className="create__input">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" required="required" />
          </div>
          <div className="create__input">
            <label htmlFor="content">Content:</label>
            <textarea
              cols="40"
              rows="15"
              type="text"
              id="content"
              required="required"
            />
          </div>
          <div className="updateAndDelete__btn">
            <button>
              Update <i class="bx bxs-edit-alt"></i>
            </button>
            <button>
              Delete <i className="bx bxs-trash"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
