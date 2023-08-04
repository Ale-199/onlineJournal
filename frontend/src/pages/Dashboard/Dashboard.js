import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useBlogsContext } from "../../hooks/useBlogsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { blogs, dispatch } = useBlogsContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blog", {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "ALL_BLOGS", payload: json });
      }
    };

    if (user) {
      fetchBlogs();
    }
  }, [dispatch, user]);

  //handle delete button
  const handleDelete = async (blogId) => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/blog/" + blogId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BLOG", payload: json });
    }
  };

  return (
    <div className="bg">
      <div className="container dashboard__container">
        <div className="dashboard__title">
          <h2>Your Journals</h2>
          <Link to="/createBlog">+ Add New Journal</Link>
        </div>
        {blogs &&
          blogs.map((blog) => (
            <div className="dashboard__journals" key={blog._id}>
              <div className="journalTitle">
                <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                <i className="bx bx-link-external"></i>
              </div>
              <div className="editAndDelete__btn">
                {/* <button onClick={() => navigate(`/updateBlog/blog._id}`)}> */}
                <button onClick={() => navigate(`/updateBlog/blog._id}`)}>
                  Edit <i className="bx bxs-edit-alt"></i>
                </button>
                <button onClick={() => handleDelete(blog._id)}>
                  Delete <i className="bx bxs-trash"></i>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
