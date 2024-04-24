import LoadingCard from "@/components/ui/LoadingCard";
import { IBlog } from "@/types";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return (
    <div className="flex gap-4 my-5">
      {blogs?.map((blog: IBlog) => (
        <LoadingCard key={blog?.id} />
      ))}
    </div>
  );
};

export default BlogLoadingPage;
