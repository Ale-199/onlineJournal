import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useBlogsContext } from "../../hooks/useBlogsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect } from "react";

export default function Dashboard() {
  const { blogs, dispatch } = useBlogsContext();

  const { user } = useAuthContext();

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

  return (
    <div className="bg">
      <div className="container dashboard__container">
        <div className="dashboard__title">
          <h2>Your Journals</h2>
          <Link to="/createBlog">+ Add New Journal</Link>
        </div>
        {blogs &&
          blogs.map((blog) => (
            <div className="dashboard__journals">
              <div className="journalTitle">
                <h3>{blog.title}</h3>
                <i className="bx bx-link-external"></i>
              </div>
              <div className="editAndDelete__btn">
                <button>
                  Edit <i className="bx bxs-edit-alt"></i>
                </button>
                <button>
                  Delete <i className="bx bxs-trash"></i>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
