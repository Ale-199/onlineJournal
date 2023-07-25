import { Link, useNavigate } from "react-router-dom";
import { useBlogsContext } from "../../hooks/useBlogsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./CreateBlog.css";
import { useState } from "react";

export default function CreateBlog() {
  const { dispatch } = useBlogsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState();
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const blog = { title, content, isPublic };

    const response = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (response.ok) {
      setError(null);
      setTitle("");
      setContent("");
      setIsPublic();
      dispatch({ type: "CREATE_BLOG", payload: json });
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg">
      <div className="container createJournal__container">
        <Link to="/dashboard">&larr; Go Back</Link>
        <form className="create__form" onSubmit={handleSubmit}>
          <h2>Edit your Journal</h2>
          <div className="create__input">
            <label>Title:</label>
            <input
              type="text"
              id="title"
              required="required"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              // className={emptyFields.includes("title") ? "error" : ""}
            />
          </div>
          <div className="create__input">
            <label htmlFor="content">Content:</label>
            <textarea
              cols="40"
              rows="15"
              type="text"
              id="content"
              required="required"
              name="content"
              onChange={(e) => setContent(e.target.value)}
              // className={emptyFields.includes("content") ? "error" : ""}
            />
          </div>
          <div className="create__input">
            <label>Do you want to share it to public?</label>
            <div className="radio__btn">
              <input
                type="radio"
                name="isPublic"
                value="true"
                // checked={isPublic === true}
                onChange={(e) => setIsPublic(e.target.value)}
              />
              <label>Yes</label>
              <br></br>
              <input
                type="radio"
                name="isPublic"
                value="false"
                // checked={isPublic === false}
                onChange={(e) => setIsPublic(e.target.value)}
              />
              <label>No</label>
            </div>
          </div>
          <div className="updateAndDelete__btn">
            <button>
              Create <i className="bx bxs-edit-alt"></i>
            </button>
            <button>
              Delete <i className="bx bxs-trash"></i>
            </button>
          </div>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}
