import { useEffect, useState } from "react";
import "./Blog.css";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";

export default function IsPublicBlogs() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch("/api/blog/publicBlog/" + id);

      const json = await response.json();
      setData(json);
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="bg">
      <div className="container journal__container">
        <Link to="/isPublicDashboard">&larr; Go Back</Link>
        <div className="journal__content">
          <h2>{data.title}</h2>
          <h3>{dayjs(data.createdAt).format("MM/DD/YYYY HH:mm:ss A")}</h3>
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
}
