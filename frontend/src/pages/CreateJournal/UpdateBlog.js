import "./CreateBlog.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useBlogsContext } from "../../hooks/useBlogsContext";

export default function UpdateBlog() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const { dispatch } = useBlogsContext();

  //useState hook
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch("/api/blog/" + id, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const json = await response.json();
      console.table(json);
      if (response.ok) {
        setData(json);
        console.table(json);
      }
    };

    if (user) {
      fetchBlog();
    }
  }, [id]);

  //handle update button
  const handleUpdate = async (blogId, e) => {
    e.preventDefault();

    if (!user) {
      return;
    }

    const updatedBlog = { title, content, isPublic };

    const response = await fetch("/api/blog/" + blogId, {
      method: "PATCH",
      body: JSON.stringify(updatedBlog),
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "UPDATE_BLOG", payload: json });
    }
  };

  return (
    <div className="bg">
      <div className="container createJournal__container">
        <Link to="/dashboard">&larr; Go Back</Link>
        <form className="create__form" onSubmit={() => handleUpdate(data._id)}>
          <h2>Edit your Journal</h2>
          <div className="create__input">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="create__input">
            <label htmlFor="content">Content:</label>
            <textarea
              cols="40"
              rows="15"
              type="text"
              id="content"
              name="content"
              value={data.content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="create__input">
            <label>Do you want to share it to public?</label>
            <div className="radio__btn">
              <input
                type="radio"
                name="isPublic"
                value="true"
                onChange={(e) => setIsPublic(e.target.value)}
              />
              <label>Yes</label>
              <br></br>
              <input
                type="radio"
                name="isPublic"
                value="false"
                onChange={(e) => setIsPublic(e.target.value)}
              />
              <label>No</label>
            </div>
          </div>
          <div className="updateAndDelete__btn">
            <button>
              Update <i className="bx bxs-edit-alt"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
