import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookMark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="">
      <div className="md:w-2/3   ">
        {blogs.map((blog) => (
          <Blog 
          key={blog.id}
           blog={blog}
           handleAddToBookMark={handleAddToBookMark}
           handleMarkAsRead={handleMarkAsRead}
            />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
