import { createContext, useReducer } from "react";

export const BlogsContext = createContext();

export const blogsReducer = (state, action) => {
  switch (action.type) {
    case "SET_BLOGS":
      return {
        blogs: action.payload,
      };
    case "CREATE_BLOG":
      return {
        blogs: [action.payload, ...state.blogs],
      };
    case "DELETE_BLOG":
      return {
        blogs: state.blogs.filter((j) => j._id !== action.payload._id),
      };
    case "UPDATE_BLOG":
      const updatedBlog = action.payload;
      const updatedBlogg = state.blogs.map((blog) => {
        if (blog._id === updatedBlogg._id) {
          return updatedBlog;
        }
        return blog;
      });
      return {
        ...state,
        blogs: updatedBlogg,
      };
    default:
      return state;
  }
};

export const BlogsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogsReducer, {
    blogs: null,
  });

  return (
    <BlogsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
};