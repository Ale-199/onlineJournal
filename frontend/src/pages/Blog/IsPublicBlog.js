import { useEffect, useState } from "react";
import "./Blog.css";
import { Link, useParams } from "react-router-dom";

export default function IsPublicBlogs() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch("/api/blog/publicBlog/" + id);

      const json = await response.json();
      console.log(json);
      setData(json);
      console.log(data);
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="bg">
      <div className="container journal__container">
        <Link to="/isPublicDashboard">&larr; Go Back</Link>
        <div className="journal__content">
          <h2>{}</h2>
          <h3>2023-06-24</h3>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}
