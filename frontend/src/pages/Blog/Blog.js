import { useEffect, useState } from "react";
import "./Blog.css";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import dayjs from "dayjs";

export default function Blog() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { user } = useAuthContext();

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

  return (
    <div className="bg">
      <div className="container journal__container">
        <Link to="/dashboard">&larr; Go Back</Link>
        <div className="journal__content">
          <h2>{data.title}</h2>
          <h3>{dayjs(data.createdAt).format("MM-DD-YYYY HH:mm:ss A")}</h3>
          <p>{data.content}</p>
        </div>
      </div>
    </div>
  );
}
