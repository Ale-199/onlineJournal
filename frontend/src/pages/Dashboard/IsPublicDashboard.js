import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useBlogsContext } from "../../hooks/useBlogsContext";

export default function IsPublicDashboard() {
  const { publicBlogs, dispatch } = useBlogsContext();

  useEffect(() => {
    const fetchPublicBlogs = async () => {
      const response = await fetch("/api/blog/publicBlogs");
      const json = await response.json();
      console.table(json);
      if (response.ok) {
        dispatch({ type: "ALL_PUBLIC_BLOGS", payload: json });
      }
    };

    fetchPublicBlogs();
  }, [dispatch]);

  return (
    <div className="bg">
      <div className="container dashboard__container">
        <div className="dashboard__title">
          <h2>All Public Journals</h2>
        </div>

        {publicBlogs &&
          publicBlogs.map((blog) => (
            <div className="dashboard__journals" key={blog._id}>
              <div className="journalTitle">
                <Link to={`/isPublicBlog/${blog._id}`}>{blog.title}</Link>
                <i className="bx bx-link-external"></i>
              </div>
              <div className="auth__name">
                <p>Author:</p>
                <p>{blog.userName.toUpperCase()}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
