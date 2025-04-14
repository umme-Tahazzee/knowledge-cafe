import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="md:w-2/3">
        <div className="">Blogs: {blogs.length} </div>
        {
        blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))
        }
      </div>
    </div>
  );
};

export default Blogs;
