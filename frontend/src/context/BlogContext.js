import { createContext, useReducer } from "react";

export const BlogsContext = createContext();

export const blogsReducer = (state, action) => {
  switch (action.type) {
    case "ALL_PUBLIC_BLOGS":
      return {
        ...state,
        publicBlogs: action.payload,
      };
    case "ALL_BLOGS":
      return {
        ...state,
        blogs: action.payload,
      };
    case "CREATE_BLOG":
      if (state.blogs)
        return {
          ...state,
          blogs: [action.payload, ...state.blogs],
        };
      return {
        ...state,
        blogs: [action.payload],
      };
    case "DELETE_BLOG":
      return {
        ...state,
        blogs: state.blogs.filter((j) => j._id !== action.payload._id),
      };
    case "UPDATE_BLOG":
      const updatedBlog = state.blogs.map((blog) => {
        if (blog._id === action.payload._id) {
          return action.payload;
        }
        return blog;
      });
      return {
        ...state,
        blogs: updatedBlog,
      };
    default:
      return state;
  }
};

export const BlogsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogsReducer, {
    blogs: null,
    publicBlogs: null,
  });

  return (
    <BlogsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
};
