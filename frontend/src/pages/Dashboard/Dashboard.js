import "./Dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg">
      <div className="container dashboard__container">
        <div className="dashboard__title">
          <h2>Your Journals</h2>
          <Link to="/createBlog">+ Add New Journal</Link>
        </div>
        <div className="dashboard__journals">
          <div className="journalTitle">
            <h3>Title Name</h3>
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
        <div className="dashboard__journals">
          <div className="journalTitle">
            <h3>Title Name</h3>
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
        <div className="dashboard__journals">
          <div className="journalTitle">
            <h3>Title Name</h3>
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
      </div>
    </div>
  );
}
