import { IBlog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: IBlog[] }) => {
  return (
    <div className="w-10/12 mx-auto my-5">
      <h2 className="text-3xl font-bold text-center">
        LatestBlogs from<span className="text-accent">Blogiz</span>
      </h2>
      <p className="w-3/6 mx-auto text-gray-500 mt-3 text-base">
        <i>
          Dive into the fascinating world of quantum computing, where
          traditional binary bits make way for qubits
        </i>
      </p>
      <div className="grid grid-cols-2 gap-4">
        {blogs?.slice(0, 2)?.map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {blogs?.slice(2, 5)?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
