"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { IBlog } from "@/types";

const BlogsPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();

  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");

  return (
    <div className="w-10/12 mx-auto my-5">
      <h2 className="text-3xl font-bold text-center">
        All blogs from <span className="text-accent">Blogiz</span>
      </h2>
      <p className="w-3/6 mx-auto text-gray-500 mt-3 text-base">
        <i>
          Dive into the fascinating world of quantum computing, where
          traditional binary bits make way for qubits
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {blogs?.map((blog: IBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
